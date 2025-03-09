"use client";
import { useSidebar } from "@/context/SidebarContext";
import React, { useState } from "react";
import {
  AlignJustify,
  X,
  Ellipsis,
  AlignLeft,
  AlignRight,
  Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import UserDropdown from "@/components/header/UserDropdown";

const AppHeader: React.FC = () => {
  const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();

  const handleToggle = () => {
    if (window.innerWidth >= 991) {
      toggleSidebar();
    } else {
      toggleMobileSidebar();
    }
  };

  const toggleApplicationMenu = () => {
    setApplicationMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 lg:border-b">
      <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
        <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
          <button
            className="items-center justify-center w-10 y-10 text-gray-500 border-gray-200 rounded-lg z-99999 lg:flex lg:h-11 lg:w-11 lg:border"
            onClick={handleToggle}
          >
            {isMobileOpen ? <X /> : <Menu />}
          </button>
          <Link href="/home" className="lg:hidden">
            <Image
              width={154}
              height={32}
              src="/images/logo/logo.svg"
              alt="Logo"
            />
          </Link>
          <button
            className="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 lg:hidden"
            onClick={toggleApplicationMenu}
          >
            <Ellipsis />
          </button>
        </div>
        <div
          className={`${
            isApplicationMenuOpen ? "flex" : "hidden"
          } items-center justify-end w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
        >
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
