import { Col, Container, Nav, Navbar, NavbarBrand, Row } from "react-bootstrap";
import styles from './styles.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Fade, Modal } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

export default function NavbarMobile(){

    const [open, setOpen] = React.useState(false)


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(

    <div id={styles.navbarMobile}>
        <Container>

        <Row>

        <Col>
            <img width="90%" src="logo.png" alt=""/>
        </Col>

        <Col>
            <Button onClick={handleOpen} className={styles.botaoMenu}>
               MENU <ExpandMoreIcon className={styles.menu} />
            </Button>


        </Col>

        </Row>


        <Modal
        className={styles.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
                
        <Fade in={open}>


        <div className={styles.links} style={{ textAlign: 'center', paddingTop: '6rem', display: 'flex', flexDirection: 'column', padding: '1rem', margin: '1rem'}}>
            <Button  fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo' ,background: 'linear-gradient(#07daff, #00cd88)' }}>Qual é o seu business?</Button>
            <br />
            <Button fullWidth  style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(#07daff, #00cd88)' }}>O que fazemos?</Button>
            <br />
            <Button  fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(#07daff, #00cd88)' }}>Educação</Button>
            <br />
            <Button fullWidth style={{ textDecoration: 'none', color: '#fff', padding: '1rem', fontWeight: 'bold', fontFamily: 'Exo', background: 'linear-gradient(#07daff, #00cd88)' }}>Blog</Button>


        </div>

        </Fade>
    



        </Modal>

        </Container>
       

    </div>

     


    )
}