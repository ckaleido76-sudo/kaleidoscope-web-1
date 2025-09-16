import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main id="main-content" role="main" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-card">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-header-from to-header-to bg-clip-text text-transparent">
          Welcome
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/70">
          Explore the Kaleidoscope project
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="backdrop-blur-sm border border-border">
            <Link href="/kaleidoscope">Visit Kaleidoscope Project →</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
