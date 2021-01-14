const Arrow =({direction, handleClick})=>{


    return(
        <>
        {direction === 'droite' 
            ?(
                <div className ="nav-droite" onClick={handleClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                    </svg>
                </div>
            ):(
                <div className ="nav-gauche" onClick={handleClick}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
                    </svg> 
                </div>
            )
        }<style jsx>{`
            .nav-droite, .nav-gauche{
                position: absolute;
                
                top: 45%;
                
                font-size : 2rem;
                cursor : pointer;
                border-radius : 50%;
                color: rgba($color: #ffffff, $alpha: 0.5);
                transition : transform ease-in 0.1s;

                &:hover{
                    transform : scale(1.2);
                }

                
            }
            .nav-droite{
               right: 2px;
            }
            
            .nav-gauche{
                left: 2px;
            }`}
           </style> 
        </>
    );
    
}

export default Arrow