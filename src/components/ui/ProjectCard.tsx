import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-900 hover:text-secondary hover:scale-110 transition-all"
              title="View Live Demo"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {project.sourceCodeUrl && (
            <a 
              href={project.sourceCodeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-gray-900 hover:text-secondary hover:scale-110 transition-all"
              title="View Source Code"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
          {project.description}
        </p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-500 rounded-md">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <Link 
            to={`/projects?id=${project.id}`} 
            className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary transition-colors group/link"
          >
            View Details 
            <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
