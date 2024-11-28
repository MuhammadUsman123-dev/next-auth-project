"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const [user, seetUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const onSignup = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center  text-2xl">
        {loading ? "Processing" : "Signup"}
      </h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600 text-black"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => seetUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600 text-black"
        type="email"
        id="username"
        value={user.email}
        onChange={(e) => seetUser({ ...user, email: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus;outline-none border-gray-600 text-black"
        type="password"
        id="username"
        value={user.password}
        onChange={(e) => seetUser({ ...user, password: e.target.value })}
        placeholder="username"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gary-600 capitalize"
      >
        {buttonDisabled ? "No sign Up" : "Signup"}
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
