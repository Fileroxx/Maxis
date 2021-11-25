import { Button } from '@material-ui/core'
import { Col, Container, Row } from 'react-bootstrap'
import styles from './styles.module.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link'


export default function NavbarBlog(){
    return(
        <div id={styles.navbarblog}>
        <Container>

        <Row>
                <Col xs={12} lg={6}>
                    <div className={styles.logo}>
                    <Link href="/"><img style={{cursor: 'pointer'}} src="logo.png" alt=""/></Link> 
                    </div>
</Col>
            
                <Col xs={12} lg={6}>
                    <div className={styles.links}>

                   <Link href="/blog">
                     <Button>Blog</Button>
                   </Link> 
                    

                    </div>
                </Col>
            </Row>

        </Container>

        </div>
    )
}