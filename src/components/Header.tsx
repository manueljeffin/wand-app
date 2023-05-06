"use client";

import Link from "next/link";

export default function Header() {
  return (
    <div
      className={
        "container mx-auto flex items-center border-b-2 px-5 py-5 h-24"
      }
    >
      <h1 className={"font-bold text-3xl"}>Wand.</h1>
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
