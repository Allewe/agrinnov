

import React, {useState, useEffect, useRef} from 'react'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Slider from './slider/slider';
import SlideContent from './slider/slide-content/slide-content';
import Arrow from './slider/arrow/arrow'



const arrrayProd = [
    {
        id: 0,
        url :'/images/serviceTwo.jpg'
    },{
        id: 1,
        url :'/images/presentation.jpg'
    },{
      id: 2,
      url :'/images/serviceOne.jpg'
  },{
    id: 3,
    url :'/images/serviceThree.jpg'
  }
  ]




const Production = () =>{

    return(
        <MDBContainer>
            <h3 className = "h3 proj-title">Realisation</h3>
            <MDBRow>
                <MDBCol>
                        <Slider slides ={arrrayProd}/>        
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );

}
export default Production