import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ReflectionCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  badges?: ReactNode;
  className?: string;
}

export function ReflectionCard({ title, subtitle, children, badges, className = '' }: ReflectionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-md transition-shadow duration-300 ${className}`}
    >
      {/* Header */}
      <header className="mb-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-slate-800 font-serif mt-0 mb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-slate-500 text-base">{subtitle}</p>
            )}
          </div>
          {badges && (
            <div className="flex flex-wrap gap-2">
              {badges}
            </div>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="prose prose-slate max-w-none">
        {children}
      </div>
    </motion.article>
  );
}
