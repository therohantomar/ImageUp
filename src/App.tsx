import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./components/Container";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./utils/store/store";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={BrowserRouter} />
      </Provider>
    </>
  );
}

export default App;
