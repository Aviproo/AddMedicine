import { useState } from "react";
import "./App.css";
import AddingForm from "./Components/AddingForm";
import ShowMedicine from "./Components/ShowMedicine";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [medi, setmedi] = useState([]);
  const mediHandeler = (uName, uDescription, uPrice, uQuantity) => {
    setmedi((prevDeta) => {
      return [
        ...prevDeta,
        {
          name: uName,
          description: uDescription,
          price: uPrice,
          quantity: uQuantity,
        },
      ];
    });
  };
  return (
    <ContextProvider>
      <div className="App">
        <AddingForm user={mediHandeler} />
        <ShowMedicine detail={medi} />
      </div>
    </ContextProvider>
  );
}

export default App;
