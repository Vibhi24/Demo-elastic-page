import React, { useState, useEffect } from 'react'
import Contentstack from 'contentstack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './index.module.css';

<script src="https://cdn.jsdelivr.net/npm/contentstack@latest/dist/web/contentstack.min.js"></script>

const API_KEY = 'blt2260b25d78f02c35';
const DELIVERY_TOKEN = 'cs58fb72625764c334e0fd165d'
const CONTENT_TYPE = 'global_header'

const Header = () => {
  const [header, setHeader] = useState([])

  const Stack = Contentstack.Stack({ "api_key": API_KEY, "delivery_token": DELIVERY_TOKEN, "environment": "development" });
  const Query = Stack.ContentType(CONTENT_TYPE).Query();

  const getContent = async () => {
    Query
      .where("title")
      .includeCount()
      .toJSON()
      .find()
      .then(function success(result) {
        setHeader(result[0][0])

      },
        function error(err) {
        });
  }
  useEffect(() => {
    getContent();
  })


  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">{header.title}</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {header && header.primary_menu_item && header.primary_menu_item.map((item) => {
                return (
                  <>
                    <NavDropdown title={item.label} id="basic-nav-dropdown">
                      <div className={`${styles.dropdown_bg_cont}`}>
                        <div className={`${styles.sections}`}>
                          <div className={`${styles.section1}`}>
                            <div className={`nav-col ${styles.nav_col}`}>
                              {item && item.sub_menu && item.sub_menu.map((subitem) => {
                                return (<>
                                  <Card style={{ width: '20rem', border: 'none' }}>
                                    <Card.Header style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg)' }} className={`${styles.card_header}`}>
                                      <Card.Title>{subitem.heading}</Card.Title>
                                      {subitem && subitem.image ?
                                        <div className={`${styles.img_wrapper}`}>
                                          <Card.Img variant="top" src={subitem.image.url} />
                                        </div>
                                        : ''
                                      }

                                    </Card.Header>

                                    <Card.Body style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg)' }}>
                                      <Card.Text>
                                      <div className={`${styles.subitem_content}`} dangerouslySetInnerHTML={{__html: subitem.description}} />
                                        </Card.Text>
                                    </Card.Body>

                                    {subitem && subitem.link && subitem.link.title ? <Card.Footer style={{ border: 'none', backgroundColor: 'var(--bs-card-cap-bg);' }}><Button className={`${styles.tertiary_btn}`} variant="tertiary">{subitem.link.title} →</Button></Card.Footer> : ""}

                                  </Card>
                                </>)
                              })}

                            </div>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>
                  </>
                )
              })}
              {header && header.secondary_menu && header.secondary_menu.map((item) => {
                return (
                  <>
                    <Nav.Link href={item.link.url}>{item.title}</Nav.Link>
                  </>
                )
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header