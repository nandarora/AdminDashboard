import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { connect } from 'react-redux';

class Navbar extends Component {
  
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    console.log(this.props);
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="icon-menu"></span>
          </button>
        </div>
        
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <h5 className="mb-0 font-weight-medium d-none d-xl-flex">
            <Trans>Welcome to Rate My Fitness</Trans>
          </h5>
          <ul className="navbar-nav navbar-nav-right">
            <form className="search-form d-none d-lg-block" action="!#" onSubmit={evt => evt.preventDefault()}>
              <i className="icon-magnifier"></i>
              <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
            </form>
            
            
            <li className="nav-item message-dropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="icon-speech"></i>
                  <span className="count-number bg-danger">1</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 mb-0"><Trans>
                    Notification
                  </Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Admin sent you a message
                      </Trans></h6>
                      <p className="text-gray mb-0">
                        1 <Trans>
                          Minutes ago
                        </Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>
                    1 new message
                  </Trans></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            
            <li className="nav-item message-dropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <Trans>
                    Select User
                  </Trans>
                  
                </Dropdown.Toggle>

                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 mb-0"><Trans>
                    User Type:
                  </Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="/rate-my-fitness/super-user">
                    <div className="preview-thumbnail">
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Super User
                      </Trans></h6>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="/rate-my-fitness/admin">
                    <div className="preview-thumbnail">
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Admin
                      </Trans></h6>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" href="/rate-my-fitness/user">
                    <div className="preview-thumbnail">
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        User
                      </Trans></h6>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            


            <li className="nav-item nav-profile d-none d-sm-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link">
                  <div className="nav-profile-img">
                    <img src={require("../../assets/images/faces/face8.jpg")} alt="user"/>
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
    <p className="mb-1 text-black"><Trans>{this.props.user.items[0].name}</Trans></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                  <div class="dropdown-header text-center">
                    <img class="img-md rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="user"/>
                    <p class="mb-1 mt-3">Henry Klein</p>
                    <p class="font-weight-light text-muted mb-0"><Trans>kleinhenry@gmail.com</Trans></p>
                  </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-user text-primary mr-2"></i> <Trans>My Profile</Trans> <span class="badge badge-pill badge-danger ml-2">1</span>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-speech text-primary mr-2"></i> <Trans>Messages</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-energy text-primary mr-2"></i> <Trans>Activity</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-question text-primary mr-2"></i> <Trans>FAQ</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-power text-primary mr-2"></i><Trans>Sign Out</Trans>
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

const mapstatetoprops =(state) => {
  return{
      user: state.SuperUser,
      newUser: state.SuperUser.item
      
  }

}

export default connect(mapstatetoprops)(Navbar);
