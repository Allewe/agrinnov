export default function Choose({name, children, color, choose}){

    return(
        <>
            <div className ="choose-container">
                <div className ="choose" onClick = {choose}>
                    <span className="choose-icon">
                      {children}  
                    </span>
                    <span className="choose-name">
                        {name}
                    </span>
                </div>
              
            </div>
            <style jsx>
                {`
                    .choose-container{
                        flex-basis : 50%;
                        display : flex;
                        width : 100%;
                        align-items : center;
                        justify-content : center;
                        

                        .choose{
                            margin : 20px;
                            cursor : pointer;
                            display : flex;  
                            justify-content : center;
                            align-items : center;
                            .choose-icon, .choose-name{
                                margin: 8px 0;
                                padding: 2px 1px;
                                font-size:1.1rem;
                                font-weight: 400;
                                display : flex;  
                            justify-content : center;
                            align-items : center;
                            }

                        } 
                    }
                `}
            </style>
            <style jsx>
                {
                    `
                        .choosebar-container{
                            
                            
                        }
                        .choose-icon, .choose-name{
                            color : ${color};
                            
                        }
                        
                    `
                }
            </style>
        </>
    )
}