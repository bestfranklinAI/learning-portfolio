import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
  isActive?: boolean;
  isLast?: boolean;
  icon?: ReactNode;
}

export function TimelineItem({ 
  week, 
  title, 
  description, 
  isActive = false, 
  isLast = false,
  icon 
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8"
    >
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-slate-200" />
      )}

      {/* Dot */}
      <div
        className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${
          isActive
            ? 'bg-indigo-600 border-indigo-600'
            : 'bg-white border-slate-300'
        }`}
      />

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-2">
          {icon && <span className="text-indigo-600">{icon}</span>}
          <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            {week}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-slate-800 mb-1 font-serif mt-0">
          {title}
        </h4>
        <p className="text-slate-600 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

interface TimelineProps {
  items: Omit<TimelineItemProps, 'isLast'>[];
  className?: string;
}

export function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
