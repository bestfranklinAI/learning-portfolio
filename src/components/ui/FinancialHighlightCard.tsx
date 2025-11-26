import { motion } from 'framer-motion';

interface FinancialHighlightCardProps {
  title: string;
  metrics: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  className?: string;
}

export function FinancialHighlightCard({ title, metrics, className = '' }: FinancialHighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl p-6 text-white shadow-lg ${className}`}
    >
      <h3 className="text-lg font-semibold mb-5 m-0 text-white">{title}</h3>

      <div className="grid grid-cols-2 gap-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-3 rounded-lg ${metric.highlight ? 'bg-white/20 backdrop-blur' : 'bg-indigo-900/40'}`}
          >
            <p className="text-indigo-100 text-xs mb-1">{metric.label}</p>
            <p className="text-xl font-bold text-white">{metric.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
