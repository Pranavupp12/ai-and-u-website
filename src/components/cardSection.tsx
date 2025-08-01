"use client";

import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Cards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Animate the main section
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate card items with staggered delays
      const cardItems = sectionRef.current.querySelectorAll('.card-item');
      cardItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.3,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-16 md:py-32">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                Something new
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large card - left side */}
            <div className="card-item bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Our goal is to streamline SMB trade, making it easier and faster than ever.
                </p>
              </div>
            </div>
            {/* Standard card */}
            <div className="card-item bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Instant onboarding</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Seamless onboarding experience designed for productivity.
                </p>
              </div>
            </div>
            {/* Standard card */}
            <div className="card-item bg-muted rounded-md aspect-square p-6 flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Automated insights</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  AI-driven analytics for smarter business decisions.
                </p>
              </div>
            </div>
            {/* Large card - right side */}
            <div className="card-item bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Unified dashboard</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  All your tools in one adaptive workspace for your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
