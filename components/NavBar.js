/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            COTWGI
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/giving">
                <a className="nav-link">
                  Giving
                </a>
              </Link>
            </li>
            <NavDropdown title="Connection">
              <NavDropdown.Item href="/ministries">
                Ministries
              </NavDropdown.Item>
              <NavDropdown.Item href="/volunteer/new">
                Volunteer Form
              </NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <Link passHref href="/suggestion">
                <a className="nav-link">
                  Suggestions
                </a>
              </Link>
            </li>
            <NavDropdown title="My Forms">
              {/* <NavDropdown.Item href="/givingStatement">
                Giving Statement
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/volunteerform">
                Volunteer Forms
              </NavDropdown.Item>
            </NavDropdown>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </Navbar>
  );
}
