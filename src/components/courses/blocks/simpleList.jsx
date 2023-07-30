import React from "react";
import Helper from '../blocks/helper.jsx'

export default function SimpleList({ heading = "", helper = "", list = [] }) {
  return (
    <>
      {helper !== "" && <Helper text={helper} />}
      <div className="header">{heading}</div>
      <ul>
        {list.map((res, key) => (
          <li key={key}>{res}</li>
        ))}
      </ul>
    </>
  );
}