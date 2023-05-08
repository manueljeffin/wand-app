"use client";
import React, {useState} from "react";

import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        "container mx-auto flex items-center border-b-2 px-5 py-5 h-24"
      }
    >
      <button
        className={"mr-3"}
        onClick={() => { setOpen(true); }}
        aria-expanded={open}
        aria-controls="sidebar"
        aria-label="Open Menu"
      >
        <img
          className="block lg:hidden"
          src="images/icon-menu.svg"
          alt="Menu"
        />
      </button>
      <Sidebar open={open} setOpen={setOpen} />
      <Link href={"/"}>
        <h1 className={"font-bold text-3xl"}>Wand.</h1>
      </Link>

      <div className={"grow"}>
        <div className={"hidden lg:flex items-center justify-evenly"}>
          <Link href={"ingredients"}>Ingredients</Link>
          <Link href={"faq"}>FAQs</Link>
          <Link href={"about"}>About</Link>
        </div>
      </div>
    </div>
  );
}
