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
        
        {/* Additional gradient beams for more visual impact */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-400/50 to-blue-500/0 animate-pulse"></div>
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-400/50 to-purple-500/0 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-indigo-500/0 via-indigo-400/50 to-indigo-500/0 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Diagonal beams */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-blue-400/40 to-blue-500/0 rotate-12 origin-left animate-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-purple-500/0 via-purple-400/40 to-purple-500/0 -rotate-12 origin-left animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-indigo-500/0 via-indigo-400/40 to-indigo-500/0 rotate-6 origin-left animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      {children}
    </div>
  );
};