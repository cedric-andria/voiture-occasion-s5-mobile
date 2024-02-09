/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const Login = () => {
  return (
    <>
      <footer className="py-5">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="font-weight-bold ml-1"
                  href=""
                  target="_blank"
                >
                  Cloud S5 P15
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    ETU1869
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    ETU1868
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    ETU1381
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href=""
                    target="_blank"
                  >
                    ETU1897
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Login;
