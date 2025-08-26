import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

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

      // Animate feature items with staggered delays
      const featureItems = sectionRef.current.querySelectorAll('.feature-item');
      featureItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.2,
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
    <section ref={sectionRef} className="overflow-hidden py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary" className="text-xs font-medium">
              Lets Get Started
            </Badge>
          </div>
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Solutions
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Transform your workflow with intelligent AI agents that understand your needs,
            From automated research to smart search capabilities, we deliver AI solutions
            that scale with your business.
          </p>
        </div>

        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12">
          <div style={{ perspective: "800px" }}>
            <div
              style={{
                transform: "skewY(-2deg) skewX(-2deg) rotateX(6deg)",
                clipPath: "inset(0 round 2rem)", // equivalent to rounded-4xl
              }}
              className="relative aspect-[88/36]"
            >
              <div className="absolute -inset-[4.25rem] z-1 from-transparent to-75% bg-gradient-radial"></div>

              <img
                src="/images/ai-search-interface.png"
                alt="AI Search Interface"
                className="absolute inset-0 z-10 w-full h-full object-cover"
                width={2797}
                height={1137}
                loading="lazy"
              />
            </div>
          </div>
        </div>


        <div className="relative mx-auto grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-8 lg:grid-cols-4">
          {/* Feature item 1 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Lightning Fast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Get instant AI-powered responses and solutions in milliseconds,
              not minutes.
            </p>
          </div>

          {/* Feature item 2 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Powerful AI</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Powered by cutting-edge machine learning models that learn
              and adapt to your specific needs.
            </p>
          </div>

          {/* Feature item 3 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Enterprise Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Bank-level encryption and privacy protection for all your
              AI interactions and data.
            </p>
          </div>

          {/* Feature item 4 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Smart Automation</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Intelligent workflows that handle complex tasks while you
              focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
