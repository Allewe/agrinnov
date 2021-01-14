import { useState } from "react"

export default function Slide({content}){

const [width, setWidth] =useState(null);

    return(
        
            <div className ="prod-slide">
            
                <img src ={content}/>
            
            <style jsx>
                {`
                    .prod-slide{
                        width : 100%;
                        heigth:100%;
                        & > img{
                            width:100%;
                            heigth:100%;
                            

                            @media screen and (min-width : 310px){
                                height: 50vh;
                            }
                            
                            @media screen and (min-width : 360px ){
        
                                height:60vh;
                            }
                            
                            @media screen and (min-width : 580px ){
        
                                height:70vh;
                            }
                            @media screen and (min-width : 748px ){
        
                                height:70vh;
                            }
                            @media screen and (min-width : 993px ){
        
                                height:70vh ;
                            }
                        }
                    }
                          `}
                </style>
            </div>

    
    )
}