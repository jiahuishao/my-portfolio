import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills, experiences } from '../data/profile';
import SkillBar from '../components/ui/SkillBar';
import TimelineItem from '../components/ui/TimelineItem';

const About: React.FC = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto py-16 space-y-20">
      {/* Introduction Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">Me</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {personalInfo.title} based in {personalInfo.location}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-gray-600 leading-relaxed">
            I'm passionate about building digital products that solve real-world problems. 
            When I'm not coding, you can find me exploring new technologies, contributing to open source, 
            or enjoying a good cup of coffee while sketching new design ideas.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative z-10">
            <img 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20developer%20working%20at%20modern%20desk%20setup%20with%20code%20on%20screen%20warm%20lighting%20portrait&image_size=square_hd" 
              alt="Profile" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary rounded-2xl z-0 hidden md:block"></div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-gray-600 max-w-2xl">
            My technical toolkit is diverse, ranging from modern frontend frameworks to robust backend solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl">
            A timeline of my professional journey and educational background.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
