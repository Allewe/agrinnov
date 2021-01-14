import { MDBAnimation, MDBCol, MDBContainer, MDBMask, MDBRow, MDBView } from 'mdbreact'
import styles from './presentation.module.scss'

export default function Presentation(){
        return(
            <>
            <MDBView src="/images/introduction.jpg">
                    <MDBMask className="flex-center flex-column text-white">
                    <h3 className="h3 proj-title">Presentation</h3>
            <MDBContainer>
                <MDBRow>
                
                    
                    <MDBCol md="6" xl="6">
                    <p className ="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla
                        </p>
                    </MDBCol>
                    <MDBCol md="6" xl="6" >
                        <p className ="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                    molestiae, quisquam iste, maiores. Nulla
                        </p>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            </MDBMask>
            </MDBView>
         </>   
        )
    }