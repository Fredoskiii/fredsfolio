import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold tracking-tight">Fred Akpaka</p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            Digital Marketing Specialist • Creative Consultant • Entrepreneur
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
          <Link to="/" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
            Home
          </Link>
          <Link to="/portfolio" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
            Portfolio
          </Link>
          <Link to="/about" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
            About
          </Link>
          <Link to="/contact" className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
            Contact
          </Link>
        </nav>

        <div className="flex gap-6 md:justify-end">
          <a
            href="https://www.linkedin.com/in/fred-akpaka-0bbb91206/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://t.me/ultimatefxg"
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Telegram
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <p className="container-x py-6 text-xs text-primary-foreground/60">
          © 2026 Fred Akpaka. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
