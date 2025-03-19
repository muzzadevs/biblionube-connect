
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
        "feature-card group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-burgundy/20 animate-fade-in", 
        className
      )}
    >
      <div className="mb-4 text-burgundy p-3 bg-gray-50 rounded-full group-hover:bg-burgundy/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-burgundy transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </Link>
  );
}
