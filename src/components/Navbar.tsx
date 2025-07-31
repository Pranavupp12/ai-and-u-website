import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we're at the top (hero section), always show navbar
      if (currentScrollY <= 100) {
        setIsVisible(true);
      } 
      // If scrolling down, hide navbar
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        clearTimeout(scrollTimeout);
      }
    
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY]);
  
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 ease-in-out",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 -translate-y-full pointer-events-none",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/customer-service">Customer Service AI</HoveredLink>
            <HoveredLink href="/workflow-automation">Workflow Automation</HoveredLink>
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Healthcare"
              href="/healthcare"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=140&h=70&fit=crop&crop=center"
              description="AI agents for patient care, scheduling, and medical workflows."
            />
            <ProductItem
              title="E-commerce"
              href="/ecommerce"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=140&h=70&fit=crop&crop=center"
              description="Intelligent shopping assistants and inventory management."
            />
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/starter">Starter Plan</HoveredLink>
            <HoveredLink href="/professional">Professional</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
