'use client';

import Link from 'next/link';
import { Menu, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
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

  const mainNavLinks = [
    { href: '#', label: 'Just for You' },
    { href: '#', label: 'Sell', withDropdown: true },
    { href: '#', label: 'Find Agencies' },
  ];

  const countryNavLinks = [
      { href: '#', label: 'United States' },
      { href: '#', label: 'Spain' },
      { href: '#', label: 'Italy' },
      { href: '#', label: 'France' },
      { href: '#', label: 'Portugal' },
      { href: '#', label: 'Canada' },
      { href: '#', label: 'United Kingdom' },
      { href: '#', label: 'Greece' },
      { href: '#', label: 'Switzerland' },
      { href: '#', label: 'United Arab Emirates' },
      { href: '#', label: 'Mexico' },
      { href: '#', label: 'South Africa' },
      { href: '#', label: 'Australia' },
      { href: '#', label: 'Germany' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-6">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn("md:hidden", isScrolled ? 'text-foreground' : 'text-white')}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] bg-background p-0">
                <div className="flex h-full flex-col">
                    <div className="p-6">
                      <SheetClose asChild>
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-2xl font-headline tracking-wider text-foreground">
                                LuxeEstate
                            </span>
                        </Link>
                      </SheetClose>
                    </div>
                    <Separator />
                    <nav className="flex flex-col space-y-2 p-6">
                      {mainNavLinks.map(link => (
                          <SheetClose asChild key={link.label}>
                            <Link href={link.href} className="flex items-center py-2 text-lg font-medium text-foreground/80 hover:text-foreground">
                              {link.label}
                              {link.withDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                            </Link>
                          </SheetClose>
                      ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center space-x-2">
              <span className={cn('font-bold text-2xl font-headline tracking-wider transition-colors', isScrolled ? 'text-foreground' : 'text-white')}>
                LuxeEstate
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm font-medium">
            {mainNavLinks.map(link => (
              <Link key={link.label} href={link.href} className={cn('flex items-center transition-colors hover:opacity-100', isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-white/80')}>
                {link.label}
                {link.withDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end">
            <Button asChild variant="outline" className={cn('rounded-full transition-colors font-body', isScrolled ? 'border-primary/50 text-primary hover:bg-primary/10' : 'border-white/50 text-white hover:bg-white/10')}>
              <Link href="#">
                <User className="mr-2 h-4 w-4" />
                Log in
              </Link>
            </Button>
          </div>
        </div>

        <Separator className={cn('transition-colors', isScrolled ? 'bg-border' : 'bg-white/20')} />

        <div className="flex h-12 items-center justify-center overflow-hidden">
            <nav className="w-full overflow-x-auto whitespace-nowrap text-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="inline-flex items-center space-x-8 px-4 text-sm font-medium">
                {countryNavLinks.map(link => (
                    <Link key={link.label} href={link.href} className={cn('transition-colors hover:opacity-100', isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80')}>
                        {link.label}
                    </Link>
                ))}
              </div>
            </nav>
        </div>
      </div>
    </header>
  );
}
