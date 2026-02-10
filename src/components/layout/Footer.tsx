import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { personalInfo } from '../../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'github': return <Github className="h-5 w-5" />;
      case 'linkedin': return <Linkedin className="h-5 w-5" />;
      case 'twitter': return <Twitter className="h-5 w-5" />;
      default: return null;
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-bold text-2xl text-primary mb-4 block">
              Shao<span className="text-secondary">Jiahui</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              用激情和精准打造数字体验。
              让我们一起创造奇迹。
            </p>
            <div className="flex gap-4">
              {personalInfo.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white rounded-full text-gray-600 hover:text-primary hover:shadow-md transition-all"
                >
                  {getIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">导航</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-secondary transition-colors">首页</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-secondary transition-colors">关于我</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-secondary transition-colors">项目</Link></li>
              <li><Link to="/photography" className="text-gray-600 hover:text-secondary transition-colors">摄影</Link></li>
              <li><Link to="/music" className="text-gray-600 hover:text-secondary transition-colors">音乐</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-secondary transition-colors">联系我</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系方式</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">{personalInfo.location}</li>
              <li className="text-gray-600">{personalInfo.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {personalInfo.name}. 保留所有权利。
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            使用 React & Tailwind <Heart className="h-4 w-4 text-red-500 fill-current" /> 制作
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
