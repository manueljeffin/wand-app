import React from "react";

import { Disclosure, Transition } from "@headlessui/react";
import Link from "next/link";

function Sidebar({ open = false, setOpen }) {
  return (
    <>
      <Transition show={open}>
        {/* Sliding sidebar */}
        <Transition.Child
          className="fixed left-0 top-0 w-[250px] z-30 h-screen bg-white"
          enter="transition ease-in-out duration-200 transform"
          enterFrom="translate-x-0"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-0"
        >
          <h1 className={"absolute top-5 left-7 font-bold text-3xl"}>Wand.</h1>

          <div
            id="sidebar"
            className={`fixed left-0 top-0 w-[250px] h-screen bg-almost-white pt-20 p-8 z-50`}
          >
            <button
              onClick={() => setOpen(false)}
              aria-expanded={open}
              aria-controls="sidebar"
            >
              <img
                className="absolute top-5 right-5"
                src="images/icon-close-menu.svg"
                alt="Close Menu"
              />
            </button>
            <ul className="flex flex-col space-y-3 gap-7">
              <li className={"font-medium text-2xl"}>
                <Link href={"ingredients"}>Ingredients</Link>
              </li>
              <li className={"font-medium text-2xl"}>
                <Link href={"faq"}>FAQs</Link>
              </li>
              <li className={"font-medium text-2xl"}>
                <Link href={"about"}>About</Link>
              </li>
            </ul>
          </div>
          {/* ... */}
        </Transition.Child>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* ... */}
          <div
            onClick={() => setOpen(false)}
            className={`"w-full h-full fixed bg-black opacity-80 z-10 inset-0`}
          ></div>
        </Transition.Child>
      </Transition>
    </>
  );
}

export default Sidebar;
