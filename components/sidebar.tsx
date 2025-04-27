"use client";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button (only visible on mobile) */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded" style={{ background: "var(--login-background)", color: "var(--login-foreground)" }}
        >
          ☰
        </button>
      </div>

      {/* Sidebar itself */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:block`}
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <nav className="space-y-4 mt-10 md:mt-0">
          <Link href="/" className="block">Dashboard</Link>
          <Link href="/products" className="block">Products</Link>
        </nav>
      </aside>

      {/* Background overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

