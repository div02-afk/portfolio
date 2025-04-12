"use client";
import { cn } from "@/lib/utils";
import { Home, Mail, Menu, Settings, User, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";
import { buttonVariants } from "./button";

const TRANSITIONS = {
  default: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    duration: 0.4,
  },
  menu: {
    type: "spring",
    stiffness: 250,
    damping: 25,
    duration: 0.5,
  },
  icon: {
    type: "tween",
    duration: 0.3,
    ease: "easeInOut",
  },
  staggered: (index: any) => ({
    type: "spring",
    stiffness: 300,
    damping: 25,
    delay: index * 0.05,
  }),
  exit: (index: any, total: any) => ({
    type: "spring",
    stiffness: 400,
    damping: 30,
    delay: (total - index - 1) * 0.05,
  }),
};

const buttons = [
  {
    icon: Home,
    id: "home",
    label: "Home",
  },
  {
    icon: Mail,
    id: "mail",
    label: "Mail",
  },
  {
    icon: User,
    id: "user",
    label: "Profile",
  },
  {
    icon: Settings,
    id: "settings",
    label: "Settings",
  },
];

const GooeyFilter = () => {
  return (
    <svg
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <defs>
        <filter id="gooey-effect">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const FluidMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const effectiveTransitions = prefersReducedMotion
    ? {
        default: { type: "tween", duration: 0.1 },
        menu: { type: "tween", duration: 0.1 },
        icon: { type: "tween", duration: 0.1 },
        staggered: () => ({ type: "tween", duration: 0.1 }),
        exit: () => ({ type: "tween", duration: 0.1 }),
      }
    : TRANSITIONS;

  const handleButtonClick = (id: any) => {
    setActiveButton(id);
  };

  return (
    <MotionConfig transition={effectiveTransitions.default}>
      <div className="w-full p-4 flex flex-col">
        <GooeyFilter />
        <div
          className="rounded-full w-10 h-10 relative flex justify-center flex-col"
          style={{
            filter: "url(#gooey-effect)",
            willChange: "transform",
          }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
                className:
                  "rounded-full min-w-10 min-h-10 z-10 hover:bg-secondary shadow-none",
              })
            )}
            whileTap={{ scale: 0.95 }}
            transition={effectiveTransitions.icon}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  className="size-full flex items-center justify-center"
                  key="close"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                >
                  <X size={30} className="fill-primary stroke-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  className="size-full flex items-center justify-center"
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="fill-primary stroke-primary" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <div className="absolute top-0 left-0">
                {buttons.map((button, i) => (
                  <motion.button
                    key={button.id}
                    aria-label={button.label}
                    className="size-10 center cursor-pointer bg-secondary flex justify-center items-center rounded-full absolute group"
                    initial={{ scale: 0, y: 0 }}
                    animate={{
                      scale: 1,
                      y: (i + 1) * 40,
                    }}
                    exit={{
                      scale: 0,
                      y: 0,
                      opacity: 0,
                      transition: {
                        delay: (buttons.length - i - 1) * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                    }}
                    transition={{
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    }}
                    onClick={() => handleButtonClick(button.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button.icon className="size-4 text-muted-foreground group-hover:text-primary" />
                  </motion.button>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex-1 center">
          <h1 className="text-2xl text-center font-medium">
            Open the menu in the top left corner
          </h1>
          {activeButton && (
            <p className="text-muted-foreground text-center mt-2">
              Selected: {buttons.find((b) => b.id === activeButton)?.label}
            </p>
          )}
        </div>
      </div>
    </MotionConfig>
  );
};

export default FluidMenu;
