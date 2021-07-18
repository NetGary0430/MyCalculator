import React from "react";

function Display(props) {
  return (
    <>
      <input type="text" id={props.id}>
        {props.value}
      </input>
    </>
  );
}

export default Display;
