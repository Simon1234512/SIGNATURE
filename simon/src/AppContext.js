import React, { createContext, useState } from "react";
import { generalFieldsData } from "./data/generalFieldsData";
export const EditerContext = createContext();

const AppContext = (props) => {
  const [generalFields, setGeneralFields] = useState(generalFieldsData);
  const [design,setDesign]=useState({})
  const [switching , setSwitching] = useState(false)

  console.log("I m runing ", generalFields);
  return (
    <>
      <EditerContext.Provider value={{ generalFields, setGeneralFields,design,setDesign , switching , setSwitching }}>
        {props.children}
      </EditerContext.Provider>
    </>
  );
};

export default AppContext;
