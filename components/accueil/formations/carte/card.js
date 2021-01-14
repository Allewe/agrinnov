import Link from "next/link";
import React from 'react'

export default function Card({title, description, date,slug, image}){

    return(
        <>
            <div className ="form-card">
                <div className ="form-info">
                    <h5 className = "form-title">{title}</h5>
                    <p className ="form-desc">
                        {date}<br/>
                        {description}<br/>
                        <Link href={`formations/${slug}`}><a>Lire la suite</a></Link>
                    </p>
                </div>
            </div>
            <style jsx>
                    {
                    `.form-card{
                        border-radius : 22px;
                        margin : 8px auto;
                        width : 400px;
                        max-width : 100%;
                        min-height : 350px;
                        box-shadow : 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
                        overflow : hidden;
                        background-size : cover;
                        
                    }
                    .form-info{
                        position: relative;
                        width: 100%;
                        height : 350px;
                        background : #fff;
                        transform : translateY(100%) translateY(-50px) translateZ(0);
                        transition : transform 0.5s ease-out;

                    }
                    .form-info:before{
                        z-index : -1;
                        display : block; 
                        position : absolute;
                        content :'';
                        width : 100%;
                        height : 100%;
                        overflow : hidden;
                        filter: blur(10px);
                        background-size : cover;
                        opacity : 0.25;
                        transform : translateY(-100%) translateY(60px) translateZ(0);
                        transition : transform 0.5s ease-out;


                    }  
                    .form-title{
                        margin : 0 ;
                        padding : 16px 24px 24px 24px;
                        font-size : 20px;
                        line-height:1;
                        color : rgba(0,0,0,0.87);
                    }

                    .form-desc{
                        margin : 0;
                        padding : 0 24px 24px;
                        font-size : 18px;
                        line-height : 1.5;
                    }
                    .form-card:hover .form-info, .form-card:hover .form-info:before{
                        transform : translateY(0) translateZ(0);
                    }
                    
                    `
                }
                </style>
                <style jsx>
                    {`
                    .form-card{
                        background-image: url('${image}.jpg');
                    }
                    .form-info:before{
                        background-image : url('${image}.jpg');
                    }
                    `}
                </style>
        </>
    )
}