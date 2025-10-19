import React from "react";
import { PortableText, PortableTextComponents, PortableTextMarkComponentProps } from "@portabletext/react";
import type { PortableTextBlock, PortableTextMarkDefinition } from '@portabletext/types';
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

interface IconAnnotation extends PortableTextMarkDefinition {
  _type: "icon";
  iconLibrary: "md" | "fa" | "fi";
  iconName: string;
}

const iconLibraries = {
  md: MdIcons,
  fa: FaIcons,
  fi: FiIcons,
};

const IconMarkComponent: React.FC<
  PortableTextMarkComponentProps<IconAnnotation>
> = ({ children, value }) => {
  if (!value) return <>{children}</>;

  const { iconLibrary, iconName } = value;
  const IconSet = iconLibraries[iconLibrary];
  if (!IconSet) return <>{children}</>;

  const IconComponent = IconSet[iconName as keyof typeof IconSet] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  if (!IconComponent) return <>{children}</>;

  return (
    <>
        <span style={{ display: "inline-flex", alignItems: "center" }}>
            <IconComponent style={{ marginRight: 4, verticalAlign: "middle" }} />
        </span>
    {children}
    </>

  );
};

const components: PortableTextComponents = {
  marks: {
    icon: IconMarkComponent,
  },
};

interface PortableTextWithIconsProps {
  value: PortableTextBlock[];
}

export const TextBlock: React.FC<PortableTextWithIconsProps> = ({ value }) => {
  return <PortableText value={value} components={components} />;
};
