import { useState } from "react";
import { motion } from "motion/react";

const FlashlightNav = () => {
    const navItems = [
        {
            id: "1",
            name: "Home",
        },
        {
            id: "2",
            name: "Projects",
        },
        {
            id: "3",
            name: "Deployement",
        },
        {
            id: "4",
            name: "Members",
        },
        {
            id: "5",
            name: "Settings",
        }
    ];
    const [current, setCurrent] = useState("3");

  return (
    <nav className="flex px-2 py-2 gap-8 border border-gray-500 text-neutral-400 rounded-full overflow-hidden">
        {navItems.map((item) => (
            <a id={item.id} className="group w-full text-center relative px-3 py-2">
                {current === item.id && (
                    <>
                        <motion.div
                            layoutId="current"
                            className="absolute inset-0 text-white h-full w-full rounded-full bg-[hsl(0_0%_100%/_0.056)]"
                            transition={{
                                delay: 0.3,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                        <motion.div
                            className="absolute top-[50%] left-0.5 w-full h-[75%] rounded-t-full bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.85)] blur-lg"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 0.35
                            }}
                            transition={{
                                delay: 0.7,
                                ease: "easeInOut",
                            }}
                        ></motion.div>
                    </>
                )}
                <span
                    onClick={() => {
                        setCurrent(item.id)
                    }}
                    className={"relative group-hover:text-white group-hover:cursor-pointer" + 
                                (current === item.id ? " text-white" : "")}
                >
                    {item.name}
                </span>
            </a>
        ))}
    </nav>
  )
}

export default FlashlightNav