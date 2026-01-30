import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="flex items-start gap-6 text-left">
      <Icon className="w-8 h-8 text-neutral-700 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-xl font-bold text-neutral-800 mb-2">{title}</h3>
        <p className="text-base text-neutral-600 mb-4">{description}</p>
        <Link href="#" className="text-sm font-bold text-neutral-800 flex items-center gap-2 group">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
