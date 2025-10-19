import fs from "fs";
import path from "path";
import * as HeroUI from "@heroui/react";
import { withCustomConfig } from "react-docgen-typescript";

// --- Config ---
const outDir = path.resolve("src/components/HeroUI");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const tsconfigPath = path.resolve("tsconfig.json");
const dtsPath = path.resolve("node_modules/@heroui/react/index.d.ts");

const parser = withCustomConfig(tsconfigPath, {
  shouldExtractLiteralValuesFromEnum: true,
  shouldExtractValuesFromUnion: true,
});

// 🔁 Manual mapping of components to prop type names
const componentPropsMap: Record<string, string> = {
  Button: "ButtonProps",
  Badge: "BadgeProps",
  // Add more as needed
};

// 🔧 Util functions
const isFunctionType = (typeName: string) =>
  /^\(\)\s*=>/.test(typeName) || /=>\s*\w+/.test(typeName);

const extractUnionValues = (raw?: string): string[] => {
  if (!raw) return [];
  const matches = raw.match(/"([^"]+)"|'([^']+)'|([a-zA-Z0-9_]+)/g);
  return matches ? matches.map((val) => val.replace(/^['"]|['"]$/g, "")) : [];
};

function generateArgsAndArgTypes(componentName: string) {
  const propsType = componentPropsMap[componentName];
  if (!propsType) {
    console.warn(`⚠️ No prop type mapping found for ${componentName}`);
    return { args: {}, argTypes: {} };
  }

  const parsed = parser.parse(dtsPath);
  const info = parsed.find((comp) => comp.displayName === propsType);

  if (!info || !info.props) {
    console.warn(`⚠️ No props found for ${componentName} (${propsType})`);
    return { args: {}, argTypes: {} };
  }

  const args: Record<string, any> = {};
  const argTypes: Record<string, any> = {};

  for (const [propName, prop] of Object.entries(info.props)) {
    const typeName = prop.type?.name || "";

    if (isFunctionType(typeName)) {
      argTypes[propName] = { action: propName };
      continue;
    }

    const options = extractUnionValues(typeName);
    if (options.length >= 2) {
      argTypes[propName] = {
        control: { type: "radio" },
        options,
      };
      args[propName] = options[0];
    } else if (typeName === "boolean") {
      argTypes[propName] = { control: "boolean" };
      args[propName] = false;
    } else if (typeName === "string") {
      argTypes[propName] = { control: "text" };
      args[propName] = ["label", "children", "text"].includes(propName) ? "Click me" : "";
    }
  }

  return { args, argTypes };
}

// === Main Loop ===

const components = Object.keys(HeroUI)
  .filter((name) => /^[A-Z]/.test(name))
  .filter((name) => typeof HeroUI[name] === "function" || typeof HeroUI[name] === "object");

for (const name of components) {
  const filePath = path.join(outDir, `${name}.stories.tsx`);

  if (fs.existsSync(filePath)) {
    console.log(`⚠️ Skipped existing ${name}.stories.tsx`);
    continue;
  }

  const { args, argTypes } = generateArgsAndArgTypes(name);

  const content = `
// ⚠️ Auto-generated. Modify if needed.

import { ${name} } from "@heroui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ${name}> = {
  title: "HeroUI/${name}",
  component: ${name},
  tags: ['autodocs'],
  ${Object.keys(argTypes).length ? `argTypes: ${JSON.stringify(argTypes, null, 2)},` : ""}
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: ${JSON.stringify(args, null, 2)},
};
`;

  fs.writeFileSync(filePath, content.trimStart());
  console.log(`✅ Created ${filePath}`);
}
