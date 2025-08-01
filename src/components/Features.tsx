import { Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Scaling teams
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Empower your team with workflows that adapt to your needs,
            whether you prefer git synchronization or an AI Agents interface.
          </p>
        </div>

        <div className="relative -mx-4 rounded-3xl p-3 md:-mx-12">
          <div style={{ perspective: "800px" }}>
            <div
              style={{
                transform: "skewY(-2deg) skewX(-2deg) rotateX(6deg)",
              }}
              className="relative aspect-[88/36]"
            >
              <div className="absolute -inset-[4.25rem] z-1 from-transparent to-75% bg-gradient-radial"></div>

              <img
                src="https://tailark.com/_next/image?url=%2Fmail-upper.png&w=3840&q=75"
                alt="Payments illustration"
                className="absolute inset-0 z-10"
                width={2797}
                height={1137}
              />
              <img
                src="https://tailark.com/_next/image?url=%2Fmail-back.png&w=3840&q=75"
                alt="Payments illustration dark mode"
                className="hidden dark:block absolute inset-0 z-10"
                width={2797}
                height={1137}
              />
              <img
                src="https://tailark.com/_next/image?url=%2Fmail-back-light.png&w=3840&q=75"
                alt="Payments illustration light mode"
                className="dark:hidden absolute inset-0 z-10"
                width={2797}
                height={1137}
              />
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-8 lg:grid-cols-4">
          {/* Feature item 1 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Faaast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and innovate.
            </p>
          </div>

          {/* Feature item 2 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Powerful</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an entire helping developers and businesses.
            </p>
          </div>

          {/* Feature item 3 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>

          {/* Feature item 4 */}
          <div className="feature-item space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-medium">AI Powered</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              It supports an helping developers businesses innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
