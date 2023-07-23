import { Routes, Route, Navigate } from "react-router-dom";
import Navbars from "./Layouts/Navbars";
import Footer from "./Layouts/footer";
import routes from "./routes";

function App() {
  return (
    <>
      <div className="fixed left-2/4 z-10 mx-auto -translate-x-2/4 p-4 navbar">
        <Navbars routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
