import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
  const [details, setDetails] = useState();

  const detailhandeler = () => {
    setDetails(details);
  };
  const data = {
    allData: [],
    details: details,
    detail: detailhandeler,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default ContextProvider;
