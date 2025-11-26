import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type QuoteType = 'teacher' | 'peer' | 'self';

interface QuoteBlockProps {
  quote: string;
  author?: string;
  type?: QuoteType;
  className?: string;
}

const typeStyles: Record<QuoteType, { border: string; bg: string; icon: string }> = {
  teacher: {
    border: 'border-indigo-500',
    bg: 'bg-indigo-50/50',
    icon: 'text-indigo-500',
  },
  peer: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-50/50',
    icon: 'text-emerald-500',
  },
  self: {
    border: 'border-slate-400',
    bg: 'bg-slate-50/50',
    icon: 'text-slate-400',
  },
};

export function QuoteBlock({ quote, author, type = 'self', className = '' }: QuoteBlockProps) {
  const styles = typeStyles[type];

  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border-l-4 ${styles.border} pl-6 py-4 ${styles.bg} rounded-r-lg ${className}`}
    >
      <Quote className={`w-6 h-6 ${styles.icon} mb-2`} />
      <p className="italic text-slate-700 text-lg leading-relaxed">"{quote}"</p>
      {author && (
        <footer className="mt-3 text-sm font-medium text-slate-500">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}
