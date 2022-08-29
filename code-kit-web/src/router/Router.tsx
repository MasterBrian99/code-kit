import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import MainScreen from "../screens/MainScreen";
import MenuScreen from "../screens/MenuScreen";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<MenuScreen />} />
          <Route path="about" element={<MainScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
