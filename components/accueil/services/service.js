import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { Component } from "react";
import Carte from './cartes/carte'




export default function Service (){
    const cardArray= [{
        index: 1,
        link:"services/service-one",
        source:"/images/serviceOne.jpg"
    
    },{
        index:2,
        link: "services/service-two",
        source:"/images/serviceTwo.jpg"
    },{
        index:3,
        link:"services/service-three",
        source:"/images/serviceThree.jpg"
    },{
        index:4,
        link:"services/service-four",
        source:"/images/serviceFour.jpg"
    },
    ];  
    
    
        return(
                        <MDBContainer>
                            <h3 className="h3 proj-title"> Service</h3>
                            <MDBRow className="">
                                {cardArray.map((card)=>
                                    <MDBCol className="mt-4" sm="12"  md="6" lg="3" xl="3">
                                        <Carte key ={card.index} link={card.link} source ={card.source}/>
                                    </MDBCol>
                                )}
                        </MDBRow>
                        </MDBContainer>          
        )
    }
        
    
