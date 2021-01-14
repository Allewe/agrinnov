import Link from 'next/link'


export default function CardLayout({children, link}){
    return(
        
            <li className ="list-container">
                    
                        <a className ="link-container">
                            <div className = "card-container">
                                {children}
                            </div>
                        </a>
                    
            
            <style jsx>
                {`
                    .list-container{
                        
                        display : flex;
                        flex-basis : 100%;
                        list-style : none;
                        text-decoration : none;
                        

                        

                        @media (min-width : 480px)
                        {
                            flex-basis : 50%;
                        }

                        @media (min-width : 992px)
                        {
                            flex-basis : 30%;
                        }
                       

                        .link-container{
                            width : 100%;
                            display : flex;
                            text-decoration : none;
                            
                                .card-container{
                                    width : 100%;
                                    padding : 16px;
                                    flex-direction : column;
                                    display : flex;
                                    align-items : flex-start;
                                    text-decoration : none;
                                    &:hover{
                                        background : darken(rgb(250, 17, 0), 5);
                                        
                                    }
                                    
                                    
                                }
                        
                        }
                        
                    }
                `}
            </style>

        </li>
    )
}