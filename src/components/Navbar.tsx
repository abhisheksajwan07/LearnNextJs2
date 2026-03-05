"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { User } from "next-auth";

function Navbar() {
  const { data: session } = useSession();
  const user: User = session?.user;

  return (
    <nav className="p-4 md:p-6 bg-black border-b border-[#333] text-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight mb-4 md:mb-0 hover:text-gray-300 transition-colors">
          True Feedback
        </a>
        {session ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-400">@{user.username || user.email}</span>
            <Button
              onClick={() => signOut()}
              className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-semibold"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link href="/signin">
            <Button
              className="w-full md:w-auto bg-white text-black hover:bg-gray-200 font-semibold"
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
