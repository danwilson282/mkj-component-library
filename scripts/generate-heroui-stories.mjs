import fs from "fs";
import path from "path";
import * as HeroUI from "@heroui/react";

const outDir = path.resolve("src/components/HeroUI");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const template = (componentName) => `import { ${componentName} } from "@heroui/react";
import { Meta } from "@storybook/react";

const meta: Meta<typeof ${componentName}> = {
  title: "HeroUI/${componentName}",
  component: ${componentName},
};

export default meta;

export const Default = {
  args: {},
};
`;

const components = Object.keys(HeroUI)
  .filter((name) => /^[A-Z]/.test(name)) // export starts with uppercase
  .filter((name) => typeof HeroUI[name] === "function" || typeof HeroUI[name] === "object");

for (const name of components) {
  const filePath = path.join(outDir, `${name}.stories.tsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template(name));
    console.log(`✅ Created ${filePath}`);
  } else {
    console.log(`⚠️ Skipped existing ${name}.stories.tsx`);
  }
}