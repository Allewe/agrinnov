
import React from 'react'
import CardLayout from './card-layout/layout'

const ModCard = ({src, link, title, categories, degree, duration }) =>{
    return(
        <CardLayout link = {link}>
            <div className ="card-img">
                <img src ={`${src}.jpg`} className ="image1" />
            </div>
            <div className ="card-body">
               
                    <span className ="categories">{categories}</span>
                    <h3 className ="body-title">{title}</h3>
                    <div className ="body-block">
                        
                            <span className="i1">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="2em" height="2em" viewBox="0 0 1280.000000 1280.000000" preserveAspectRatio="xMidYMid meet">
                                <metadata>
                                    Created by potrace 1.15, written by Peter Selinger 2001-2017
                                </metadata>
                                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M6020 8630 c-429 -103 -1815 -430 -2865 -676 -391 -92 -453 -109 -472 -131 -28 -29 -29 -54 -5 -81 9 -10 350 -162 757 -337 407 -175 752 -324 766 -331 l27 -13 -68 -133 c-106 -207 -190 -459 -206 -615 -7 -70 10 -113 46 -113 11 0 73 15 138 34 407 119 807 144 1168 71 66 -13 214 -53 330 -89 237 -73 358 -100 541 -121 234 -27 326 -21 753 52 l275 48 250 0 c267 0 362 -10 594 -61 134 -30 357 -100 474 -150 111 -46 157 -44 171 10 13 52 -74 411 -149 609 -19 52 -35 98 -35 101 0 20 41 -2 98 -55 93 -84 238 -179 391 -255 72 -36 134 -70 138 -77 12 -19 6 -100 -10 -139 -25 -59 -100 -131 -217 -208 -117 -76 -143 -105 -214 -248 -57 -114 -109 -194 -244 -376 -160 -217 -226 -321 -322 -515 -85 -169 -152 -334 -208 -505 -44 -135 -41 -143 70 -200 100 -51 183 -59 287 -27 80 24 91 37 92 108 1 26 4 59 8 73 6 19 9 9 13 -40 5 -51 11 -69 29 -83 24 -19 73 -17 93 3 6 6 11 92 12 203 1 105 6 206 11 222 9 30 10 29 23 -25 31 -130 118 -315 156 -332 30 -14 76 9 88 44 8 22 4 40 -21 95 -148 325 -116 556 146 1053 33 62 42 94 55 187 9 61 16 124 16 140 1 23 11 34 57 63 74 46 192 161 236 231 108 170 98 340 -26 430 -23 17 -103 62 -178 100 -122 62 -315 186 -306 196 3 2 298 73 658 159 398 94 660 161 671 171 26 24 24 79 -4 97 -19 12 -1643 701 -3280 1392 -299 127 -320 134 -380 133 -41 -1 -188 -31 -428 -89z"/>
                                </g>
                            </svg> 
                            </span>
                            <span className = "degree">
                                {degree}
                            </span>
                            <span className="i2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar3-week" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                    <path fill-rule="evenodd" d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg>
                            </span>
                            <span className="duration">
                                {duration}
                            </span>
                        
                </div>
                <div className ="card-footer"></div>
            </div>
            <style jsx>
                {`
                    .card-img{
                        position : relative;
                        width : 100%;
                        margin-bottom : 8px;
                        align-self : flex-start;
                        max-width : none;
                        height : 55%;
                        
                        flex-shrink: 0;
                        
                        .image1{
                            
                            
                            width : 100%;
                            height : 100%;
                           
                        }
                    }

                    .card-body{
                        
                        margin : 0;
                        width : 100%;
                        flex-grow : 1;
                        padding : 0;

                        .categories{
                           display: block;
                           text-transform : uppercase;
                           
                        }

                        .body-title{
                            margin-bottom : 4px;
                            
                        }
                    }
                    .card-footer{
                        margin : 0;
                        
                    }
                `}
            </style>
        </CardLayout>
    )

}

export default ModCard

