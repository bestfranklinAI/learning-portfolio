import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FeedbackBlockProps {
  type: 'teacher' | 'peer' | 'action';
  title: string;
  children: ReactNode;
  className?: string;
}

const typeConfig = {
  teacher: {
    borderColor: 'border-l-indigo-500',
    bgColor: 'bg-indigo-50/50',
    labelBg: 'bg-indigo-100',
    labelText: 'text-indigo-700',
    label: 'Teacher Feedback',
  },
  peer: {
    borderColor: 'border-l-emerald-500',
    bgColor: 'bg-emerald-50/50',
    labelBg: 'bg-emerald-100',
    labelText: 'text-emerald-700',
    label: 'Peer Feedback',
  },
  action: {
    borderColor: 'border-l-amber-500',
    bgColor: 'bg-amber-50/50',
    labelBg: 'bg-amber-100',
    labelText: 'text-amber-700',
    label: 'Action Taken',
  },
};

export function FeedbackBlock({ type, title, children, className = '' }: FeedbackBlockProps) {
  const config = typeConfig[type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border-l-4 ${config.borderColor} ${config.bgColor} rounded-r-lg p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${config.labelBg} ${config.labelText}`}>
          {config.label}
        </span>
        <h4 className="text-base font-semibold text-slate-800 m-0">{title}</h4>
      </div>
      <div className="text-slate-700 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
