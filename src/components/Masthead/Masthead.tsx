import { Button, Input, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";

import { useState } from "react";
export type MastheadProps = {
  
}

export const Masthead: React.FC<MastheadProps> = ({}) => {
// export default function Masthead() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Products",
    "Solutions",
    "Resources",
    "Pricing",
    "Company",
  ];

  return (
    <Navbar 
      isBordered 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="bg-white"
    >
      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* Logo/Brand - centered on mobile, left on desktop */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
            <p className="font-bold text-xl">Brand</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Logo */}
      <NavbarContent className="hidden sm:flex gap-8" justify="start">
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
            <p className="font-bold text-xl">Brand</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                // endContent={<ChevronDown size={16} />}
                radius="sm"
                variant="light"
              >
                Products
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Products">
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="dashboard">Dashboard</DropdownItem>
            <DropdownItem key="reports">Reports</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                // endContent={<ChevronDown size={16} />}
                radius="sm"
                variant="light"
              >
                Solutions
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Solutions">
            <DropdownItem key="enterprise">Enterprise</DropdownItem>
            <DropdownItem key="smb">Small Business</DropdownItem>
            <DropdownItem key="startup">Startups</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
            radius="sm"
            variant="light"
          >
            Resources
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
            radius="sm"
            variant="light"
          >
            Pricing
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Right side actions */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[12rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-100",
            }}
            placeholder="Search..."
            size="sm"
            // startContent={<Search size={18} />}
            type="search"
          />
        </NavbarItem>
        
        <NavbarItem className="hidden sm:flex">
          <Button color="default" variant="flat" size="sm">
            Sign In
          </Button>
        </NavbarItem>
        
        <NavbarItem>
          <Button color="primary" size="sm">
            Get Started
          </Button>
        </NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name="User"
                size="sm"
                src="https://i.pravatar.cc/150?u=user"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">user@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 mb-4">
          <Input
            classNames={{
              base: "max-w-full",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper: "h-full font-normal text-default-500 bg-default-100",
            }}
            placeholder="Search..."
            size="md"
            // startContent={<Search size={18} />}
            type="search"
          />
        </div>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Button
              className="w-full justify-start"
              size="lg"
              variant="light"
            >
              {item}
            </Button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button
            className="w-full"
            color="default"
            variant="flat"
            size="lg"
          >
            Sign In
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}