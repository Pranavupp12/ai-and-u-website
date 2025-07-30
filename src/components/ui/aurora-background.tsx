import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        ></div>
        
        {/* Wide irregular gradient beams */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-0 left-[15%] w-24 h-full bg-gradient-to-b from-blue-500/0 via-blue-400/70 to-blue-500/0 blur-3xl animate-pulse transform -skew-x-12"></div>
          <div className="absolute top-0 left-[45%] w-32 h-full bg-gradient-to-b from-purple-500/0 via-purple-400/60 to-purple-500/0 blur-3xl animate-pulse transform skew-x-6" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-[70%] w-20 h-full bg-gradient-to-b from-indigo-500/0 via-indigo-400/80 to-indigo-500/0 blur-2xl animate-pulse transform -skew-x-3" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-[85%] w-16 h-full bg-gradient-to-b from-cyan-500/0 via-cyan-400/70 to-cyan-500/0 blur-2xl animate-pulse transform skew-x-12" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Very wide organic beams with random positioning */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-[8%] w-40 h-full bg-gradient-to-b from-violet-500/0 via-violet-300/50 via-blue-300/40 to-violet-500/0 blur-3xl animate-beam-pulse transform rotate-2"></div>
          <div className="absolute top-0 left-[30%] w-56 h-full bg-gradient-to-b from-blue-500/0 via-cyan-300/40 via-blue-400/50 to-blue-500/0 blur-3xl animate-beam-pulse transform -rotate-1" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute top-0 left-[55%] w-28 h-full bg-gradient-to-b from-purple-500/0 via-pink-300/60 via-purple-400/45 to-purple-500/0 blur-3xl animate-beam-pulse transform rotate-3" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-0 left-[78%] w-36 h-full bg-gradient-to-b from-indigo-500/0 via-blue-300/50 via-indigo-400/55 to-indigo-500/0 blur-3xl animate-beam-pulse transform -rotate-2" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Diagonal and curved beams with organic shapes */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-[10%] left-0 w-full h-8 bg-gradient-to-r from-blue-500/0 via-blue-400/50 via-cyan-400/60 to-blue-500/0 rotate-[15deg] origin-left blur-xl animate-pulse transform scale-y-150"></div>
          <div className="absolute top-[40%] left-0 w-full h-12 bg-gradient-to-r from-purple-500/0 via-purple-400/40 via-pink-400/50 to-purple-500/0 -rotate-[8deg] origin-left blur-2xl animate-pulse transform scale-y-200" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-[70%] left-0 w-full h-6 bg-gradient-to-r from-indigo-500/0 via-indigo-400/60 via-blue-400/45 to-indigo-500/0 rotate-[12deg] origin-left blur-xl animate-pulse transform scale-y-125" style={{ animationDelay: '1s' }}></div>
          
          {/* Curved beam effect using border-radius */}
          <div className="absolute top-[25%] left-[20%] w-72 h-80 bg-gradient-radial from-blue-400/30 via-purple-400/20 to-transparent rounded-[50%] blur-3xl animate-beam-pulse transform rotate-45" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-[60%] left-[60%] w-96 h-64 bg-gradient-radial from-cyan-400/25 via-blue-400/15 to-transparent rounded-[60%] blur-3xl animate-beam-pulse transform -rotate-30" style={{ animationDelay: '4.5s' }}></div>
        </div>
      </div>
      {children}
    </div>
  );
};