import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/CreatePage";

function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create" element={<Createpage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
