import PropTypes from "prop-types";

export const Summary = ({ category, icon, score }) => {
  const Bgcolor =
    category === "Reaction"
      ? "hsl(0, 100%, 67.1%)"
      : category === "Memory"
      ? "hsl(38.8, 100%, 56.1%) "
      : category === "Verbal"
      ? "hsl(166, 100%, 37.1%)"
      : category === "Visual"
      ? "hsl(233.8, 85.2%, 44.9%) "
      : "";

  const Textcolor =
    category === "Reaction"
      ? "hsla(0, 100%, 67%)"
      : category === "Memory"
      ? "hsla(39, 100%, 56%)"
      : category === "Verbal"
      ? "hsla(166, 100%, 37%)"
      : category === "Visual"
      ? "hsla(234, 85%, 45%) "
      : "";

  return (
    <div
      className={`flex flex-row w-full   justify-between p-4 rounded-[0.75rem]  `}
      style={{
		background: `linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),  ${Bgcolor}`
      }}
    >
      <div>
        <picture className="inline-block align-middle w-5 h-5">
          <img className="w-full h-full" src={icon} alt={`${category} img`} />
        </picture>
        <h3
          className={`inline-block ms-4 font-semibold`}
          style={{ color: Textcolor }}
        >
          {category}
        </h3>
      </div>

      <div>
        <p
          className=" font-semibold dark-gray-blue"
          alt={`your score ${score} in ${category}`}
        >
          {score}{" "}
          <span className=" opacity-50" alt={`Out of 100`}>
            {" "}
            / 100
          </span>
        </p>
      </div>
    </div>
  );
};

Summary.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  score: PropTypes.number,
};
