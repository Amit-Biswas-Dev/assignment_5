
import { use } from "react";
import type { Itechnologie } from "../types/technologiesType";

interface TechProps {
  techno: Promise<Itechnologie[]>;
  savetech: (tech: Itechnologie) => void;
}

const TechnologiesCart = ({ techno, savetech }: TechProps) => {
  const technologies = use(techno);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between"
        >
        
          <div>
            <div className="flex justify-between items-center mb-4">

              
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>

              
              <span className="bg-amber-50 text-amber-600 font-medium text-sm px-3 py-1 rounded-full">
                {tech.badge}
              </span>
            </div>

            
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {tech.name}
            </h2>

            
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              {tech.description}
            </p>
          </div>

         
          <div>
            <div className="flex items-center justify-between text-sm mb-6 pt-4 border-t border-gray-50">

              
              <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md font-medium">
                {tech.category}
              </span>

              
              <span className="text-slate-500 font-medium">
                {tech.difficulty}
              </span>

              
              <div className="flex items-center gap-1 text-slate-800 font-semibold">
                <span className="text-yellow-400">★</span>
                <span>{tech.rating}</span>
              </div>
            </div>

            
            <button
              onClick={() => savetech(tech)}
              className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200"
            >
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesCart;
