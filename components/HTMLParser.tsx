import React from "react";
import parse from "html-react-parser";

const HTMLParser = ({ htmlString }: { htmlString: string }) => {
  return (
    <div className="body-regular text-white-400 flex-col items-center justify-center  px-3 text-left font-inter">
      {parse(htmlString)}
    </div>
  );
};

export default HTMLParser;
