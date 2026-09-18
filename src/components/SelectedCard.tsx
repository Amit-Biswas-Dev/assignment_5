import type { Itechnologie } from "../types/technologiesType";
import { FiX, FiTrash2 } from "react-icons/fi";

interface SelectedCardProps {
  tech: Itechnologie[];
  onRemove: (heading: string) => void;
  onClear: () => void;
}

const SelectedCard = ({
  tech,
  onRemove,
  onClear,
}: SelectedCardProps) => {
  return (
    <div className="col-span-1">
      <h2 className="text-2xl font-bold mb-4">
        Selected Technologies
      </h2>

      {tech.length === 0 ? (
        <p>No technology selected yet.</p>
      ) : (
        <div className="space-y-4">
          {tech.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md border border-gray-200"
            >
              <div className="flex items-center justify-between p-4">
                
                <div className="flex items-center gap-3">
                  <figure>
                    <img
                      src={item.img}
                      alt={item.heading}
                      className="w-12 h-12 object-contain rounded-xl"
                    />
                  </figure>

                  <div>
                    <h2 className="card-title text-lg">
                      {item.heading}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {item.usibility}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onRemove(item.heading)}
                  aria-label={`Remove ${item.heading}`}
                >
                  <FiX />
                </button>

              </div>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        disabled={tech.length === 0}
        onClick={onClear}
        className="flex min-h-9 w-full items-center justify-center gap-2 mt-4 rounded-lg border border-red-300 text-sm font-bold text-red-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FiTrash2 />
        Clear list
      </button>
    </div>
  );
};

export default SelectedCard;