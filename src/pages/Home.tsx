import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout as LayoutIcon, Smartphone } from 'lucide-react';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { personalInfo } from '../data/profile';

const Home: React.FC = () => {
  const featuredProjects = projects.filter(p => p.isFeatured).slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
              Available for freelance work
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
              Hi, I'm <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              {personalInfo.title}. {personalInfo.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow-md"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services/Skills Preview */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <LayoutIcon className="h-8 w-8 text-blue-500" />,
              title: "Web Development",
              desc: "Building fast, responsive, and accessible websites using modern frameworks."
            },
            {
              icon: <Smartphone className="h-8 w-8 text-green-500" />,
              title: "Mobile Friendly",
              desc: "Ensuring your application looks and works perfectly on all devices."
            },
            {
              icon: <Code className="h-8 w-8 text-purple-500" />,
              title: "Clean Code",
              desc: "Writing maintainable, scalable, and efficient code following best practices."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-slate-50 rounded-lg inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container px-4 md:px-6 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Projects</h2>
            <p className="text-gray-600">A selection of my recent work.</p>
          </div>
          <Link 
            to="/projects" 
            className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
