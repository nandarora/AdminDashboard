import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));
const Typography = lazy(() => import("./basic-ui/Typography"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"))

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

class AppRoutes extends Component {
  render() {
    console.log("Entered AppRoutes..");
    console.log(this.props.props.url);
    
    return (
      <div>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
        <Switch>
          <Route exact path={this.props.props.url + "/dashboard"} component={() => <Dashboard props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/basic-ui/buttons"} component={() => <Buttons props={this.props.props}/>} />
          <Route exact path={this.props.props.url + "/basic-ui/dropdowns"} component={() => <Dropdowns props={this.props.props}/>} />
          <Route exact path={this.props.props.url + "/basic-ui/typography"} component={() => <Typography props={this.props.props}/>} />

          <Route
            exact path={this.props.props.url + "/form-Elements/basic-elements"}
            component={() => <BasicElements props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/tables/basic-table"} component={() => <BasicTable props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/icons/mdi"} component={() => <Mdi props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/charts/chart-js"} component={() => <ChartJs props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/user-pages/login-1"} component={() => <Login props={this.props.props}/>} />
          <Route exact path={this.props.props.url + "/user-pages/register-1"} component={() => <Register1 props={this.props.props}/>} />

          <Route exact path={this.props.props.url + "/error-pages/error-404"} component={() => <Error404 props={this.props.props}/>} />
          <Route exact path={this.props.props.url + "/error-pages/error-500"} component={() => <Error500 props={this.props.props}/>} />


          
        </Switch>
        </BrowserRouter>
      </Suspense>
      </div>
    );
  }
}

export default AppRoutes;
