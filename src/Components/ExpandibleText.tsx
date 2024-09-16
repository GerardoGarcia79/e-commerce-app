import { useState } from "react";

interface Props {
  text: string;
  maxLength: number;
  font?: string;
}

const ExpandibleText = ({ text, maxLength, font }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = isExpanded ? text : text.substring(0, maxLength) + "...";

  return (
    <h3 className={`mb-2 ${font ? "font-" + font : ""}`}>
      {text.length > maxLength ? toggleText : text}{" "}
      {text.length > maxLength ? (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-base px-[2px] bg-gray-300 rounded-sm"
        >
          {isExpanded ? "Less" : "More"}
        </button>
      ) : null}
    </h3>
  );
};

export default ExpandibleText;
