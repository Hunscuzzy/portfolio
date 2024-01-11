"use client";
import works from "@/data/works.json";
import { Disclosure, Transition } from "@headlessui/react";
import { IoAdd, IoCodeSlash, IoRemove } from "react-icons/io5";

export default function Works() {
  return (
    <section
      id='💼'
      className='relative bg-gradient-to-l dark:from-gray-950 dark:to-indigo-950 from-gray-50 to-indigo-300  min-h-screen flex items-center py-16 px-4'
    >
      <div className='bg-carbon opacity-20 absolute w-full h-full left-0 top-0' />

      <div className='relative container mx-auto flex flex-col md:flex-row-reverse justify-between gap-16'>
        <h2 className='section-title md:text-right md:sticky top-8 h-fit'>
          what <br className='hidden sm:block' /> I{" "}
          <br className='hidden sm:block' /> did
        </h2>
        <div>
          <div className='relative border-s border-gray-200 dark:border-gray-700 space-y-4'>
            {works.map((work) => (
              <Disclosure key={work.title}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className='ml-8 text-left w-full'>
                      <span className='absolute flex items-center justify-center w-6 h-6 bg-white rounded-full -start-3 ring-7 ring-white dark:ring-blue-900 dark:bg-blue-900'>
                        {open ? (
                          <IoRemove className='w-4 h-4 text-blue-800 dark:text-blue-300' />
                        ) : (
                          <IoAdd className='w-4 h-4 text-blue-800 dark:text-blue-300' />
                        )}
                      </span>
                      <h3 className='flex items-center mb-2 text-xl font-medium text-blue-950 dark:text-white'>
                        {work.title}
                      </h3>
                      <time className='block mb-2 text-sm font-normal leading-none text-blue-800 dark:text-blue-300'>
                        {work.date}
                      </time>
                    </Disclosure.Button>
                    <Transition
                      className='transition transform origin-left'
                      enter='duration-200 ease-out'
                      enterFrom='scale-90 opacity-0'
                      enterTo='scale-100 opacity-100'
                      leave='duration-100 ease-out'
                      leaveFrom='scale-100 opacity-100'
                      leaveTo='scale-90 opacity-0'
                    >
                      <Disclosure.Panel className='ml-8'>
                        <p className='mb-4 text-base font-normal text-gray-800 dark:text-gray-200'>
                          {work.content}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
