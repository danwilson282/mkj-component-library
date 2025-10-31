import React from 'react';
import * as FaIcons from 'react-icons/fa';


export type IconProps = {
    icon: keyof typeof FaIcons;
    color: string;
    size: number;
}

const Icon: React.FC<IconProps> = ({ icon, color, size }) => {

  // Dynamically get the icon component
  const IconComp = FaIcons[icon];
  if (!IconComp) return null; // fallback if icon string is invalid

  return (
    <div style={{ textAlign: 'center' }}>
      <IconComp color={color} size={size} />
    </div>
  );
};

export default Icon;
