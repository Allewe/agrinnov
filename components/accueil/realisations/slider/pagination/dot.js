

export default function Dot({active}){

    return(
        <span className = "dot">
            <style jsx>
                {`
                    .dot{
            
                        padding : 10px;
                        margin-right: 5px;
                        cursor : pointer;
                        border-radius : 50%;
                        
                    }
                `}
            </style>
            <style jsx>
                {`.dot{
                    background : ${active ? 'green' : 'white'};}
                `}
            </style>
        </span>
    )
}