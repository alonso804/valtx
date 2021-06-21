import React from "react";
import { Route, Redirect } from "react-router-dom";
import { StorageService } from "../../services/StorageService";

export const AuthRoute = ({ ...rest }) => {
  return StorageService.isLoggedIn() ? (
    <Route {...rest} />
  ) : (
    <Redirect to="/signin" />
  );
};

export const LogRoute = ({ ...rest }) => {
  return StorageService.isLoggedIn() ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest} />
  );
};
