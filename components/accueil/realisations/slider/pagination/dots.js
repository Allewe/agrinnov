import Dot from './dot'

export default function Dots({slides, activeIndex}){
    return(
        <div className = "slide-dot">
            {slides.map(({url, id}) =>(
                <Dot key ={url} active = {activeIndex === id}/>
            ))}

            <style jsx>
             {
                 `
                 
                     .slide-dot{
                        position : absolute;
                        bottom : 25px;
                        width : 100%;
                        display : flex;
                        align-items : center ;
                        justify-content : center;
                     }
                 
                 `
             }   
            </style>  
        </div>
    )
}