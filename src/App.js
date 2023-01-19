// import { Home } from "./components/home/home";
import "./App.css";
import dataBase from "./db.json";
import { Form } from "./components/form/form";
import { UserData } from "./components/userData/userData";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import { db } from "./firebase/firebase";
import { collection, addDoc, getDocs, query } from "firebase/firestore";

const App = () => {
  const [userInformation, setUserInformation] = useState([]);

  const data = dataBase.items;

  const postData = async (userInfo) => {
    await addDoc(collection(db, "userInfo"), userInfo);
  };

  const getData = async () => {
    const user = await getDocs(query(collection(db, "userInfo")));
    const info = [];
    user.forEach((doc) => {
      info.push({ ...doc.data(), id: doc.id });
    });
    setUserInformation(info);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          index
          element={<Form data={data} getData={getData} postData={postData} />}
        />
        <Route
          path="/userInformation"
          element={<UserData userInformation={userInformation} />}
        />
      </Route>
    )
  );

  return (
    <div className="app">
      <h1>FORMULARIO</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
