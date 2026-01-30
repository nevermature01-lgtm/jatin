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
      <Icon className="h-8 w-8 flex-shrink-0 text-neutral-300 md:mt-1 transition-all duration-300 ease-in-out md:group-hover:scale-110 md:group-hover:text-primary" />
      <div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-base text-neutral-300">{description}</p>
        <Link
          href="#"
          className="group/link flex items-center justify-center gap-2 text-sm font-bold text-white md:justify-start transition-colors duration-300 md:group-hover:text-primary"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
