import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./layouts/RootLayout";
import Gallery from "./pages/Gallery";
import Collateral from "./pages/Collateral";
import Digital from "./pages/Digital";
import Print from "./pages/Print";
import Social from "./pages/Social";
import Web from "./pages/Web";

//react router set up
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="collateral" element={<Collateral />} />
      <Route path="digital" element={<Digital />} />
      <Route path="print" element={<Print />} />
      <Route path="social" element={<Social />} />
      <Route path="web" element={<Web />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
