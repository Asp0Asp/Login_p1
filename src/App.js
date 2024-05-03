// components/ProtectedRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "./AuthContext"; 

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )}
  </AuthConsumer>
);

export default ProtectedRoute;
