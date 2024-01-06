"use client";
import { IoSend } from "react-icons/io5";
import { useScroll, animated } from "@react-spring/web";
import ContactForm from "../contactForm";

export default function Contact() {
  const scroll = useScroll();
  return (
    <section
      id='💬'
      className='bg-gradient-to-t dark:from-gray-900 dark:to-blue-950 from-indigo-200 to-blue-100 min-h-screen flex justify-center items-center overflow-hidden py-16 px-4'
    >
      <div>
        <animated.div
          style={{
            transform: scroll.scrollYProgress.to(
              (progress) =>
                `translateX(${progress * 100}%) translateY(${progress * 250}px)`
            ),
          }}
        >
          <IoSend className='absolute text-[150px] text-indigo-500 blur-sm opacity-50' />
        </animated.div>
        <div className='relative mx-auto max-w-2xl text-center'>
          <h2 className='section-title'>wanna reach me?</h2>
          <p className='mt-2 text-lg'>
            Got a project in mind? <br /> Let&apos;s make it happen! Drop me a
            line below.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
