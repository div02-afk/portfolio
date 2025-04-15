"use client";
import { cn } from "@/lib/utils";
import { AlertTriangle, BadgeCheck } from "lucide-react";
import {
  AnimatePresence,
  motion as m,
  Transition,
  useAnimate,
} from "motion/react";
import { useEffect, useState } from "react";
import Spinner from "./spinner";

type Status = "Loading" | "Success" | "Error";

const sequences: Status[] = ["Loading", "Success", "Loading", "Error"];
const SEQUENCEDURATION = 2000;

// Improved transitions for smoother animations
const buttonTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  duration: 0.5,
};

const spanTransition: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 20,
  duration: 0.4,
};

const iconTransition: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
  duration: 0.3,
};

const DynamicStatusIndicator = () => {
  const [status, setStatus] = useState<Status>("Loading");
  const [scope, animate] = useAnimate();

  // Improved error shake animation
  useEffect(() => {
    if (status === "Error") {
      setTimeout(() => {
        animate(
          scope.current,
          { rotate: [0, 15, -15, 12, -12, 8, -8, 5, -5, 0] },
          { duration: 0.6, ease: "easeInOut" }
        );
      }, 500);
    }
  }, [status, animate, scope]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setStatus(sequences[currentIndex]);
      currentIndex = (currentIndex + 1) % sequences.length;
    }, SEQUENCEDURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="full center">
      <m.button
        className={cn(
          "rounded-full overflow-hidden flex items-center gap-2 px-4 py-2 transition-colors duration-500",
          status === "Loading" &&
            "bg-blue-500/20 shadow-none hover:bg-blue-500/10 text-blue-500",
          status === "Success" &&
            "bg-green-500/20 shadow-none hover:bg-green-500/10 text-green-500",
          status === "Error" &&
            "bg-red-500/20 shadow-none hover:bg-red-500/10 text-red-500"
        )}
        key={status}
        animate={{
          width: status === "Loading" ? 230 : status === "Success" ? 190 : 220,
        }}
        transition={buttonTransition}
        layout
      >
        <AnimatePresence mode="sync">
          <m.div
            className="center"
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={iconTransition}
          >
            {status === "Loading" && (
              <Spinner
                color="#2b7fff"
                className="size-6 animate-spin text-blue-500"
              />
            )}
            {status === "Success" && (
              <m.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.2, 1] }}
                transition={{ duration: 0.4, times: [0, 0.6, 1] }}
              >
                <BadgeCheck className="size-5 text-green-500" />
              </m.div>
            )}
            {status === "Error" && (
              <m.span ref={scope}>
                <AlertTriangle className="size-5" />
              </m.span>
            )}
          </m.div>

          {status === "Loading" && (
            <m.span
              key="loading-icon"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="whitespace-pre"
              transition={spanTransition}
            >
              Analyzing Transaction
            </m.span>
          )}
          {status === "Success" && (
            <m.span
              key="success-icon"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="whitespace-pre"
              transition={spanTransition}
            >
              Transaction Safe
            </m.span>
          )}
          {status === "Error" && (
            <m.span
              key="error-icon"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              className="whitespace-pre"
              transition={spanTransition}
            >
              Transaction Warning
            </m.span>
          )}
        </AnimatePresence>
      </m.button>
    </div>
  );
};

export default DynamicStatusIndicator;
