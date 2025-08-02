import { Github, Twitter } from "lucide-react"
import { Footer } from "@/components/ui/footer"

export function AIUFooter() {
  return (
    <Footer
      logo={null} // Removed the "A" icon
      brandName="AI&U"
      socialLinks={[
        {
          icon: <Twitter className="h-5 w-5" />,
          href: "https://twitter.com",
          label: "Twitter",
        },
        {
          icon: <Github className="h-5 w-5" />,
          href: "https://github.com",
          label: "GitHub",
        },
      ]}
      mainLinks={[
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/api-docs", label: "API Documentation" },
        { href: "/integrations", label: "Integrations" },
      ]}
      legalLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/cookies", label: "Cookie Policy" },
      ]}
      copyright={{
        text: "© 2025 AI&U",
        license: "All rights reserved",
      }}
    />
  )
}


