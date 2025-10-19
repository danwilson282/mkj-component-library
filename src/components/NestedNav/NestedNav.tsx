import { JSX, useState } from 'react';
import { FaRectangleXmark, FaBars, FaAngleDown, FaAngleRight  } from "react-icons/fa6";

export type NestedNavProps = {
    menuTitle: string;
    navItems: NavItem[]
}

type NavItem = {
  id: string;
  label: string;
  link?: string;
  children?: NavItem[];
}

interface ExpandedState {
  [key: string]: boolean;
}

export const NestedNav:React.FC<NestedNavProps> = ({menuTitle, navItems}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});

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
          className={`flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer transition-colors ${
            level > 0 ? 'pl-' + (4 + level * 4) : ''
          }`}
          onClick={() => hasChildren ? toggleExpanded(item.id) : setIsOpen(false)}
          style={{ paddingLeft: `${1 + level * 1}rem` }}
        >
          <a
            href={item.link || '#'}
            className="flex-1 text-gray-800 hover:text-blue-600 transition-colors"
            onClick={(e) => !hasChildren && e.stopPropagation()}
          >
            {item.label}
          </a>
          {hasChildren && (
            <span className="text-gray-500">
              {isExpanded ? <FaAngleDown size={20} /> : <FaAngleRight size={20} />}
            </span>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="bg-gray-50">
            {item.children!.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaRectangleXmark size={28} /> : <FaBars size={28} />}
          </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{menuTitle}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <FaRectangleXmark size={24} />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          {navItems.map(item => renderNavItem(item))}
        </div>
      </nav>
    </div>
  );
}