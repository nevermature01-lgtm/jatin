'use client';

import Link from 'next/link';
import { Home, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="mr-8 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Home className={cn('h-7 w-7 transition-colors', isScrolled ? 'text-primary' : 'text-white')} />
            <span className={cn('font-bold sm:inline-block font-headline text-xl transition-colors', isScrolled ? 'text-foreground' : 'text-white')}>
              LuxeEstate
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="#" className={cn('transition-colors hover:opacity-80', isScrolled ? 'text-foreground' : 'text-white')}>United States</Link>
          <Link href="#" className={cn('transition-colors hover:opacity-80', isScrolled ? 'text-foreground' : 'text-white')}>Spain</Link>
          <Link href="#" className={cn('transition-colors hover:opacity-80', isScrolled ? 'text-foreground' : 'text-white')}>France</Link>
          <Link href="#" className={cn('transition-colors hover:opacity-80', isScrolled ? 'text-foreground' : 'text-white')}>UAE</Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild variant="outline" className={cn('font-body rounded-full transition-colors', isScrolled ? 'border-primary/50 text-primary hover:bg-primary/5 hover:text-primary' : 'border-white/50 text-white hover:bg-white/10 hover:text-white')}>
            <Link href="#">
              <User className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
