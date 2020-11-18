import React, { Component, Suspense, lazy  } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import Footer from './shared/Footer';
import { withTranslation } from "react-i18next";
import User from './user-type/user';
import Admin from './user-type/admin';
import Spinner from "../app/shared/Spinner";
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const SuperUser = lazy(() => import("./user-type/super-user"));

class App extends Component {
  state = {
    user: "SuperUser"
  }
  componentDidMount() {
    this.onRouteChanged();
  }
  

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const { i18n } = this.props;
    if (this.props.location.pathname === '/rtl') {
      document.querySelector('body').classList.add('rtl'); 
      i18n.changeLanguage('ar');
    } else {
      document.querySelector('body').classList.remove('rtl');
      i18n.changeLanguage('en');
    }
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        this.setState({
          isFullPageLayout: true
        })
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        this.setState({
          isFullPageLayout: false
        })
       // document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }
  render () {
    let navbarComponent = !this.state.isFullPageLayout ? <Navbar/> : '';
    
    return (
    <Provider store={store}>
      <div className="container-scroller">
        { navbarComponent }
        
        <Suspense fallback={<Spinner />}>
        <BrowserRouter>
        <Switch>
        
        <Route path='/rate-my-fitness/super-user' component={SuperUser} />
        <Route path='/rate-my-fitness/admin' component={Admin} />
        <Route path='/rate-my-fitness/user' component={User} />
        </Switch>
        </BrowserRouter>
        </Suspense>
        
      </div>
    </Provider>
    );
  }

}

export default withTranslation()(withRouter(App));