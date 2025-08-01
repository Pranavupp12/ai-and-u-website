"use client"

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  // Lenis configuration options
  const lenisOptions = {
    lerp: 0.1,           // Controls smoothness (0-1, lower = smoother)
    duration: 1.5,       // Animation duration
    smoothTouch: false,  // Smooth scroll for touch devices
    smooth: true,        // Enable smooth scrolling
    wheelMultiplier: 1,  // Scroll speed multiplier
    touchMultiplier: 2,  // Touch scroll speed
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
