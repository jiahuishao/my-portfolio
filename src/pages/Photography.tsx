import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { photos } from '../data/photography';

const Photography: React.FC = () => {
  return (
    <div className="container px-4 md:px-6 mx-auto py-16 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
          <Camera className="h-8 w-8 text-blue-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">摄影作品</h1>
        <p className="text-gray-600 text-lg">
          用镜头捕捉光影，记录生活中的美好瞬间。这里展示了我的一些摄影作品。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-blue-300 text-sm font-medium mb-1">{photo.category}</span>
              <h3 className="text-white text-xl font-bold mb-2">{photo.title}</h3>
              {photo.description && (
                <p className="text-gray-200 text-sm">{photo.description}</p>
              )}
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <ImageIcon className="h-5 w-5 text-gray-700" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
