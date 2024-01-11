"use client";
import Image from "next/image";
import DarkModeSwitch from "../darkModeSwitch";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = {
  "🏠": {
    name: "Home",
  },
  "👤": {
    name: "About me",
  },
  "💼": {
    name: "Works",
  },
  "💬": {
    name: "Contact",
  },
};

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("🏠");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const topViewport = window.scrollY;
      const midViewport = topViewport + window.innerHeight / 2;

      sections.forEach((section) => {
        const topSection = section.offsetTop;
        const bottomSection = topSection + section.offsetHeight;

        if (topSection <= midViewport && bottomSection >= midViewport) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='z-50 fixed top-0 left-0 w-full bg-gradient-to-b dark:from-gray-900 dark:to-transparent from-indigo-200 to-transparent'>
      <div className='top-0 container mx-auto py-2 flex justify-between items-center'>
        <div className='group flex'>
          <div>
            <Image
              src='/images/head.png'
              alt='Hugo'
              width={32}
              height={32}
              className='md:blur-sm group-hover:blur-none transition-all duration-250'
            />
          </div>
          <div>
            <Image
              src='/images/speach.png'
              alt='Hugo Fontvieille'
              width={32}
              height={32}
              className='group-hover:scale-100 md:scale-0 transition-all delay-250 duration-500'
            />
          </div>
        </div>
        <nav className='ml-auto flex gap-x-2 flex-row items-center'>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <button
                key={path}
                onClick={() => {
                  document?.querySelector(`#${path}`)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className='group transition hover:text-neutral-400 relative py-1 px-2'
              >
                <span
                  className={clsx(
                    activeSection === path ? "" : "grayscale",
                    "inline-block mr-2 group-hover:animate-wiggle"
                  )}
                >
                  {path}
                </span>
                <span className='hidden md:inline-block'>{name}</span>
              </button>
            );
          })}
        </nav>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
