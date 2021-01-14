import Choose from './choose/choose'

export default function ChooseBar({handleClick, choose}){
    
    return(
        <>
            <div className="choosebar-container">
                <div className = "choosebar">
                    <Choose name = "recherche" color ="#28a745" choose = {choose && handleClick}>
                        <svg  viewBox="0 0 16 16" className="bi bi-search icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </Choose>
                    <Choose name = "filtre" color ="#ffd700" choose = {!choose && handleClick}>
                    <svg viewBox="0 0 16 16" className="bi bi-funnel icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                    </svg>
                    </Choose>
                </div>
            </div>
            <style jsx>
                {`.choosebar-container{
                    display: flex;
                    width:100%;
                    .choosebar{
                        width:100%;
                        display : flex;
                        flex-wrap:wrap;
                        flex-direction : row;
                        .icon{
                            width:0.9em;
                            height:0.9em;
                        }
                    }
                }`}
            </style>
        </>
    )
}