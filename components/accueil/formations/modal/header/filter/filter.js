import React from 'react'
import Categories from './categories/categories'
const Filter = ({data}) =>{

    return(
        <>
            <div className = "filter-container ">
                <div className ="filter-title">
                    <h4 className="title"> Choississez un domaime</h4>
                </div>
                <div className ="filter">
                    <ul className ="filter-data">
                        { data.map(({categories})=>(
                            <Categories name = {categories} />
                        ))}
                    </ul>
                </div>
                
            </div>
            <style jsx>{`
                .filter-container{
                    margin : 18px 50px;
                    display : flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction: column;
                    .title{
                        font-size : 1rem;
                    }
                }
                .filter{
                    width:100%;
                    display:flex;
                    .filter-data{
                        display : flex;
                        margin :0;
                        padding:0;
                        width:100%;
                        justify-content:center;
                        align-items: center;
                        
                    }
                }
                
            `}</style>
        </>
    )
}

export default Filter