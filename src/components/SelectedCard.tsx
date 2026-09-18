import type { Itechnologie } from "../types/technologiesType";

interface SelectedCardProps {
  tech: Itechnologie[];
}

const SelectedCard = ({ tech }: SelectedCardProps) => {
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
              <figure className="px-4 pt-4">
                <img
                  src={item.img}
                  alt={item.heading}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {item.heading}
                </h2>

                <p>{item.description}</p>

                <p>
                  <strong>Rating:</strong> {item.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedCard;