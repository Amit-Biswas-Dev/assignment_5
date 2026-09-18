import { use } from "react";
import type { Itechnologie } from "../types/technologiesType";

interface TechProps {
  techno: Promise<Itechnologie[]>;
  savetech: (tech: Itechnologie) => void;
}

const TechnologiesCart = ({ techno, savetech }: TechProps) => {
  const technologies = use(techno);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="card bg-base-100 shadow-md border border-gray-200"
        >
          <figure className="px-4 pt-4">
            <img
              src={tech.img}
              alt={tech.heading}
              className="w-full h-64 object-cover rounded-xl"
            />
          </figure>

          <div className="card-body">
            <div className="flex justify-between items-start gap-2">
              <h2 className="card-title text-xl">
                {tech.heading}
              </h2>

              <span className="badge badge-primary">
                {tech.usibility}
              </span>
            </div>

            <p>{tech.description}</p>

            <p>
              <strong>Types:</strong> {tech.typesOf}
            </p>

            <p>
              <strong>Status:</strong> {tech.startingStatus}
            </p>

            <p>
              <strong>Rating:</strong> {tech.rating}
            </p>

            <button
              onClick={() => savetech(tech)}
              className="btn"
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesCart;