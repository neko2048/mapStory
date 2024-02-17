import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import AddMap from './pages/AddMap';
import MapDetail from './pages/MapDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/addMap",
    element: <AddMap />,
  },
  {
    path: "/maps/:id",
    element: <MapDetail />,
  }
]);

function App() {
  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;