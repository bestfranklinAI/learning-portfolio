import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

interface SkillGrowthProps {
  skills: {
    name: string;
    startScore: number;
    endScore: number;
    color: string;
  }[];
  className?: string;
}

// Helper to get color class based on score (1-5 scale)
const getScoreColorClass = (score: number): string => {
  if (score <= 2) return 'bg-red-100 text-red-700 border-red-200';
  if (score <= 3) return 'bg-amber-100 text-amber-700 border-amber-200';
  if (score <= 4) return 'bg-blue-100 text-blue-700 border-blue-200';
  return 'bg-emerald-100 text-emerald-700 border-emerald-200';
};

export function SkillGrowthChart({ skills, className = '' }: SkillGrowthProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-sm border border-slate-200 p-6 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 font-serif m-0">Skill Growth</h3>
          <p className="text-sm text-slate-500 m-0">Week 1 → Week 13 (Scale: 1-5)</p>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => {
          const improvement = skill.endScore - skill.startScore;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getScoreColorClass(skill.startScore)}`}>
                    {skill.startScore}/5
                  </span>
                  <span className="text-slate-400">→</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getScoreColorClass(skill.endScore)}`}>
                    {skill.endScore}/5
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    +{improvement}
                  </span>
                </div>
              </div>
              <div className="relative h-2.5 bg-slate-100 rounded-full overflow-hidden">
                {/* Start score (faded) */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full opacity-30"
                  style={{
                    width: `${skill.startScore * 20}%`,
                    backgroundColor: skill.color,
                  }}
                />
                {/* End score (solid) */}
                <motion.div
                  initial={{ width: `${skill.startScore * 20}%` }}
                  whileInView={{ width: `${skill.endScore * 20}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Scale indicator */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div className="h-1.5 bg-gradient-to-r from-red-200 via-amber-200 via-blue-200 to-emerald-200 rounded-full" />
      </div>
    </motion.div>
  );
}
