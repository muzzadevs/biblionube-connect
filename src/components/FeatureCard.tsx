
import React from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  image?: string;
}

const FeatureCard = ({ title, description, icon, to, image }: FeatureCardProps) => {
  return (
    <Link to={to} className="feature-card group relative overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-10 group-hover:opacity-15 transition-opacity"
          />
        </div>
      )}
      <div className="flex flex-col items-center text-center z-10">
        <div className="text-burgundy p-3 mb-3 rounded-full bg-burgundy/10">
          {icon}
        </div>
        <h3 className="card-heading">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
