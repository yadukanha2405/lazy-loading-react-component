import "./styles.css";
import { Suspense, lazy } from "react";
import Home from "./Home";

const About = lazy(() => import("./About"));
export default function App() {
  return (
    <div className="App">
      <Home />
      <Suspense
        fallback={
          <img
            src="https://c.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif"
            width="80"
            height="80"
          />
        }
      >
        <About />
      </Suspense>
    </div>
  );
}
