import React from "react";
import { Fragment } from "react";
import MainNavigation from "./main-nav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
