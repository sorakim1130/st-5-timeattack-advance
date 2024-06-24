import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {QueryProvider} from "./QueryClientProvier.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryProvider>
    <App />
  </QueryProvider>
);
