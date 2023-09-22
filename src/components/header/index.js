import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from './index.module.css';
import { Stack } from '../../../config/helper';

const Header = () => {
  const [header, setHeader] = useState([])

  const Query = Stack.ContentType('global_header').Query();

  const getContent = async () => {
    Query
      .where('title', 'Elastic')
      .includeCount()
      .toJSON()
      .find()
      .then(function success(result) {
        setHeader(result[0][0])

      },
        function error(err) {
          return null
        });
  }
  useEffect(() => {
    getContent();
  })


  return (
    <div className={`${styles.nav_head}`}>
      <Navbar expand="lg">
        <Container>
          {header && header.logo && header.logo.url ? <Navbar.Brand href="#"><img className={`${styles.elastic_logo}`} src={header.logo.url} /></Navbar.Brand> : <Navbar.Brand href="#">{header.title}</Navbar.Brand> }
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {header && header.primary_menu_item && header.primary_menu_item.length > 0 && header.primary_menu_item.map((item) => {
                return (
                  <>
                    <NavDropdown className={`${styles.nav_dd}`} title={item.label} id="basic-nav-dropdown">
                      <div className={`${styles.sections}`}>
                        <div className={`nav-col ${styles.nav_col}`}>
                          {item && item.sub_menu && item.sub_menu.length > 0 && item.sub_menu.map((subitem) => {
                            return (<>
                              <Card className={`${styles.card_pm}`} >
                                <Card.Header style={{ border: 'none' }} className={`${styles.card_header}`}>
                                  <Card.Title>{subitem.heading}</Card.Title>
                                  {subitem && subitem.image ?
                                    <div className={`${styles.img_wrapper}`}>
                                      <Card.Img variant="top" src={subitem.image.url} />
                                    </div>
                                    : ''
                                  }
                                </Card.Header>
                                {subitem && subitem.description ?
                                  <Card.Body className={`${styles.card_body}`} >
                                    <Card.Text>
                                      <div className={`${styles.subitem_content}`} dangerouslySetInnerHTML={{ __html: subitem.description }} />
                                    </Card.Text>
                                  </Card.Body>
                                  : ''}
                                {subitem && subitem.link && subitem.link.title ? <Card.Footer className={`${styles.card_footer}`}><Button className={`${styles.tertiary_btn}`} variant="tertiary">{subitem.link.title} →</Button></Card.Footer> : ""}
                              </Card>
                            </>)
                          })}

                        </div>
                      </div>
                    </NavDropdown>
                  </>
                )
              })}
              {header && header.secondary_menu && header.secondary_menu.length > 0 && header.secondary_menu.map((item) => {
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