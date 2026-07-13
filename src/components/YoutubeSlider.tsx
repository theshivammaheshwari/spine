import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace these IDs with the actual video IDs from the channel
const YOUTUBE_VIDEO_IDS = [
  "dQw4w9WgXcQ", 
  "jNQXAC9IVRw",
  "M7lc1UVf-VE",
  "2g811Eo7K8U",
  "ysz5S6PUM-U"
];

const YoutubeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-bold tracking-wide uppercase mb-6 border border-red-100">
            <Youtube className="w-5 h-5" />
            Watch Our Videos
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">Patient Success & Insights</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            See real results and learn more about chiropractic care directly from Dr. Harshvardhan.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex -ml-6">
              {YOUTUBE_VIDEO_IDS.map((id, index) => (
                <div key={index} className="pl-6 min-w-[90vw] sm:min-w-[50%] lg:min-w-[33.333%] shrink-0">
                  <div className="bg-zinc-100 rounded-[2rem] shadow-xl overflow-hidden group relative aspect-[9/16] md:aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${id}?rel=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full object-cover"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-14 h-14 rounded-full bg-white shadow-2xl border-4 border-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10 ${
              !prevBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-14 h-14 rounded-full bg-white shadow-2xl border-4 border-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all z-10 ${
              !nextBtnEnabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
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
