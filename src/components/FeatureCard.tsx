
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  className?: string;
}

export default function FeatureCard({ title, description, icon, to, className }: FeatureCardProps) {
  return (
    <Link 
      to={to}
      className={cn(
        "feature-card flex flex-col items-center text-center animate-fade-in", 
        className
      )}
    >
      <div className="mb-4 text-burgundy p-3 bg-gray-50 rounded-full">
        {icon}
      </div>
      <h3 className="card-heading">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}
