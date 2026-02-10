import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, ExternalLink, Mic2 } from 'lucide-react';
import { musicTracks } from '../data/music';

const MusicPage: React.FC = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto py-16 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-3 bg-purple-50 rounded-full mb-6">
          <Mic2 className="h-8 w-8 text-purple-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">音乐创作</h1>
        <p className="text-gray-600 text-lg">
          探索 AI 音乐创作的无限可能。这里是我利用 Suno、Udio 等工具生成的原创音乐作品。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {musicTracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="sm:w-48 aspect-square sm:aspect-auto relative group">
              <img
                src={track.coverUrl}
                alt={track.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Play className="h-8 w-8 fill-current" />
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{track.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                    {track.platform}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {track.description}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Music className="h-4 w-4" />
                  <span>AI Original</span>
                </div>
                <a
                  href={track.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  试听 <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MusicPage;
