import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { store } from "./Redux/configStore";
import HomeTemplates from "./Templates/HomeTemplates";
import Profile from "./Pages/Profile/Profile";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Management from "./Pages/Management/Management";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplates />}>
        <Route index element={<Home />}></Route>
        <Route path="list" element={<List />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="management" element={<Management />}></Route>
        <Route path="booking" element={<Booking />}></Route>
        <Route path="*" element={<Navigate to={""} />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </Provider>
);



