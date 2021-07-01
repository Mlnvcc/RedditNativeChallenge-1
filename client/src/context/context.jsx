import React, { useState } from "react";

export const LikesContext = React.createContext();

export const LikesStateProvider = props => {
  const [colorLike, setColorLike] = useState(false);
  const [colorDislike, setColorDislike] = useState(false);

  return (
    <LikesContext.Provider value={{ colorLike, setColorLike, colorDislike, setColorDislike }}>
      {props.children}
    </LikesContext.Provider>
  );
};
