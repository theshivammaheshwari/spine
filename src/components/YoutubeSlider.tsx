import React from 'react';
import { Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace these IDs with the actual video IDs from the channel
const YOUTUBE_VIDEO_IDS = [
  "yP6Rp8GWq5M", 
  "MwF1IKENXCY",
  "qQoUZ6VQn7Y",
  "jut8B2eUXlQ",
  "z0qSD_-jLyQ",
  "lr_zsMr63Ws"
];

const YoutubeSlider = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-wide uppercase mb-6 border border-red-100">
            <Youtube className="w-5 h-5" />
            Video Gallery
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Patient Success & Insights</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            See real results and learn more about chiropractic care directly from Dr. Harshvardhan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {YOUTUBE_VIDEO_IDS.map((id, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-100 rounded-3xl shadow-lg hover:shadow-xl overflow-hidden relative aspect-video"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${id}?rel=0`}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://www.youtube.com/@drHarshvardhanchiropactor/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-300">
            <Youtube className="w-6 h-6" />
            View Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
