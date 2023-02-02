import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Componente1 from "./componentes/Componente1";
import Componente2 from "./componentes/Componente2";
import Componente3 from "./componentes/Componente3";
import Card from "./componentes/Card";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Card titulo="Fundamentos do React">
      <Componente1 />
    </Card>
    <Componente2 name="jose" tool="IDE" />
    <Componente3 parcela1={9} parcela2={9} />
  </StrictMode>
);
