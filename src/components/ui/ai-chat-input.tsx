"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react";
import { Lightbulb, Mic, Globe, Paperclip, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const PLACEHOLDERS = [
  "Use this search input for navigating website",
  "Click on any pill button below",
  "Then click on the arrow button",
  "You will be navigated to that section",
  "You can also scroll through the website",
  "Enjoy surfing",
];

// Updated suggestion buttons - removed "More" and kept "Stories"
const SUGGESTION_BUTTONS = [
  "Lets get started", // Navigate to Features
  "Meet Nora",        // Navigate to Cards
  "Performance",          // Navigate to performance metrics
  "associated brands", // Navigate to BrandsSection
];

const AIChatInput = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [thinkActive, setThinkActive] = useState(false);
  const [deepSearchActive, setDeepSearchActive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Cycle placeholder text when input is inactive
  useEffect(() => {
    if (isActive || inputValue) return;

    const interval = setInterval(() => {
      setShowPlaceholder(false);
      setTimeout(() => {
        setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDERS.length);
        setShowPlaceholder(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive, inputValue]);

  // Close input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        if (!inputValue) setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inputValue]);

  const handleActivate = () => setIsActive(true);

  // Handle send button click with updated navigation
  const handleSendClick = () => {
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);

    // Navigate based on the input value to your specific components
    setTimeout(() => {
      navigateToComponent(inputValue);
      setIsLoading(false);
      setInputValue("");
      setIsActive(false);
    }, 300);
  };

  // Navigate to your specific components with updated mapping including Stories
  const navigateToComponent = (input: string) => {
    const componentMap: { [key: string]: string } = {
      "associated brands": "brands-section",      // Navigate to <BrandsSection/>
      "Lets get started": "features-section",     // Navigate to <Features/>
      "Meet Nora": "cards-section",               // Navigate to <Cards/>
      "Performance": "performance-section",            // Navigate to <AIStoriesGallery/>
    };

    const targetSection = componentMap[input];
    
    if (targetSection) {
      scrollToSection(targetSection);
    } else {
      // For custom queries, default to Features section
      scrollToSection("features-section");
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  // Handle suggestion button click
  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setIsActive(true);
  };

  const containerVariants = {
    collapsed: {
      height: 68,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)",
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
    expanded: {
      height: 128,
      boxShadow: "0 8px 32px 0 rgba(0,0,0,0.16)",
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  const placeholderContainerVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.025 } },
    exit: { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
  };

  const letterVariants = {
    initial: {
      opacity: 0,
      filter: "blur(12px)",
      y: 10,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        opacity: { duration: 0.25 },
        filter: { duration: 0.4 },
        y: { type: "spring" as const, stiffness: 80, damping: 20 },
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(12px)",
      y: -10,
      transition: {
        opacity: { duration: 0.2 },
        filter: { duration: 0.3 },
        y: { type: "spring" as const, stiffness: 80, damping: 20 },
      },
    },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <motion.div
        ref={wrapperRef}
        className="w-full max-w-3xl"
        variants={containerVariants}
        animate={isActive || inputValue ? "expanded" : "collapsed"}
        initial="collapsed"
        style={{ overflow: "hidden", borderRadius: 32, background: "hsl(var(--background))", border: "1px solid hsl(var(--border))" }}
        onClick={handleActivate}
      >
        <div className="flex flex-col items-stretch w-full h-full">
          {/* Input Row */}
          <div className="flex items-center gap-2 p-3 rounded-full bg-background max-w-3xl w-full">
            <button
              className="p-3 rounded-full hover:bg-muted transition"
              title="Attach file"
              type="button"
              tabIndex={-1}
            >
              <Paperclip size={20} className="text-muted-foreground" />
            </button>

            {/* Text Input & Placeholder */}
            <div className="relative flex-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border-0 outline-0 rounded-md py-2 text-base bg-transparent w-full font-normal text-foreground"
                style={{ position: "relative", zIndex: 1 }}
                onFocus={handleActivate}
              />
              <div className="absolute left-0 top-0 w-full h-full pointer-events-none flex items-center px-3 py-2">
                <AnimatePresence mode="wait">
                  {showPlaceholder && !isActive && !inputValue && (
                    <motion.span
                      key={placeholderIndex}
                      className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground select-none pointer-events-none"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        zIndex: 0,
                      }}
                      variants={placeholderContainerVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {PLACEHOLDERS[placeholderIndex]
                        .split("")
                        .map((char, i) => (
                          <motion.span
                            key={i}
                            variants={letterVariants}
                            style={{ display: "inline-block" }}
                          >
                            {char === " " ? "\u00A0" : char}
                          </motion.span>
                        ))}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <button
              className="p-3 rounded-full hover:bg-muted transition"
              title="Voice input"
              type="button"
              tabIndex={-1}
            >
              <Mic size={20} className="text-muted-foreground" />
            </button>
            <button
              className={`flex items-center gap-1 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full font-medium justify-center transition-all ${
                isLoading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              title="Send"
              type="button"
              tabIndex={-1}
              onClick={handleSendClick}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>

          {/* Expanded Controls */}
          <motion.div
            className="w-full flex justify-start px-4 items-center text-sm"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                pointerEvents: "none" as const,
                transition: { duration: 0.25 },
              },
              visible: {
                opacity: 1,
                y: 0,
                pointerEvents: "auto" as const,
                transition: { duration: 0.35, delay: 0.08 },
              },
            }}
            initial="hidden"
            animate={isActive || inputValue ? "visible" : "hidden"}
            style={{ marginTop: 8 }}
          >
            <div className="flex gap-3 items-center">
              {/* Think Toggle */}
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all font-medium group ${
                  thinkActive
                    ? "bg-primary/10 outline outline-primary/60 text-primary"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                title="Think"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setThinkActive((a) => !a);
                }}
              >
                <Lightbulb
                  className="group-hover:fill-yellow-300 transition-all"
                  size={18}
                />
                Think
              </button>

              {/* Deep Search Toggle */}
              <motion.button
                className={`flex items-center px-4 gap-1 py-2 rounded-full transition font-medium whitespace-nowrap overflow-hidden justify-start  ${
                  deepSearchActive
                    ? "bg-primary/10 outline outline-primary/60 text-primary"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                title="Deep Search"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setDeepSearchActive((a) => !a);
                }}
                initial={false}
                animate={{
                  width: deepSearchActive ? 125 : 36,
                  paddingLeft: deepSearchActive ? 8 : 9,
                }}
              >
                <div className="flex-1">
                  <Globe size={18} />
                </div>
                <motion.span
                className="pb-[2px]"
                  initial={false}
                  animate={{
                    opacity: deepSearchActive ? 1 : 0,
                  }}
                >
                  Deep Search
                </motion.span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Suggestion Buttons */}
      <motion.div
        className="w-full max-w-3xl flex justify-center items-center gap-2 px-4 overflow-x-auto"
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.2 }
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.1 }
          }
        }}
        initial="visible"
        animate={isActive || inputValue ? "hidden" : "visible"}
      >
        {SUGGESTION_BUTTONS.map((suggestion, index) => (
          <motion.button
            key={suggestion}
            className="px-4 py-2 rounded-full bg-muted text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm font-medium border border-border/50 whitespace-nowrap flex-shrink-0"
            onClick={() => handleSuggestionClick(suggestion)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.05 }
            }}
          >
            {suggestion}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export { AIChatInput };
