import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import react from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { getAllTrainingId, getTrainingData } from "../../lib/formation-post";
import Menu from "../../components/menu/menu";

const CodeBlock = ({language, value}) =>{
    return(
    <SyntaxHighlighter showLineNumbers={true} language={language}>
        {value}
    </SyntaxHighlighter>
    );
};



const Formation = ({data}) =>{

    


    return(
        <>
            <Menu/>
            <div className="d-flex justify-content-center ">
            <h1>{data.title}</h1>
            <h3>{data.description}</h3></div>
            <ReactMarkdown escapeHtml ={true} source={data.content} renderers={{code : CodeBlock}} />
        </>
    )
}

export default Formation;

export async function getStaticProps({params}){

    const data = getTrainingData(params.formation)

    
    return{
        
       props:{
           data
       } 
    }
}

export async function getStaticPaths(){
    const paths = getAllTrainingId()
    return {
        paths,
        fallback: false
    }
}

