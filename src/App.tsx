import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Citas from "./components/Citas";
import AgregarCitas from "./components/AgregarCitas";
import Servicios from "./components/Servicios";
import ErrorPage from "./components/ErrorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Citas />} />
          <Route path="blogs" element={<AgregarCitas />} />
          <Route path="contact" element={<Servicios />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
