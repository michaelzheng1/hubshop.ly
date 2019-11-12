import React from "react";

export default function Section({ component, id }) {
  return (
    <div>
      <div className="section-content" id={id}>
        { component }
      </div>
    </div>
  );
}