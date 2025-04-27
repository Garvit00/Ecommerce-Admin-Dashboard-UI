"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

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

       {/* Sidebar for mobile */}
       {isOpen && (
        <aside className="fixed inset-0 w-64 p-4 bg-white z-50" style={{ background: "var(--background)", color: "var(--foreground)" }}>
          <nav className="space-y-4">
            <button onClick={() => handleLinkClick("/")} className="block w-full text-left">Dashboard</button>
            <button onClick={() => handleLinkClick("/products")} className="block w-full text-left">Products</button>
          </nav>
        </aside>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden md:block w-64 p-4" style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <nav className="space-y-4">
          <Link href="/" className="block">Dashboard</Link>
          <Link href="/products" className="block">Products</Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

