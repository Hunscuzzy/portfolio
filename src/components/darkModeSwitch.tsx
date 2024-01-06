"use client";
import { useTransition, animated } from "react-spring";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useDarkMode } from "../app/contexts/darkModeContext";

export default function DarkModeSwitch() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const transitions = useTransition(darkMode, {
    from: { scale: 0, transform: "rotate(0deg)" },
    enter: { scale: 1, transform: "rotate(360deg)" },
    leave: { scale: 0, transform: "rotate(90deg)" },
  });
  return (
    <button
      className='h-4 relative flex ml-4 text-yellow-400 transition-colors hover:text-yellow-200'
      onClick={() => toggleDarkMode()}
    >
      {transitions((style, item) =>
        item ? (
          <animated.div className='absolute' style={style}>
            <IoSunny />
          </animated.div>
        ) : (
          <animated.div className='absolute' style={style}>
            <IoMoon />
          </animated.div>
        )
      )}
    </button>
  );
}
