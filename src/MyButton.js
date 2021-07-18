import React from "react";

function MyButton(props) {
  return (
    <>
      <button type="button" id={props.id}>
        {props.value}
      </button>
    </>
  );
}

export default MyButton;
