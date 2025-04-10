import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface EnhancedTooltipProps {
  content: React.ReactNode;
  children?: React.ReactNode;
  showIcon?: boolean;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
}

const EnhancedTooltip = ({ 
  content, 
  children, 
  showIcon = false,
  side = "top",
  className = ""
}: EnhancedTooltipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center ${className}`}>
            {children}
            {showIcon && !children && (
              <Info className="h-4 w-4 text-spiritual-500 cursor-help ml-1" />
            )}
            {showIcon && children && (
              <Info className="h-4 w-4 text-spiritual-500 cursor-help ml-1" />
            )}
          </span>
        </TooltipTrigger>
        <TooltipContent side={side} className="bg-white border border-spiritual-200 p-3 max-w-xs">
          {typeof content === 'string' ? (
            <p className="text-sm text-gray-700">{content}</p>
          ) : (
            content
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default EnhancedTooltip;
