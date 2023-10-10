import {useState} from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import { searchContext } from "./utils/searchContext";
import PhotoDetail from "./components/PhotoDetail";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"photos/:id",
        element:<PhotoDetail/>
      },
    ],
  },
]);

function App() {
  const [searchText, setSearchText]=useState("")
  return (
    <>
    <searchContext.Provider value={{searchText,setSearchText}} >
      <Provider store={store}>
        <RouterProvider router={BrowserRouter} />
      </Provider>
      </searchContext.Provider>
    </>
  );
}

export default App;
