import React from "react";
import { ArrowRight } from "lucide-react";

const RecommendedSection = () => {
  const recommendations = [
    {
      title: "The Future of AI in 2026",
      category: "Tech",
      img: "https://i.pravatar.cc",
    },
    {
      title: "Mastering Framer Motion",
      category: "Design",
      img: "https://i.pravatar.cc",
    },
  ];

  return (
    <div className="mt-32">
      <h2 className="text-4xl font-black mb-12 tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        You Might Also Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recommendations.map((item, i) => (
          <div
            key={i}
            className="group relative h-64 rounded-[3rem] overflow-hidden border border-white/10"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end">
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">
                {item.category}
              </span>
              <h4 className="text-xl font-bold text-white mb-4">
                {item.title}
              </h4>
              <button className="flex items-center gap-2 text-white text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                Read Now <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedSection;
