import Link from "next/link";
const Sidebar = () => {
  return (
    <aside className="w-64 p-4 hidden md:block" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <nav className="space-y-4">
        <Link href="/" className="block">Dashboard</Link>
        <Link href="/products" className="block">Products</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
