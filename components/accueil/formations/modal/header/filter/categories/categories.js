import { data } from "jquery"
import { useState } from "react"

const Categories = ({name}) =>{
    const [color, setColor] = useState(
        name === 'pisciculture'?'#87CEEB'
        : name === 'agriculture' ? '#00FF00' : '#FF7F50' 
    )
       
        

    

   
    return(
        <>
            <li className ="data-list">
                <a className ="data-link">
                    <span>
                        {
                          name
                        }
                    </span>
                </a>
            </li>
            <style jsx>
                {
                    `
                    .data-list{
                        justify-content:center;
                        align-items: center;
                        display : flex;
                        border-radius: 24px;
                        margin : 0 6px;
                        border : 0.06rem solid ${color};
                        color : ${color};
                        .data-link{
                            padding: 5px;
                        }

                        
                        
                    }
                    `
                }
            </style>
        </>
    )
}

export default Categories