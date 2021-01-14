import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import React from "react"
import Card from "../carte/card"
import Body from "./body/body"
import ModCard from "./modal-card/card"
import SearchBar from "./header/searchbar/searchbar"
import Link from 'next/link'
import Header from "./header/header"

const Modal = ({data, handleClick})=>{
    
    return(
        <>
            <div className =" mod-container" id = "formation">
                
            
                <div className = "mod-block">
                    
                    <Header onClick ={handleClick} data = {data}/> 
                    <MDBContainer>
                        
                        <MDBRow>
                        <MDBCol>
                            
                            <Body>

                    {

                        data.map(({title, slug, image, duration, categories, degree})=>(
                            
                               <ModCard src ={image} degree = {degree} duration = {duration} title = {title} link = {slug} categories = {categories}/>
                            
                        ))
                    }

                            </Body>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>

            <style jsx>
                {`
                .mod-container{
                    display : flex;
                    background : rgba(0, 0, 0, 0.25);
                    align-items : center;
                    justify-content : center;
                    left : 0;
                    position : fixed;
                    top : 0;
                    z-index: 10000;
                    width : 100vw;
                    height : 100vh;
                }
                .mod-block{
                    height : 100vh;
                    width : 100vw;
                    background: #fff;
                    
                    box-shadow : 0 0 1em rgba(0,0,0, 0.125);
                    overflow-x: hidden;
                    overflow-y: auto;

                   
                    
                }
                `}
            </style>
            <style global>
                {`
                body{
                    overflow : hidden;
                }
                `}
            </style>
        </>
    )
}

export default Modal