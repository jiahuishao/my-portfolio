import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-slate-200 last:border-0 last:pb-0"
    >
      <div className="absolute -left-[11px] top-0 p-1.5 bg-white border-2 border-primary rounded-full text-primary">
        {experience.type === 'work' ? (
          <Briefcase className="h-4 w-4" />
        ) : (
          <GraduationCap className="h-4 w-4" />
        )}
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full mb-3">
          {experience.period}
        </span>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{experience.role}</h3>
        <div className="text-primary font-medium mb-3">{experience.company}</div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
