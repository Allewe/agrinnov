import Slide from "../slide/slide";

export default function SlideContent({transition, translate, children, width}){
    return(
    
        <div className ="prod-element" >
             {children}
             <style jsx>
              {`
                  .prod-element{
                      display : flex;
                      
                  }
              `}
          </style>
          <style jsx>
              {
                  `.prod-element{
                      transform : translateX(-${translate}px);
                      transition : transform ease-out ${transition}s;
                      width : ${width}px;
                  }`
              }
          </style>
        </div>

        
    )
  }
    