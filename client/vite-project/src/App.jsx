import {BrowserRouter, Routes, Route} from "react-router-dom";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='App'>
        <Routes>

          <Route path="/" element={<Books />} />
          <Route path="/add" element={ <Add /> } />
          <Route path="/update/:id" element={<Update /> } />

        </Routes>
      </div>
        </BrowserRouter>
        </>
    
  );
}

export default App;
