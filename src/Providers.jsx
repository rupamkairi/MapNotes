import React, { Fragment } from "react";
import { Provider as StoreProvider } from "react-redux";
import store from "./store";
import Navigation from "./Navigation";

export default function Providers({ children }) {
  return (
    <Fragment>
      <StoreProvider store={store}>
        <Navigation>
          <Fragment>{children}</Fragment>
        </Navigation>
      </StoreProvider>
    </Fragment>
  );
}
