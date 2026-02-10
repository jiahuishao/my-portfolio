import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{skill.name}</span>
        <span className="text-gray-500 text-sm">{skill.level}%</span>
      </div>
      <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
