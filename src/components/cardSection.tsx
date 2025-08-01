"use client";

import { Brain, Zap, Shield, Sparkles, Bot } from "lucide-react";
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
              <div className="flex items-center gap-3 mb-2">
                <Badge variant="secondary" className="text-xs font-medium">
                  Meet Nora
                </Badge>
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
                AI That Actually Understands You
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Unlike other AI models that give generic responses, Nora learns your context 
                and delivers solutions tailored specifically to your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Large card - Contextual Understanding */}
            <div className="card-item bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative overflow-hidden">
              <img 
                src="/images/card-img-one.webp" 
                alt="Contextual AI Understanding"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                loading="lazy"
              />
              <div className="relative z-10">
                <Brain className="w-8 h-8 stroke-1 text-primary" />
              </div>
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Contextual Intelligence</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Nora remembers your conversations and understands your business context, 
                  unlike ChatGPT's isolated responses.
                </p>
              </div>
            </div>

            {/* Standard card - Real-time Learning */}
            <div className="card-item bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden">
              <img 
                src="/images/card-img-two.webp" 
                alt="Real-time Learning"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                loading="lazy"
              />
              <div className="relative z-10">
                <Zap className="w-8 h-8 stroke-1 text-primary" />
              </div>
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Real-time Adaptation</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Learns and improves from every interaction, getting smarter with your specific use case.
                </p>
              </div>
            </div>

            {/* Standard card - Privacy First */}
            <div className="card-item bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden">
              <img 
                src="/images/card-img-three.webp" 
                alt="Privacy Protection"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                loading="lazy"
              />
              <div className="relative z-10">
                <Shield className="w-8 h-8 stroke-1 text-primary" />
              </div>
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Privacy by Design</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Your data stays secure and private, with no training on your conversations.
                </p>
              </div>
            </div>

            {/* Large card - Intelligent Workflows */}
            <div className="card-item bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative overflow-hidden">
              <img 
                src="/images/card-img-four.webp" 
                alt="Intelligent Workflows"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
                loading="lazy"
              />
              <div className="relative z-10">
                <Sparkles className="w-8 h-8 stroke-1 text-primary" />
              </div>
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Intelligent Workflows</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Automates complex multi-step processes that would require multiple prompts 
                  in other AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

