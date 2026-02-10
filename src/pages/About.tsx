import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Mountain, Music } from 'lucide-react';
import { personalInfo, skills, experiences, hobbies } from '../data/profile';
import SkillBar from '../components/ui/SkillBar';
import TimelineItem from '../components/ui/TimelineItem';

const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera': return <Camera className="h-6 w-6" />;
      case 'Mountain': return <Mountain className="h-6 w-6" />;
      case 'Music': return <Music className="h-6 w-6" />;
      default: return null;
    }
  };

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
            关于 <span className="text-primary">我</span>
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {personalInfo.title} 位于 {personalInfo.location}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          <p className="text-gray-600 leading-relaxed">
            我热衷于构建解决现实世界问题的数字产品。
            当我不工作时，你会发现我在探索新技术、徒步旅行，或者利用AI进行音乐创作。
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
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Professional%20product%20manager%20working%20at%20modern%20desk%20setup%20with%20wireframes%20on%20screen%20warm%20lighting%20portrait&image_size=square_hd" 
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">专业技能</h2>
          <p className="text-gray-600 max-w-2xl">
            我的技能涵盖了从产品规划、用户研究到项目管理的各个方面。
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">经验与教育</h2>
          <p className="text-gray-600 max-w-2xl">
            我的职业生涯和教育背景的时间轴。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">个人爱好</h2>
          <p className="text-gray-600 max-w-2xl">
            工作之余，我喜欢通过多种方式探索世界和表达自我。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                {getIcon(hobby.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.name}</h3>
              <p className="text-gray-600">{hobby.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
