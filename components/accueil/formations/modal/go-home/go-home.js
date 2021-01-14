const Home = ({onClick}) =>{
    return(
        <>
        <div className="modal-close">         
                <div className = "close-left">
                    <a className ="close-logo"  onClick = {onClick}>
                        Agrinnov
                    </a>
                    
 
                </div >
                
                <div className ="close-right" onClick = {onClick}>
                    <a className ="close-btn">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </a>
                </div>
            </div>
            <style jsx>
                {`
                    .modal-close{
                        display:flex;
                        width:100%;
                        justify-content : center;
                            align-items :  center;
                            @media (min-width : 310px){
                                .close-right{
                                    bottom : 5px;}
                                }
                            @media (min-width : 360px ){
                        
                                .close-right{
                                    bottom : 5px;}
                            }
                            
                            @media(min-width : 580px ){
                                .close-right{
                                    bottom : 5px;}
                            }
                            @media (min-width : 748px ){
                                .close-right{
                                    bottom : 5px;}
                            }
                            
                            
                            @media  (min-width : 480px)
                            {.close-right{
                                bottom : 5px;}
                            }
                        
                        
                            @media (min-width : 992px)
                            {.close-right{
                                bottom : 10px;}
                            }
                            
                        .close-left{
                            
                            display : flex;
                            
                            
                            
                            .close-logo{
                                font-weight:600;
                                padding : 3px;
                                margin : 8px 11px;

                                
                            }
                        }
                        .close-right{
                            display : flex;
                            justify-content : center;
                            align-items :  center;
                            position : fixed;
                                
                                z-index : 200;
                                right : 10px;
                                
                                border-radius : 50%; 
                                width : 35px;
                                height : 35px;
                                background-color :  #28a745;
                                color : #fff;
                               
                                
                            
                            .close-btn{
                                display : flex;
                                justify-content : center;
                                align-items : center;
                                font-weight:600;
                                padding : 3px;
                                margin : 8px 11px;
                                 
                            }
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Home