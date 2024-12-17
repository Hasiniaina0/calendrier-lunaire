import "./App.css";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom"; // pour gérer les routes dans une application react
import HomePage from "./page/HomePage";
import MonthPage from "./page/MonthPage";
import YearPage from "./page/YearPage";
import fondImage from "./asset/fond.jpg";

function App() {
  return (
    <BrowserRouter basename="/calendrier-lunaire">
      <div
        className="App min-h-screen flex flex-col"
        style={{ backgroundImage: `url(${fondImage})` }}
      >
        {/* Contenu principal avec les routes */}
        <div className="flex-grow flex justify-center">
          <Routes>
            <Route path= "/" element={<HomePage />} />
            <Route path="/jour" element={<HomePage />} />
            <Route path="/mois" element={<MonthPage />} />
            <Route path="/annee" element={<YearPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
