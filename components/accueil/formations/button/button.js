import { MDBCol } from "mdbreact"


const Button = ({handleClick})=> {

    
    return(
        <MDBCol className ="d-flex justify-content-center align-items-center">
            <a className ="form-btn"  onClick = {handleClick}>
                <span className="btn-neon"></span>
                <span className="btn-neon"></span>
                <span className="btn-neon"></span>
                <span className="btn-neon"></span>
                Voir Plus
            </a>
            <style jsx>
                {
                    `.form-btn{
                        border-radius : 10px;
                        background : darken(#fff, 15);
                        display : flex;
                        justify-content : center;
                        align-items: center;
                        height : 20px;
                        width : 131.72px;
                        position : relative;
                        padding : 25px 30px;
                        margin : 35px ;
                        color : rgb(250, 17, 0);
                        text-decoration : none;
                        text-transform : uppercase;
                        transition : 0.5s;
                        letter-spacing: 0.1em;
                        overflow : hidden;
                        margin-right: 50px;
                        font-size : 0.7rem;
                        &:hover{
                            background: rgb(250, 17, 0); color : #fff;
                        }
                    }
                    
                    .form-btn .btn-neon{
                        position: absolute;
                        display : block;
                    }
                    .form-btn .btn-neon:nth-child(1){
                        top : 0;
                        left : 0;
                        width : 100%;
                        height : 2px;
                        background : linear-gradient(90deg, transparent, rgb(250, 17, 0 ));
                        animation: animationOne 1s linear infinite;
                    }
                    @keyframes animationOne{
                        0%{
                            left: -100%;
                        }
                        50%, 100%{
                            left: 100%;
                        }
                    }
                    .form-btn .btn-neon:nth-child(2){
                        top : -100%;
                        right: 0;
                        width : 2px;
                        height : 100%;
                        background : linear-gradient(180deg, transparent, rgb(250, 17, 0 ));
                        animation: animationTwo 1s linear infinite;
                        animation-delay: 0.25s;
                    }
                    @keyframes animationTwo{
                        0%{
                            top: -100%;
                        }
                        50%, 100%{
                            top: 100%;
                        }
                    }
                    
                    .form-btn .btn-neon:nth-child(3){
                        bottom: 0;
                        right : 0;
                        width : 100%;
                        height : 2px;
                        background : linear-gradient(270deg, transparent, rgb(250, 17, 0 ));
                        animation: animationThree 1s linear infinite;
                        animation-delay: 0.5s;
                    }
                    @keyframes animationThree{
                        0%{
                            right:  -100%;
                        }
                        50%, 100%{
                            right: 100%;
                        }
                    }
                    .form-btn .btn-neon:nth-child(4){
                        bottom : -100%;
                        left : 0;
                        width : 2px;
                        height : 100%;
                        background : linear-gradient(360deg, transparent, rgb(250, 17, 0 ));
                        animation: animationFour 1s linear infinite;
                        animation-delay: 0.75s;
                    }
                    @keyframes animationFour{
                        0%{
                            bottom:  -100%;
                        }
                        50%, 100%{
                            bottom: 100%;
                        }
                    }
                    `
                }
            </style>
        </MDBCol>
    )
}

export default Button
