import Link from 'next/link'
import React, { useState } from 'react'
import Home from '../go-home/go-home'
import ChooseBar from './choosebar/choosebar'
import Filter from './filter/filter'
import SearchBar from './searchbar/searchbar'

const Header = ({onClick, data}) =>{
    const [choose, setChoose] = useState(false)
    
    const onChoose = () =>{ 
        
        setChoose(!choose)
        
    }


    return(
        <header className = "header-container">
            <Home onClick = {onClick}/>
            <ChooseBar handleClick = {onChoose} choose ={choose} />
            {choose ? <Filter data = {data}  /> : <SearchBar  /> }
            
            
            <style jsx>
                {`
                    .header-container{
                        width :100%;
                        margin: 0;
                        display : flex;
                        padding : 0;
                        flex-wrap : wrap;
                        align-items : center;
                        position : sticky;
                        top : 0;
                        left :0;
                        z-index : 20;
                        background : #fff;
                        justify-content: center;
                        
                        
                    }
                    

                    
                    
                    
                `}
            </style>
        </header>
    )
}

export default Header