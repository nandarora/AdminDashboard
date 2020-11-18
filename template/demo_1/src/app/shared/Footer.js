import React, { Component } from 'react';
import { Trans } from 'react-i18next';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <div className="text-muted text-center text-sm-left"><Trans>
            Rate My Fitness |
          </Trans> 
            <div className="d-sm-inline-block">
              <a href="https://sunverasoftware.com/"  className="pl-1"><Trans>
                Sunvera
              </Trans></a> |
              <a href="https://sunverasoftware.com/"  className="px-1"><Trans>
                Sunvera
              </Trans></a>
            </div>
          </div>
          <div className="mt-1 mt-sm-0 text-center"><Trans>
            Hand-crafted & made with
          </Trans> <i className=" icon-heart text-danger"></i></div>
        </div>
      </footer>
    );
  }
}

export default Footer;