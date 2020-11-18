import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";


class Sidebar extends Component {
  state = {
    userImage: ""
  };

  toggleMenuState=(menuState)=> {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false ,
          userImage: "face8"
        });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
      this.setState({ userImage: "face8"})
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/advanced-ui", state: "advancedUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" }
    ];

    dropdownPaths.forEach(obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ 
          [obj.state]: true,
          userImage: "face8"
        });
        
      }
    });
  }

  render() {
    let image={
      "face8": require("../../assets/images/faces/face8.jpg"),
      "face7": require("../../assets/images/faces/face7.jpg"),
      "face6": require("../../assets/images/faces/face6.jpg"),
      "face5": require("../../assets/images/faces/face5.jpg"),
      "face4": require("../../assets/images/faces/face4.jpg"),
      "face3": require("../../assets/images/faces/face3.jpg"),
      "face2": require("../../assets/images/faces/face2.jpg"),
      "face1": require("../../assets/images/faces/face1.jpg"),
      
    }
    var user="";
    
    switch (this.state.userImage) {
      case "face8":
        console.log("Entered face8");
        user="face8"
        break;
      case "face7":
        user="face7"
          break;
    
      default:
        
        
    }
    console.log(user);
    console.log(this.props.props.user.items[0].name);
    console.log(this.props.props.user.items[0].image);
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item navbar-brand-mini-wrapper">
            <Link
              className="nav-link navbar-brand brand-logo-mini"
              to="/dashboard"
            >
              <img
                src={require("../../assets/images/logo-mini.svg")}
                alt="logo"
              />
            </Link>
          </li>
          <li className="nav-item nav-profile">
            <a
              href="!#"
              className="nav-link"
              onClick={evt => evt.preventDefault()}
            >
              <div className="profile-image">
                <img
                  className="img-xs rounded-circle"
                  src={image[this.props.props.user.items[0].image]}
                  alt="profile"
                />
                <div className="dot-indicator bg-success"></div>
              </div>
              <div className="text-wrapper">
                <p className="profile-name"></p>
                <p className="designation">
                  <Trans>{this.props.props.user.items[0].name}</Trans>
                </p>
              </div>
              <div className="icon-container">
                <i className="icon-bubbles"></i>
                <div className="dot-indicator bg-danger"></div>
              </div>
            </a>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Dashboard</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to={this.props.props.url+"/dashboard"}>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
              <i className="icon-screen-desktop menu-icon"></i>
            </Link>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/basic-ui") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.basicUiMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("basicUiMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Basic UI Elements</Trans>
              </span>
              <i className="icon-layers menu-icon"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/basic-ui/buttons")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/basic-ui/buttons"}
                    >
                      <Trans>Buttons</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/basic-ui/dropdowns")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/basic-ui/dropdowns"}
                    >
                      <Trans>Dropdowns</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/basic-ui/typography")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/basic-ui/typography"}
                    >
                      <Trans>Typography</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/form-elements")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.formElementsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("formElementsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Form Elements</Trans>
              </span>
              <i className="icon-book-open menu-icon"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/form-elements/basic-elements")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/form-elements/basic-elements"}
                    >
                      <Trans>Basic Elements</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Tables</Trans>
              </span>
              <i className="icon-grid menu-icon"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/tables/basic-table")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/tables/basic-table"}
                    >
                      <Trans>Basic Table</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/icons") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.iconsMenuOpen ? "nav-link menu-expanded" : "nav-link"
              }
              onClick={() => this.toggleMenuState("iconsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Icons</Trans>
              </span>
              <i className="icon-globe menu-icon"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/icons/mdi")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/icons/mdi"}
                    >
                      Material
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Charts</Trans>
              </span>
              <i className="icon-chart menu-icon"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/charts/chart-js")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/charts/chart-js"}
                    >
                      Chart Js
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">
              <Trans>Extra Pages</Trans>
            </span>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/user-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>User Pages</Trans>
              </span>
              <i className="icon-disc menu-icon"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/user-pages/login-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to="/user-pages/login-1"
                    >
                      <Trans>Login</Trans>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive("/user-pages/register-1")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/user-pages/register-1"}
                    >
                      <Trans>Register</Trans>
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive(this.props.props.url+"/error-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="menu-title">
                <Trans>Error Pages</Trans>
              </span>
              <i className="icon-flag menu-icon"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/error-pages/error-404")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/error-pages/error-404"}
                    >
                      404
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      className={
                        this.isPathActive(this.props.props.url+"/error-pages/error-500")
                          ? "nav-link active"
                          : "nav-link"
                      }
                      to={this.props.props.url+"/error-pages/error-500"}
                    >
                      500
                    </Link>
                  </li>
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/stellar-react-free/documentation/documentation.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="menu-title">
                <Trans>Documentation</Trans>
              </span>
              <i className="icon-folder-alt menu-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach(el => {
      el.addEventListener("mouseover", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
          // if (el.querySelector('.ReactCollapse--collapse')) {
          //   el.querySelector('.ReactCollapse--collapse').setAttribute('style', 'height: auto; overflow: initial;');
          // }
        }
      });
      el.addEventListener("mouseout", function() {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
          // if (el.querySelector('.ReactCollapse--collapse')) {
          //   el.querySelector('.ReactCollapse--collapse').setAttribute('style', 'height: 0; overflow: hidden;');
          // }
        }
      });
    });
  }
}

export default withRouter(Sidebar);
