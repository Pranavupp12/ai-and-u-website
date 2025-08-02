"use client";

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Zap, Target, Clock, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MetricCardProps {
  title: string
  value: string | number
  unit?: string
  description: string
  icon: React.ReactNode
  className?: string
  backgroundImage?: string
}

const MemoryUsageChart = () => (
  <svg className="w-full h-20" viewBox="0 0 400 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 60 L50 55 L100 53 L150 50 L200 48 L250 45 L300 43 L350 40 L400 38"
      stroke="#3b82f6" strokeWidth="2"/>
    <path
      d="M0 60 L50 55 L100 53 L150 50 L200 48 L250 45 L300 43 L350 40 L400 38 L400 80 L0 80 Z"
      fill="#3b82f6" fillOpacity="0.1"/>
    <circle cx="400" cy="38" r="3" fill="#3b82f6"/>
    <circle cx="300" cy="43" r="2" fill="#3b82f6"/>
    <circle cx="250" cy="45" r="2" fill="#3b82f6"/>
  </svg>
)

const MetricCard = ({ title, value, unit, description, icon, className, backgroundImage }: MetricCardProps) => {
  const isMemoryUsage = title === "Memory Usage"

  return (
    <Card className={`metric-card relative overflow-hidden transition-all duration-200 hover:shadow-lg border-transparent ${className} ${isMemoryUsage ? "col-span-2" : ""}`}> 
      {/* Background Image - Increased opacity for better visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      />
      
      {/* Reduced overlay opacity for more visible background */}
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/60" />
      
      <CardContent className="relative z-10 p-6">
        {/* Icon container */}
        <div className="relative flex aspect-square size-12 mb-4 rounded-full border border-transparent before:absolute before:-inset-2 before:rounded-full before:border before:border-transparent">
          <div className="m-auto text-gray-700 dark:text-gray-300">
            {icon}
          </div>
        </div>

        {isMemoryUsage ? (
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <div className="lg:flex-1">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white leading-tight drop-shadow-sm">
                {title}
              </h3>

              <div className="flex items-baseline space-x-1">
                <span className="text-2xl font-semibold text-gray-900 dark:text-white drop-shadow-sm">
                  {value}
                </span>
                {unit && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium drop-shadow-sm">
                    {unit}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed drop-shadow-sm">
                {description}
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:flex-1">
              <MemoryUsageChart />
            </div>
          </div>
        ) : (
          <div className="relative z-10 space-y-3">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white leading-tight drop-shadow-sm">
              {title}
            </h3>

            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white drop-shadow-sm">
                {value}
              </span>
              {unit && (
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium drop-shadow-sm">
                  {unit}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed drop-shadow-sm">
              {description}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function ModelPerformanceMetrics() {
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

      // Animate metric cards with staggered delays
      const metricCards = sectionRef.current.querySelectorAll('.metric-card');
      metricCards.forEach((card, index) => {
        gsap.fromTo(card,
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

  const metrics = [
    {
      title: "Model Accuracy",
      value: 94.2,
      unit: "%",
      description: "Overall prediction accuracy across all test datasets",
      status: "excellent" as const,
      icon: <Target className="w-6 h-6" />,
      backgroundImage: "/images/card-img-one.webp"
    },
    {
      title: "Response Time",
      value: 120,
      unit: "ms",
      description: "Average response time for model inference",
      status: "good" as const,
      icon: <Clock className="w-6 h-6" />,
      backgroundImage: "/images/card-img-two.webp"
    },
    {
      title: "Throughput",
      value: 850,
      unit: "req/sec",
      description: "Maximum requests processed per second",
      status: "excellent" as const,
      icon: <Zap className="w-6 h-6" />,
      backgroundImage: "/images/card-img-three.webp"
    },
    {
      title: "Memory Usage",
      value: 2.4,
      unit: "GB",
      description: "Peak memory consumption during inference",
      status: "good" as const,
      icon: <TrendingUp className="w-6 h-6" />,
      backgroundImage: "/images/card-img-four.webp"
    },
    {
      title: "Model Uptime",
      value: 99.9,
      unit: "%",
      description: "Service availability over the last 30 days",
      status: "excellent" as const,
      icon: <CheckCircle className="w-6 h-6" />,
      backgroundImage: "/images/card-img-one.webp"
    }
  ]

  return (
    <section ref={sectionRef} className="bg-transparent py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="flex gap-4 flex-col items-start mb-12">
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Badge variant="secondary" className="text-xs font-medium">
                Performance
              </Badge>
            </div>
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-semibold text-left">
              Nora's Performance 
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Real-time performance insights and key metrics for Nora, our advanced AI model that delivers intelligent and contextual responses.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}





