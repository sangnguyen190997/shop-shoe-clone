import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Videobg from "./Components/Videobg";
import { Route, Routes } from "react-router-dom";
import publicRoutes from "./Routes/routes";
import DefaultLayout from "./Layouts";

function App() {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Component = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <DefaultLayout>
                <Component />
              </DefaultLayout>
            }
          ></Route>
        );
      })}
    </Routes>
  );
}

export default App;
