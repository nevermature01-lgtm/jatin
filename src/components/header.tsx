'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'About us' },
    { href: '#', label: 'Leadership' },
    { href: '#properties', label: 'Properties' },
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
    <header className="absolute top-0 z-50 w-full bg-gradient-to-b from-black/60 to-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl font-headline tracking-wider text-white transition-colors">
                LANDMARKLANE
              </span>
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center space-x-8 text-sm font-medium md:flex">
            {mainNavLinks.map(link => (
              <Link key={link.label} href={link.href} className="flex items-center text-white/80 transition-colors hover:opacity-100">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end">
            <Button asChild variant="outline" className="hidden rounded-full font-body text-white transition-colors border-white/50 hover:bg-white/10 bg-black/20 backdrop-blur-sm md:inline-flex">
              <Link href="#">
                Contact us
              </Link>
            </Button>
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-white/50 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white/10 md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="inset-y-auto left-4 top-20 h-auto w-auto max-w-[300px] rounded-2xl bg-background/80 p-0 backdrop-blur-2xl border border-white/20 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-5 data-[state=open]:slide-in-from-top-5"
              >
                <div className="flex flex-col">
                    <SheetHeader className="p-6 pb-4 pr-12">
                      <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                      <SheetDescription className="sr-only">
                        Select a link to navigate to a different page.
                      </SheetDescription>
                      <SheetClose asChild>
                        <Link href="/" className="flex items-center space-x-2 mt-4">
                            <span className="font-bold text-xl font-headline tracking-wider text-foreground">
                                LANDMARKLANE
                            </span>
                        </Link>
                      </SheetClose>
                    </SheetHeader>
                    <Separator className="bg-foreground/10" />
                    <nav className="flex flex-col space-y-1 p-4">
                      {mainNavLinks.map(link => (
                          <SheetClose asChild key={link.label}>
                            <Link href={link.href} className="flex items-center rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-foreground/5 hover:text-foreground">
                              {link.label}
                            </Link>
                          </SheetClose>
                      ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <Separator className="bg-white/20" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-center overflow-hidden">
            <nav className="w-full overflow-x-auto whitespace-nowrap text-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="inline-flex items-center space-x-8 px-4 text-sm font-medium">
                {countryNavLinks.map(link => (
                    <Link key={link.label} href={link.href} className="text-white/80 transition-colors hover:opacity-100">
                        {link.label}
                    </Link>
                ))}
              </div>
            </nav>
        </div>
      </div>
      <Separator className="bg-white/20" />
    </header>
  );
}
