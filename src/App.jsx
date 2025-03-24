import { useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter/Router/Router";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <HelmetProvider>
     <AppRouter />
     </HelmetProvider>
    </>
  );
}

export default App;
