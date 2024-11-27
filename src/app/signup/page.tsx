"use client";
import Link from "next/link";
import React from "react";
// import { userRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, seetUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center  text-2xl">Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => seetUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
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
      <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gary-600 capitalize">signup here</button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
