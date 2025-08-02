import { Button } from "@/components/ui/button"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <div className="md:flex md:items-start md:justify-between w-full">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            {logo}
            <span className="font-bold text-xl">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-4 lg:space-x-6">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12">
            <div className="text-sm leading-6 text-muted-foreground">
              <div>{copyright.text}</div>
              {copyright.license && <div>{copyright.license}</div>}
            </div>
            
            <div className="flex flex-col gap-4">
              {/* Main Links - Top row (removed hover:underline) */}
              <nav className="lg:text-right">
                <ul className="list-none flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                  {mainLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm text-primary underline-offset-4 hover:opacity-75 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              
              {/* Legal Links - Bottom row (removed hover:underline) */}
              <div className="lg:text-right">
                <ul className="list-none flex flex-wrap gap-x-6 gap-y-2 lg:justify-end">
                  {legalLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground underline-offset-4 hover:opacity-75 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



