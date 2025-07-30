"use client";

// 1. Import React and needed libraries
import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GradientHeading } from "@/components/ui/gradient-heading";

// 2. Import React Icon SVGs for top tech & AI companies
import {
  SiApple,
  SiGoogle,
  SiAmazon,
  SiFacebook,
  SiGithub,
  SiNvidia,
  SiOpenai,
  SiAnthropic,
  SiHuggingface,
  SiVercel,
  SiSupabase,
  SiStripe,
  SiTwilio,
  SiMongodb,
  SiAwsamplify,
  SiGooglecloud,
  SiDatabricks,
  SiSnowflake
} from "react-icons/si";

// 3. Prepare the logo array
const allLogos = [
  { name: "Apple", id: 1, img: SiApple },
  { name: "Google", id: 3, img: SiGoogle },
  { name: "Amazon", id: 4, img: SiAmazon },
  { name: "Meta", id: 5, img: SiFacebook },
  { name: "GitHub", id: 6, img: SiGithub },
  { name: "OpenAI", id: 8, img: SiOpenai },
  { name: "Anthropic", id: 9, img: SiAnthropic },
  { name: "Hugging Face", id: 11, img: SiHuggingface },
  { name: "Vercel", id: 14, img: SiVercel },
  { name: "Supabase", id: 15, img: SiSupabase },
  { name: "Stripe", id: 16, img: SiStripe },
  { name: "Twilio", id: 17, img: SiTwilio },
  { name: "MongoDB", id: 18, img: SiMongodb },
  { name: "AWS", id: 20, img: SiAwsamplify },
  { name: "Google Cloud", id: 21, img: SiGooglecloud },
  { name: "Databricks", id: 22, img: SiDatabricks },
  { name: "Snowflake", id: 23, img: SiSnowflake }
];

// 4. Main Brands Section
export function BrandsSection() {
  return (
    <section className="space-y-8 py-20 md:py-32">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
        <div className="text-center">
          <GradientHeading variant="secondary">
            The best are already here
          </GradientHeading>
            <GradientHeading size="xxl">Join AI&U</GradientHeading>
        </div>
        <LogoCarousel columnCount={3} logos={allLogos} />
      </div>
    </section>
  );
}
