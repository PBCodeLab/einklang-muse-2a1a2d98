import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoUrl from "../assets/einklang-logo.png";

function SiteHeader() {
  return (
    <header className="border-b border-outline-variant bg-background sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center shrink-0" aria-label="Einklang Academy home">
          <img
            src={logoUrl}
            alt="Einklang Academy"
            className="h-12 md:h-14 w-auto shrink-0 object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/solutions" className="txt-label-nav text-primary hover:underline underline-offset-4" activeProps={{ className: "txt-label-nav text-primary underline underline-offset-4" }}>Products</Link>
            <Link to="/case-studies" className="txt-label-nav text-primary hover:underline underline-offset-4" activeProps={{ className: "txt-label-nav text-primary underline underline-offset-4" }}>Cases</Link>
            <Link to="/letter" className="txt-label-nav text-primary hover:underline underline-offset-4" activeProps={{ className: "txt-label-nav text-primary underline underline-offset-4" }}>AI Strategy</Link>
            <Link to="/about" className="txt-label-nav text-primary hover:underline underline-offset-4" activeProps={{ className: "txt-label-nav text-primary underline underline-offset-4" }}>Company</Link>
          </nav>
          <a
            href="https://calendly.com/aslamjilani-einklangacademy/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded bg-primary text-on-primary px-5 py-2 text-sm font-bold hover:opacity-90 transition"
          >
            Book a demo
          </a>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-semibold text-primary text-lg mb-3">Einklang Academy</div>
          <p className="txt-body text-sm">Operational excellence, finally scalable. The Einklang Agent for AI-native ways of working.</p>
        </div>
        <div>
          <div className="txt-label-nav text-primary mb-3">Operating in</div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Switzerland (DACH) · Germany / Austria · Brazil · LatAm · EU / UK
          </p>
        </div>
        <div>
          <div className="txt-label-nav text-primary mb-3">Get in touch</div>
          <a href="https://calendly.com/aslamjilani-einklangacademy/30min" target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline underline-offset-4">Book a 30-min demo</a>
        </div>
      </div>
      <div className="border-t border-outline-variant py-6 text-center text-xs text-on-surface-variant">
        © {new Date().getFullYear()} Einklang Academy. All rights reserved.
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Einklang — Operational Excellence, finally scalable." },
      { name: "description", content: "The Einklang Agent gives every team access to proven improvement methods and turns every project into a step toward AI-native ways of working." },
      { name: "author", content: "Einklang Academy" },
      { property: "og:title", content: "Einklang — Operational Excellence, finally scalable." },
      { property: "og:description", content: "The Einklang Agent gives every team access to proven improvement methods and turns every project into a step toward AI-native ways of working." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Einklang — Operational Excellence, finally scalable." },
      { name: "twitter:description", content: "The Einklang Agent gives every team access to proven improvement methods and turns every project into a step toward AI-native ways of working." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/065f9fbc-810d-4df6-a133-2613d9c9f43e/id-preview-8262327f--700180b2-c62f-4275-bdcd-ea123227ac96.lovable.app-1778245818080.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/065f9fbc-810d-4df6-a133-2613d9c9f43e/id-preview-8262327f--700180b2-c62f-4275-bdcd-ea123227ac96.lovable.app-1778245818080.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
