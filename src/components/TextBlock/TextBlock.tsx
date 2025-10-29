import React from "react";
import { PortableText, PortableTextComponents, PortableTextMarkComponentProps } from "@portabletext/react";
import type { PortableTextBlock, PortableTextMarkDefinition } from '@portabletext/types';
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { link } from "@heroui/react";

export type ResolveInternalLink = (ref: string) => string;

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

interface SanityLink extends PortableTextMarkDefinition {
  _type: 'link';
    linkType: 'internal' | 'external';
    internalLink?: {
      _ref: string;
      _type: 'reference';
    }; // _ref to page or post
    externalUrl?: string;
    label?: string;
    openInNewTab?: boolean;
    internalUrl?: string;
}

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

const LinkMarkComponent: React.FC<PortableTextMarkComponentProps<SanityLink>> = ({ children, value }) => {
  const href = () => {
    if (value?.linkType === 'external' && value.externalUrl) {
      return value.externalUrl;
    }
    if (value?.linkType === 'internal' && value.internalUrl) {
      return value.internalUrl;
    }
    return '/'
  }
  // const href = resolveSanityLink(value.link);
  const target = value?.openInNewTab ? '_blank' : '_self';
  return (
    <a href={href()} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  );
};

const components: PortableTextComponents = {
  marks: {
    icon: IconMarkComponent,
    link: LinkMarkComponent,
  },
};

export type TextBlockProps = {
  value: PortableTextBlock[];
}

export const TextBlock: React.FC<TextBlockProps> = ({ value }) => {
  return <PortableText value={value} components={components} />;
};
