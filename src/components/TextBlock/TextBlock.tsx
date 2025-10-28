import React from "react";
import {
  PortableText,
  PortableTextComponents,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import type { PortableTextBlock, PortableTextMarkDefinition } from "@portabletext/types";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

// ====== ICON ANNOTATION ======
interface IconAnnotation extends PortableTextMarkDefinition {
  _type: "icon";
  iconLibrary: "md" | "fa" | "fi";
  iconName: string;
}

const iconLibraries = { md: MdIcons, fa: FaIcons, fi: FiIcons };

const IconMarkComponent: React.FC<
  PortableTextMarkComponentProps<IconAnnotation>
> = ({ children, value }) => {
  if (!value) return <>{children}</>;

  const { iconLibrary, iconName } = value;
  const IconSet = iconLibraries[iconLibrary];
  if (!IconSet) return <>{children}</>;

  const IconComponent = IconSet[
    iconName as keyof typeof IconSet
  ] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  if (!IconComponent) return <>{children}</>;

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <IconComponent style={{ marginRight: 4, verticalAlign: "middle" }} />
      {children}
    </span>
  );
};

// ====== LINK ANNOTATION ======
interface SanityLink extends PortableTextMarkDefinition {
  _type: "link";
  linkType: "internal" | "external";
  internalLink?: { _ref: string; _type: "reference" };
  externalUrl?: string;
  openInNewTab?: boolean;
}

export type ResolveInternalLink =
  | ((ref: string) => string)
  | ((ref: string) => Promise<string>);

const LinkMarkComponent = (
  resolveInternalLink?: ResolveInternalLink
): React.FC<PortableTextMarkComponentProps<SanityLink>> =>
  ({ children, value }) => {
    const [href, setHref] = React.useState("#");

    React.useEffect(() => {
      if (!value) return;

      // External
      if (value.linkType === "external" && value.externalUrl) {
        setHref(value.externalUrl);
        return;
      }

      // Internal
      if (value.linkType === "internal" && value.internalLink?._ref) {
        const maybePromise = resolveInternalLink?.(value.internalLink._ref);

        if (maybePromise instanceof Promise) {
          maybePromise.then((url) => setHref(url || "/"));
        } else if (typeof maybePromise === "string") {
          setHref(maybePromise);
        }
      }
    }, [value]);

    const target = value?.openInNewTab ? "_blank" : "_self";

    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  };

// ====== PORTABLE TEXT WRAPPER ======
interface TextBlockProps {
  value: PortableTextBlock[];
  resolveInternalLink?: ResolveInternalLink;
}

export const TextBlock: React.FC<TextBlockProps> = ({
  value,
  resolveInternalLink,
}) => {
  const components: PortableTextComponents = {
    marks: {
      icon: IconMarkComponent,
      link: LinkMarkComponent(resolveInternalLink),
    },
  };

  return <PortableText value={value} components={components} />;
};
