import React from "react";

import { useStateValue } from "../../store";

const Test = () => {
  const [{ count }, dispatch] = useStateValue();
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: "INCREASE"})}>Increase</button>
    </>
  );
};

export default Test;