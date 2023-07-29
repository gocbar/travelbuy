import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <ChakraProvider>
        <Router>
          <Navbar />
        </Router>
      </ChakraProvider>
    </div>
  );
};

export default App;
