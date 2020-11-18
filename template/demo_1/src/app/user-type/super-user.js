import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../shared/Sidebar';
import Footer from '../shared/Footer';
import AppRoutes from '../AppRoutes';

class SuperUser extends React.Component {
    state = {
        title: "",
        b: ""
    }


    render() {
        console.log(this.props);
        let sidebarComponent = !this.state.isFullPageLayout ? <Sidebar props={this.props} /> : '';
        let footerComponent = !this.state.isFullPageLayout ? <Footer /> : '';
        return (
            <div className="container-fluid page-body-wrapper">
                {sidebarComponent}
                <div className="main-panel">
                    <div className="content-wrapper">
                        <AppRoutes props={this.props} />
                    </div>
                    {footerComponent}

                </div>
            </div>
        )
    }
}

const mapstatetoprops = (state) => {
    return {
        user: state.SuperUser,
        newUser: state.SuperUser.item,
        url: "/rate-my-fitness/super-user"

    }

}
export default connect(mapstatetoprops)(SuperUser);