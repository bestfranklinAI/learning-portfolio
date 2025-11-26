import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function VideoPlaceholder({ 
  title = 'Video Presentation', 
  subtitle = 'Click to play',
  className = '' 
}: VideoPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`aspect-video bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-all duration-300 ${className}`}
    >
      <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center mb-4 shadow-lg">
        <Play className="w-8 h-8 text-white ml-1" />
      </div>
      <p className="text-slate-700 font-medium">{title}</p>
      <p className="text-slate-500 text-sm">{subtitle}</p>
    </motion.div>
  );
}
