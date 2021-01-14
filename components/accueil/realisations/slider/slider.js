import { Component, useState, useEffect} from "react";
import Arrow from "./arrow/arrow";
import Dots from "./pagination/dots";
import SlideContent from './slide-content/slide-content'
import Slide from "./slide/slide";



 const Slider = ({slides})=>{
    
    
    const [width, setWidth] = useState(0) 
    const [ state , setState ] = useState({
      translate : 0,
      transition : 0.45,
      activeIndex : 0
    });

    const {translate, transition, activeIndex} = state

    const NextSlide = () =>{
      if(activeIndex === slides.length -1){
        return setState({
          ...state,
          translate : 0,
          activeIndex : 0
        })
      }

      setState({
        ...state,
        activeIndex : activeIndex + 1,
        translate : (activeIndex+ 1 ) * width
      })
      
    }

    const prevSlide = () =>{
      if(activeIndex === 0){
        return setState({
          ...state,
          translate : (slides.length - 1) * width,
          activeIndex : slides.length - 1
        });
      }
      setState({
        ...state,
        activeIndex : activeIndex - 1,
        translate : (activeIndex - 1) * width
      })
    }
    
    
    useEffect(() =>{
       
      setWidth(() => window.innerWidth)
        console.log("la largeur est de "+width + " px" +slides.length);
  
    })
        return(
          
            <div className = "prod-diapo">
               
                                
                <SlideContent
                  transition ={transition} 
                  translate ={translate} 
                  width = {width * slides.length}
                >
                  {slides.map(({url, id}) =>(
                    <Slide content={url} key={url + id} />
                  ))}
                </SlideContent>                      
             
              
              <Arrow direction ="droite" handleClick = {NextSlide}/>
              <Arrow direction ="gauche" handleClick ={prevSlide}/>
              <Dots slides={slides} activeIndex ={activeIndex} />
              <style jsx>{`
              .prod-diapo{

                  position: relative;
                  overflow: hidden;
                  margin : 0 auto;
                  
              }
            `}
        </style>
              </div>
            
          
            
        );
    }
export default Slider 
