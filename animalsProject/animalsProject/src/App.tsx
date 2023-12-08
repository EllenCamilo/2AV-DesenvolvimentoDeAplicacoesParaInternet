// App.tsx
import { ItemProvider } from "./ItemContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
import CadastroPage from "./components/CadastroPage";
import ItemListPage from "./components/ItemListPage";

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CadastroPage />} />
          <Route path="/items" element={<ItemListPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ItemProvider>
  );
};

export default App;
