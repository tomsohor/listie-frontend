import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import Home from "./components/Home";
import AddItem from "./components/item/AddItem";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import DeleteItem from "./components/item/DeleteItem";
import DupItem from "./components/item/DupteItem";
import ItemDetails from "./components/item/ItemDetails";
import EditItem from "./components/item/EditItem";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/item/add" element={<AddItem />} />
          <Route path="/item/delete" element={<DeleteItem />} />
          <Route path="/item/duplicate" element={<DupItem />} />
          <Route path="/item/details" element={<ItemDetails />} />
          <Route path="/item/edit" element={<EditItem />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
