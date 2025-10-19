import React from "react";
import { Breadcrumbs as HeroBreadcrumbs, BreadcrumbItem } from '@heroui/react'
export type BreadcrumbProps = {
  items: BreadcrumbItemProps[]
}

type BreadcrumbItemProps = {
    href: string;
    body: string
}

export const Breadcrumbs: React.FC<BreadcrumbProps> = ({ items }) => (
  <HeroBreadcrumbs>
    {
        items.map(b=> (
            <BreadcrumbItem href={b.href}>{b.body}</BreadcrumbItem>
        ))
    }
  </HeroBreadcrumbs>

);