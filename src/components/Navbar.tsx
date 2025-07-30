import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/customer-service">Customer Service AI</HoveredLink>
            <HoveredLink href="/workflow-automation">Workflow Automation</HoveredLink>
            <HoveredLink href="/data-analysis">Data Analysis AI</HoveredLink>
            <HoveredLink href="/content-creation">Content Creation</HoveredLink>
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
            <ProductItem
              title="Finance"
              href="/finance"
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=140&h=70&fit=crop&crop=center"
              description="Risk assessment, fraud detection, and financial advisory AI."
            />
            <ProductItem
              title="Education"
              href="/education"
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=140&h=70&fit=crop&crop=center"
              description="Personalized learning and administrative automation."
            />
          </div>
        </MenuItem>
        
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/starter">Starter Plan</HoveredLink>
            <HoveredLink href="/professional">Professional</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            <HoveredLink href="/custom">Custom Solutions</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}