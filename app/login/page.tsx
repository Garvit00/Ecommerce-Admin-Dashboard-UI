"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
    const {login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "12345") {
        login({ name: "Admin User", email });
      } else {
        alert("Invalid credentials");
      }
    };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="p-8 rounded shadow-md w-full max-w-sm" style={{background: "var(--login-background)",color: "var(--foreground)"}}>
        <h2 className="text-xl font-semibold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded" style={{background: "var(--login-background)",color: "var(--foreground)"}}
        
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded" style={{background: "var(--login-background)",color: "var(--foreground)"}}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  );
}
