import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return ( 
    <div> 
      <ChakraProvider>
        <Navbar />
      </ChakraProvider> 
     </div>
  );
};

export default App;
