import "./App.css";
import Home from "./Home";
import Layout from "./Layout";
import { StateContext } from "./StateContext";
import { Toaster } from "reach-hot-toast";

const App = () => {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Home />
      </Layout>
    </StateContext>
  );
};

export default App;
