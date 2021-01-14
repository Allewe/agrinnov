import React from 'react'

const SearchBar = ({active}) =>{
    return(
        <>
            <div className='searchbar-container'>
                <div className = "searchbar">
                    <label className = "search-label"> 
                        <input type ="text" className ="search-input" />
                        <span className ="icon-block">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className ="icon-svg" >
                                <g fill="none">
                                    <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                                </g>
                            </svg>
                        </span>
                    </label>
                </div>
            </div>
            <style jsx>
                {`
                    .searchbar-container{
                        

                        display :flex;
                        justify-content : center;
                        align-items : center;
                        
                    }
                    .searchbar{
                        border : 0.06em solid #28a745;
                        border-radius : 24px;
                        width : 250px;
                        margin : 18px 50px;
                        .search-label{
                            display : flex;
                            width: 100%;
                            height : 100%;
                            margin: 0;
                           
                        }
                    }
                    .icon-block{
                        background-color : #28a745;
                        border-radius : 50%;
                        color : #fff;
                        height : 32px;
                        width : 32px;
                        margin : 7px 7px 7px 0;
                        padding : 10px;
                        
                        .icon-svg{
                            display : block; 
                            fill:none;
                            height:12px;
                            width:12px;
                            stroke:currentColor;
                            stroke-width:5.333333333333333;
                            overflow:visible;
                        }
                    }
                    .search-input{
                        height : 32px;
                        width :100%;
                        margin : 7px;
                        border : 0px;
                        background : none;
                        font-size : 14px;
                        line-height : 18px;
                        font-weight : 600;
                        text-overflow : ellipsis;
                        &:focus{
                            outline : none;
                        }
                        
                    }
                `}
            </style>
        </>
    )
}

export default SearchBar