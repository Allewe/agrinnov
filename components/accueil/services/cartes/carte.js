import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import Link from "next/link";
import styles from './carte.module.scss'
import PropTypes from 'prop-types'


Carte.propType ={
    link : PropTypes.string.isRequired,
    source : PropTypes.string.isRequired
}

export default function Carte({link, source, titre, texte}){
     return(
        <Link href ={link}><a>  
            <MDBCard style={{height: '22rem'}}>
                <MDBCardImage top   className="img-fluid" src={source} hover zoom waves/>
                <MDBCardBody>
                    <MDBCardTitle>Service</MDBCardTitle>
                    <MDBCardText> Decouvrer les services agrinnov</MDBCardText>
                    
                </MDBCardBody>
            </MDBCard>
        </a></Link>  
              
        )
    }
