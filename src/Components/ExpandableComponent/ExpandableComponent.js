import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ExpandableComponent = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="expandable-component ">
      <div
        className="component-header shadow-sm p-3 mb-5 bg-body rounded m-2 d-flex align-items-center justify-content-between"
        style={{ width: "100%", height: 50 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
       <h5 className="m-2 ">{title}</h5> 
        {isExpanded ? (
          <FaChevronUp className="m-3 fs-5  float-right" />
        ) : (
          <FaChevronDown className="m-3 fs-5 float-right" />
        )}
      </div>
      {isExpanded && <div className="component-content">{children}</div>}
    </div>
  );
};

export default ExpandableComponent;
