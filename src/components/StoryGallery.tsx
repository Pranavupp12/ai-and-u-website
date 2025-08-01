"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export interface AIStoryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  source: string;
  publishedDate: string;
}

export interface AIStoriesGalleryProps {
  title?: string;
  description?: string;
  items?: AIStoryItem[];
}

// AI-related stories data with real AI news links
const aiStoriesData = [
  {
    id: "openai-gpt4",
    title: "OpenAI Announces GPT-4 Turbo with Enhanced Capabilities",
    description:
      "OpenAI unveils its latest language model with improved reasoning capabilities, longer context windows, and reduced costs, marking a significant advancement in AI technology.",
    href: "https://openai.com/blog/gpt-4-turbo",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    source: "OpenAI",
    publishedDate: "2024-01-15"
  },
  {
    id: "google-gemini",
    title: "Google's Gemini AI Challenges ChatGPT with Multimodal Approach",
    description:
      "Google introduces Gemini, its most capable AI model yet, featuring advanced multimodal understanding that can process text, images, audio, and video simultaneously.",
    href: "https://deepmind.google/technologies/gemini/",
    image:
      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyNnx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Google DeepMind",
    publishedDate: "2024-01-10"
  },
  {
    id: "microsoft-copilot",
    title: "Microsoft Copilot Transforms Enterprise Productivity",
    description:
      "Microsoft's AI-powered Copilot is revolutionizing workplace productivity by integrating AI assistance across Office 365 applications, helping millions of users worldwide.",
    href: "https://www.microsoft.com/en-us/microsoft-365/microsoft-copilot",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw0Mnx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Microsoft",
    publishedDate: "2024-01-08"
  },
  {
    id: "ai-regulation",
    title: "EU AI Act Sets Global Standards for Artificial Intelligence",
    description:
      "The European Union passes comprehensive AI legislation, establishing the world's first major regulatory framework for artificial intelligence systems and their deployment.",
    href: "https://www.europarl.europa.eu/topics/en/article/20230601STO93804/eu-ai-act-first-regulation-on-artificial-intelligence",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw1Mnx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    source: "European Parliament",
    publishedDate: "2024-01-05"
  },
  {
    id: "ai-healthcare",
    title: "AI Breakthrough in Drug Discovery Accelerates Medical Research",
    description:
      "Researchers use AI to identify potential drug compounds in days rather than years, representing a major breakthrough in pharmaceutical development and patient care.",
    href: "https://www.nature.com/articles/d41586-023-00018-7",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw2M3x8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Nature",
    publishedDate: "2024-01-03"
  },
  {
    id: "autonomous-vehicles",
    title: "Self-Driving Cars Achieve Major Safety Milestone",
    description:
      "Latest autonomous vehicle technology demonstrates significantly improved safety metrics, bringing fully autonomous transportation closer to mainstream adoption.",
    href: "https://www.tesla.com/autopilot",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw3NHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
    source: "Tesla",
    publishedDate: "2024-01-01"
  },
];

const AIStoriesGallery = ({
  title = "AI Stories from Around the World",
  description = "Stay updated with the latest developments, breakthroughs, and innovations in artificial intelligence from leading organizations and researchers worldwide.",
  items = aiStoriesData,
}: AIStoriesGalleryProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Animate badge and header content with staggered delays
      const headerElements = sectionRef.current.querySelectorAll('.header-item');
      headerElements.forEach((item, index) => {
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

      // Animate the gallery container
      const galleryContainer = sectionRef.current.querySelector('.gallery-container');
      if (galleryContainer) {
        gsap.fromTo(galleryContainer,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }
  }, []);

  useEffect(() => {
    if (!cardsRef.current) return;

    // Responsive card width based on screen size
    const getCardWidth = () => {
      if (window.innerWidth < 640) return 280; // Small screens: 260px + 20px gap
      if (window.innerWidth < 768) return 320; // Medium screens: 300px + 20px gap
      return 360; // Large screens: 340px + 20px gap
    };

    const cardWidth = getCardWidth();
    const totalWidth = cardWidth * items.length;

    // Create multiple copies for truly seamless scrolling
    const itemsToRender = [...items, ...items, ...items, ...items]; // Quad the items for extra safety

    // Clear existing content
    cardsRef.current.innerHTML = '';

    // Render items with responsive card sizes
    itemsToRender.forEach((item, index) => {
      const cardElement = document.createElement('div');
      // Responsive card classes
      cardElement.className = 'flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px]';
      cardElement.innerHTML = `
        <a href="${item.href}" target="_blank" rel="noopener noreferrer" class="group rounded-xl block">
          <div class="group relative h-[320px] sm:h-[360px] lg:h-[400px] w-full overflow-hidden rounded-xl transform transition-transform duration-300 hover:scale-[1.02]">
            <img
              src="${item.image}"
              alt="${item.title}"
              class="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 sm:p-5 lg:p-6 text-white">
              <div class="mb-1 sm:mb-2 text-xs sm:text-sm text-white/70 font-medium">
                ${item.source} • ${new Date(item.publishedDate).toLocaleDateString()}
              </div>
              <div class="mb-1 sm:mb-2 pt-1 sm:pt-2 text-lg sm:text-xl font-semibold line-clamp-2">
                ${item.title}
              </div>
              <div class="mb-4 sm:mb-5 lg:mb-6 line-clamp-2 sm:line-clamp-3 text-sm sm:text-base text-white/90">
                ${item.description}
              </div>
              <div class="flex items-center text-xs sm:text-sm font-medium text-white group-hover:text-primary transition-colors">
                Read more
                <svg class="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </a>
      `;
      cardsRef.current?.appendChild(cardElement);
    });

    // Start from the second set (middle position)
    gsap.set(cardsRef.current, { x: -totalWidth });

    // Create continuous infinite scroll with responsive timing
    const duration = items.length * (window.innerWidth < 768 ? 3 : 2.5); // Slower on mobile
    const tl = gsap.timeline({ repeat: -1 });
    
    // Animate from second set to third set
    tl.to(cardsRef.current, {
      x: -totalWidth * 2,
      duration: duration,
      ease: "none",
    })
    // Reset to first set instantly, then continue to second set
    .set(cardsRef.current, { x: 0 })
    .to(cardsRef.current, {
      x: -totalWidth,
      duration: duration,
      ease: "none",
    });

    // Pause on hover
    const handleMouseEnter = () => tl.pause();
    const handleMouseLeave = () => tl.resume();

    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Handle window resize
    const handleResize = () => {
      // Reinitialize animation with new dimensions
      tl.kill();
      // Small delay to ensure resize is complete
      setTimeout(() => {
        if (cardsRef.current) {
          const newCardWidth = getCardWidth();
          const newTotalWidth = newCardWidth * items.length;
          gsap.set(cardsRef.current, { x: -newTotalWidth });
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      tl.kill();
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [items.length]);

  return (
    <section ref={sectionRef} className="overflow-hidden py-8 sm:py-12 md:py-16 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header section with FIXED responsive spacing */}
        <div className="relative z-10 max-w-2xl mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="header-item mb-3 sm:mb-4 md:mb-6">
            <Badge variant="secondary" className="text-xs font-medium">
              Stories
            </Badge>
          </div>
          <h2 className="header-item mb-4 sm:mb-6 md:mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="header-item text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div ref={containerRef} className="gallery-container relative w-full overflow-hidden">
        <div 
          ref={cardsRef}
          className="flex gap-5"
          style={{ willChange: 'transform' }}
        >
          {/* Cards will be rendered dynamically by useEffect */}
        </div>
      </div>
    </section>
  );
};

export { AIStoriesGallery };






