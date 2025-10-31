import { JSX, useState } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FaRectangleXmark, FaBars, FaAngleDown, FaAngleRight, FaLock  } from "react-icons/fa6";
export type NestedNavProps = {
    menuTitle: string;
    navItems: NavItem[]
}
import { Link } from '@heroui/react';

type NavItem = {
  id: string;
  label: string;
  locked?: boolean;
  link?: string;
  children?: NavItem[];
}

interface ExpandedState {
  [key: string]: boolean;
}

export const NestedNav:React.FC<NestedNavProps> = ({menuTitle, navItems}) => {
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const toggleExpanded = (id: string): void => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderNavItem = (item: NavItem, level: number = 0): JSX.Element => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];

    return (
      <div key={item.id} className="w-full">
        <div
          className={`flex items-center justify-between px-4 py-3 ${!item.locked && 'hover:bg-gray-100 cursor-pointer'} transition-colors ${
            level > 0 ? 'pl-' + (4 + level * 4) : ''
          }`}
          onClick={() => (hasChildren && !item.locked) && toggleExpanded(item.id)}
          style={{ paddingLeft: `${1 + level * 1}rem` }}
        >
          {item.locked ? (
          <span
            className="flex-1 text-foreground transition-colors"
          >
            {item.label} <FaLock className="inline ml-2 text-gray-500" />
          </span>
          ) : (
            <Link
              href={item.link ? item.link : '#'}
              className="flex-1 text-foreground hover:text-primary transition-colors"
              onClick={(e) => !hasChildren && e.stopPropagation()}
            >
              {item.label}
            </Link>
          )}

          {hasChildren && !item.locked && (
            <span className="text-foreground">
              {isExpanded ? <FaAngleDown size={20} /> : <FaAngleRight size={20} />}
            </span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-background">
            {item.children!.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
        <>
      <Button
       onPress={onOpen}
       variant="bordered"
       color="primary"
        aria-label="Toggle menu"
       >{isOpen ? <FaRectangleXmark size={28} /> : <FaBars size={28} />}</Button>
      <Drawer className="bg-background text-foreground" isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
            <>
              <DrawerHeader className="flex flex-col gap-1 text-header">{menuTitle}</DrawerHeader>
              <DrawerBody>
                <nav
                  
                >
                <div className="overflow-y-auto h-full pb-20">
                  {navItems.map(item => renderNavItem(item))}
                </div>
                </nav>
              </DrawerBody>
            </>
        </DrawerContent>
      </Drawer>
    </>
  );
}