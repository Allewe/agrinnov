import React from 'react'

const Body = ({children})=>{
    return(
        <ul className = "mod-layout">
            {children}
            <style jsx>
                {`
                    .mod-layout{
                        margin: 0;
                        display : flex;
                        padding : 0;
                        flex-wrap : wrap;
                        flex-direction : row;
                        justify-content: center;
                        

                    }
                `}
            </style>

        </ul>
    )
}

export default Body