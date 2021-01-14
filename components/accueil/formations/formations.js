import Formation from '../../../pages/formations/[formation]'
import styles from './formations.module.scss'
import PropType from 'prop-types'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Card from './carte/card'
import { useState } from 'react'
import Button from './button/button'
import Modal from './modal/modal'



function Formations({more}){
    
    const [active, setActive] = useState(true)
   
    const openModal = () => {return setActive(false)}
    const closeModal = () =>{return setActive(!active)}

   
    return(
        <>
            <div className ="bg-success">
                <MDBContainer >
                    <h3 className = "h3 proj-title text-white">Formation</h3>
                    <MDBRow>
                    
                            {   
                                more.map(({title, description, date, slug, image})=>(
                                <MDBCol className="mt-4" xl = "4" lg = "4" md="6" sm="12">
                                <Card  title ={title} description ={description} date ={date} slug={slug} image= {image} />
                                </MDBCol>
                            ))}
                            
                            {
                                more.length > 2 && <Button handleClick = {openModal} /> 
                            }
                                
                            {
                                !active && <Modal data = {more} handleClick = {closeModal}/>
                            }
                            
                    </MDBRow>
                    
                </MDBContainer> 
            </div>
            <style jsx>
                {`
                   h3{
                       padding-top : 40px;
                       
                   }
                `}    
                </style>
        </>
    )
}

export default Formations