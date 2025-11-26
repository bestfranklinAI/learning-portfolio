import { motion } from 'framer-motion';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterCardProps {
  beforeTitle: string;
  beforeContent: string;
  afterTitle: string;
  afterContent: string;
  className?: string;
}

export function BeforeAfterCard({
  beforeTitle,
  beforeContent,
  afterContent,
  className = '',
}: BeforeAfterCardProps) {
  // Extract the competency name from the title (e.g., "Communicative Competencies: Before" -> "Communicative Competencies")
  const competencyName = beforeTitle.replace(': Before', '').replace(': After', '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden ${className}`}
    >
      {/* Header with competency name */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
        <h3 className="text-lg font-semibold text-white m-0 font-serif">
          {competencyName}
        </h3>
      </div>

      {/* Comparison content */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Before Column */}
        <div className="p-6 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-500" />
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-red-100 text-red-700">
              Week 1
            </span>
          </div>
          <p className="text-slate-600 text-base leading-relaxed m-0">
            {beforeContent}
          </p>
        </div>

        {/* After Column */}
        <div className="p-6 bg-emerald-50/50">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-100 text-emerald-700">
              Week 13
            </span>
          </div>
          <p className="text-slate-700 text-base leading-relaxed m-0">
            {afterContent}
          </p>
        </div>
      </div>

      {/* Transformation indicator */}
      <div className="bg-slate-100 px-6 py-3 flex items-center justify-center gap-3">
        <span className="text-sm font-medium text-slate-500">Transformation</span>
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 bg-red-300 rounded-full" />
          <ArrowRight className="w-4 h-4 text-indigo-500" />
          <div className="w-8 h-1 bg-emerald-400 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}
