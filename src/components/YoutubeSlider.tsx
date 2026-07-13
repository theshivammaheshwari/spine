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
    <section className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-red-500/30 text-red-500 text-sm font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Video Gallery
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
            Patient Success <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">& Insights</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
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
              className="bg-secondary/50 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden relative aspect-video"
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

        <div className="text-center mt-16">
          <a href="https://www.youtube.com/@drHarshvardhanchiropactor/videos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-10 h-16 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] hover:scale-105 transform duration-300 text-lg uppercase tracking-wide">
            <Youtube className="w-6 h-6" />
            View Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
