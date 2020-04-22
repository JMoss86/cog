import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'gatsby';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      active: false,
      activeSubNav: false,
      currentPath: false,
    };
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active });

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle();

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav,
    });

  toggleMenu = value => {
    this.setState({ openMenu: value });
  };

  render() {
    const { openMenu } = this.state;
    const { activeLink } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
            href="/#"
          >
            {config.siteTitle}
          </a>

          <button
            onClick={_ => this.toggleMenu(!openMenu)}
            className={`navbar-toggler  ${openMenu ? '' : 'collapsed'}`}
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={openMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${openMenu ? 'show' : ''}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-center mx-auto">
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'home' ? 'active' : ''
                }`}
              >
                <Link className="nav-link text-uppercase text-expanded" to="/">
                  Home
                </Link>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'about' ? 'active' : ''
                }`}
              >
                <div
                  className={`group ${
                    this.state.activeSubNav === 'about' ? 'active' : ''
                  }`}
                >
                  <div
                    className="nav-link text-uppercase text-expanded"
                    onClick={() => this.toggleSubNav('about')}
                  >
                    About
                    <div className="groupLinks">
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink"
                        to="/about-us"
                      >
                        About Us
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink"
                        to="/what-we-believe"
                      >
                        What We Believe
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink"
                        to="/vision"
                      >
                        Vision
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'staff' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/staff"
                >
                  Staff
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'contact' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'media' ? 'active' : ''
                }`}
              >
                <div
                  className={`group ${
                    this.state.activeSubNav === 'media' ? 'active' : ''
                  }`}
                >
                  <div
                    className="nav-link text-uppercase text-expanded"
                    onClick={() => this.toggleSubNav('media')}
                  >
                    Media
                    <div className="groupLinks">
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink"
                        to="/past-sermons"
                      >
                        Past Sermons
                      </Link>
                      <Link
                        className="nav-link text-uppercase text-expanded groupLink"
                        to="/little-ones-lessons"
                      >
                        Little Ones Lessons
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'schedule' ? 'active' : ''
                }`}
              >
                <Link
                  className="nav-link text-uppercase text-expanded"
                  to="/schedule"
                >
                  Schedule
                </Link>
              </li>

              <li
                className={`nav-item px-lg-4 ${
                  activeLink === 'donate' ? 'active' : ''
                }`}
              >
                <a
                  className="nav-link text-uppercase text-expanded"
                  href="https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=xlhEupKya-cFbVEceRt9l8L-RvZ4krBrBvTZEhS6vjsJyir-IgWnh3ivcTtNKlEime2gH0Cd5LQZ8B2ZqWVySZmMFEZFlLXD1ahgWE2eI_Yz6hsGpvyiEOPmNmtiXouRnSlrzooYfiYge1FVVF0rt9vU6Fq-i6kV_6ABvLxueFM=&ver=3"
                  target="_blank"
                >
                  Give
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
