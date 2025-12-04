import { motion } from 'framer-motion';

export type BadgeVariant = 'academic' | 'communicative' | 'interpersonal' | 'intercultural' | 'highlight' | 'default';

interface CompetencyBadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  academic: 'bg-blue-50 text-blue-700 border-blue-200',
  communicative: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  interpersonal: 'bg-violet-50 text-violet-700 border-violet-200',
  intercultural: 'bg-amber-50 text-amber-700 border-amber-200',
  highlight: 'bg-amber-50 text-amber-700 border-amber-200',
  default: 'bg-slate-50 text-slate-700 border-slate-200',
};

export function CompetencyBadge({ label, variant = 'default', className = '' }: CompetencyBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${variantStyles[variant]} ${className}`}
    >
      {label}
    </motion.span>
  );
}
