import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface SkeletonCardProps {
  hasImage?: boolean;
  className?: string;
}

const SkeletonCard = ({ hasImage = false, className = '' }: SkeletonCardProps) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white ${className}`}>
      {hasImage && (
        <Skeleton className="h-48 w-full" />
      )}
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-4/6 mb-4" />
        <Skeleton className="h-4 w-24 mt-2" />
      </div>
    </div>
  );
};

export default SkeletonCard;
