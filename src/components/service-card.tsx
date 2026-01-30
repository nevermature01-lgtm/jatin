import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
      <Icon className="h-8 w-8 flex-shrink-0 text-neutral-700 md:mt-1" />
      <div>
        <h3 className="mb-2 text-xl font-bold text-neutral-800">{title}</h3>
        <p className="mb-4 text-base text-neutral-600">{description}</p>
        <Link
          href="#"
          className="group flex items-center justify-center gap-2 text-sm font-bold text-neutral-800 md:justify-start"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
