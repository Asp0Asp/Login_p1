// index.js (ou app.js)
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import ProtectedRoute from "./components/ProtectedRoute"; // Crie esse componente

const app = () => (
  <AuthProvider>
    <Router>
      <GlobalStyle />
      <Switch>
       
       {/* Rotas públicas */}
        <Route path="/login" component={Login} />
        <Route path="/pricing" component={Pricing} />
        
        {/* Rotas protegidas */}
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/settings" component={Settings} />
       
        {/* Rota padrão (pode ser a página inicial) */}
        <Route path="/" component={home} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default app;
