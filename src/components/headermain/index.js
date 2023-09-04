import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './index.module.css'

const Headermain = () => {
  return (
    <div className={`${styles.blue_bg}`}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Elastic</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Platform" id="basic-nav-dropdown">
                <div className={`${styles.dropdown_bg_cont}`}>
                  <div className={`${styles.sections}`}>
                    <div className={`${styles.section1}`}>
                      <div className={`nav-col ${styles.nav_col}`}>
                        <Card style={{ width: '20rem', border: 'none' }}>
                          <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg)' }} className={`${styles.card_header}`}>
                            <Card.Title>Elasticsearch Platform</Card.Title>
                            <div className={`${styles.img_wrapper}`}>
                              <Card.Img variant="top" src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt01e854ccc5a74261/631fa69119c64564c313cc95/blog-apm-logs-thumbnail-720x420.png" />
                            </div>
                          </Card.Header>
                          <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg)' }}>
                            <Card.Text>
                              <p className={`${styles.para}`}>Observability, security, and search solutions — powered by the Elasticsearch Platform.
                              </p></Card.Text>
                          </Card.Body>
                          <Card.Footer style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">Elastic overview →</Button></Card.Footer>
                        </Card>
                      </div>
                      <div className={`nav-col ${styles.nav_col}`}>
                        <Card style={{ width: '20rem', border: 'none' }}>
                          <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                            <Card.Title>ELK Stack</Card.Title>
                          </Card.Header>
                          <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                            <Card.Text>
                              <p className={`${styles.para}`}>Search and analytics, data ingestion, and visualization – all at your fingertips</p>
                              <ul className={`${styles.elk_links}`}>
                                <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Kibana</a></li>
                                <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Elasticsearch</a></li>
                                <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Integrations</a></li>
                              </ul>
                            </Card.Text>
                          </Card.Body>
                          <Card.Footer style={{ border: 'none', marginTop: '2rem', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">ELK Stack overview →</Button></Card.Footer>
                        </Card>
                      </div>
                    </div>
                    <div className={`${styles.section2}`}>
                      <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Header style={{ border: 'none', backgroundColor: 'white' }}>
                          <Card.Title>Elastic Cloud</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none' }}>
                          <Card.Text>
                            <p className={`${styles.para}`}>Find answers that matter with Elastic on your preferred cloud provider.</p>
                            <ul className={`${styles.elk_links}`}>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Cloud Overview →</a></li>
                              <NavDropdown.Divider />
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Partners →</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Contact Sales →</a></li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown title="Solutions" id="basic-nav-dropdown">
                {/* <div className={`${styles.dropdown_bg_cont}`}> */}
                  <div style={{ marginLeft:'-2rem' }} className={`${styles.section}`}>
                    <div className={`nav-col ${styles.nav_col}`}>
                      <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Title>Observability</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Text>
                            <p className={`${styles.para}`}>Unify app and infrastructure visibility to proactively resolve issues.</p>
                            <ul className={`${styles.elk_links}`}>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Log Monitering</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Application Performance Monitering</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Infrastructure Monitering</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Synthetic Monitering</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Real User Monitering</a></li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none', marginTop: '2rem', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">Observability overview →</Button></Card.Footer>
                      </Card>
                    </div>
                    <div className={`nav-col ${styles.nav_col}`}>
                      <Card style={{ width: '20rem', border: 'none', padding: '0rem 1rem' }}>
                        <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Title>Security</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Text>
                            <p className={`${styles.para}`}>Protect, investigate, and respond to cyber threats quickly and at scale</p>
                            <ul className={`${styles.elk_links}`}>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Continuous Monitering</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Threat hunting</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Investigation and incident response</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Automated Threat Protection</a></li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none', marginTop: '2rem', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">Security overview →</Button></Card.Footer>
                      </Card>
                    </div>
                    <div className={`nav-col ${styles.nav_col}`}>
                      <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Title>Search</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Text>
                            <p className={`${styles.para}`}>Accelerate search results across any cloud and increase personalization</p>
                            <ul className={`${styles.elk_links}`}>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Generative AI</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Search Applications</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Ecommerce</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Website</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Workplace Search</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Customer Support</a></li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none', marginTop: '2rem', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">Search overview →</Button></Card.Footer>
                      </Card>
                    </div>
                    <div className={`nav-col ${styles.nav_col}`}>
                      <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Title>By Industry</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}>
                          <Card.Text>
                            <ul className={`${styles.elk_links}`}>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Public Sector</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Financial Services</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Telecommunications</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Healthcare</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Teechnology</a></li>
                              <li className={`${styles.link}`}><a className={`dropdown-link ${styles.dd_link}`} href=''>Retail and Ecommerce</a></li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{ border: 'none', marginTop: '2rem', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">View All Industries →</Button></Card.Footer>
                      </Card>
                    </div>
                  </div>
                {/* </div> */}
              </NavDropdown>
              <NavDropdown title="Customers" id="basic-nav-dropdown">
              </NavDropdown>
              <NavDropdown title="Resources" id="basic-nav-dropdown">
              </NavDropdown>
              <Nav.Link href="#">Pricing</Nav.Link>
              <Nav.Link href="#">Docs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Headermain