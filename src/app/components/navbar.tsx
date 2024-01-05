"use client";
import Image from "next/image";
import Link from "next/link";
import DarkModeSwitch from "./darkModeSwitch";

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
  return (
    <div className='fixed top-0 left-0 w-full'>
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
              <Link
                key={path}
                href={`#${path}`}
                className='group transition hover:text-neutral-400 relative py-1 px-2'
              >
                <span className='inline-block mr-2 grayscale group-hover:animate-wiggle'>
                  {path}
                </span>
                {name}
              </Link>
            );
          })}
        </nav>
        <DarkModeSwitch />
      </div>
    </div>
  );
}
