import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import User from "./Pages/User";
import { createStore } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./Store/Reducers/user";

const store = createStore(usersReducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
