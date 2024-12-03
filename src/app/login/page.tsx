"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";
export default function LoginPage() {
  const router = useRouter();
  const [user, seetUser] = React.useState({
    email: "",
    password: "",
  });
 

  const onLogin = async () => {
  
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center  text-2xl">Login page now puiblish</h1>
      <hr />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600"
        type="email"
        id="username"
        value={user.email}
        onChange={(e) => seetUser({ ...user, email: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600"
        type="password"
        id="username"
        value={user.password}
        onChange={(e) => seetUser({ ...user, password: e.target.value })}
        placeholder="username"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gary-600 capitalize"
      >
        login here
      </button>
      <Link className="capitalize" href="/signup">
        Visit Signup page
      </Link>
    </div>
  );
}
