"use client";
import Image from "next/image";
import { IoArrowDown, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useSpring, animated } from "react-spring";

export function Hero() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <section
      id='🏠'
      className='group bg-gradient-to-tr dark:from-black dark:to-gray-900 from-indigo-100 to-blue-200  min-h-screen flex items-center'
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] })
      }
    >
      <div className='container mx-auto flex justify-center items-center'>
        <animated.div
          style={{
            transform: props.xy.to(
              (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`
            ),
          }}
        >
          <Image
            src='/images/hugo-fontvieille.png'
            alt='Hugo Fontvieille'
            width={250}
            height={600}
            className='z-0 blur-sm brightness-200 filter group-hover:blur-none transition-all delay-250 duration-500'
          />
        </animated.div>
        <div className='mt-32 absolute flex items-center gap-8 flex-row-reverse'>
          <animated.div
            style={{
              transform: props.xy.to(
                (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`
              ),
            }}
          >
            <h1 className='section-title'>
              Hugo
              <br /> Fontvieille
            </h1>
            <i className='font-normal text-md'>/fɔ̃.vjɛj/</i>
          </animated.div>
          <div className='text-right text-xl leading-normal'>
            <h2>
              French <i>Entrepreneur</i>, <br /> Working as <i>Front-end dev</i>{" "}
              , <br /> Living in <i>Alicante</i>, Spain.
            </h2>
            <a className='underline italic text-sm mt-2 block' href='/#👤'>
              Know more
            </a>
            <div className='flex justify-end mt-4 gap-x-2 text-xl'>
              <a
                href='https://fr.linkedin.com/in/hugo-fontvieille'
                target='_blank'
                className='hover:text-blue-700 transition'
              >
                <IoLogoLinkedin />
              </a>
              <a
                href='https://github.com/Hunscuzzy'
                target='_blank'
                className='hover:text-blue-700 transition'
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>
        </div>
        <button
          className='absolute bottom-4 text-4xl animate-bounce hover:text-blue-700 transition'
          onClick={() => {
            document?.querySelector("#👤")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <IoArrowDown />
        </button>
      </div>
    </section>
  );
}
