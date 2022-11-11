import { createRoot } from "react-dom/client";
import App from "./component/App";

const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(<App />);
