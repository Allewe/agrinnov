import { MDBBtn, MDBCollapse, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBView, MDBMask} from 'mdbreact'
import Link from 'next/link'
import { Component } from 'react'



class Menu extends Component{

state={
    collapse : false,
    isWideEnough :false,

}

onClick = ()=>{
    this.setState({
        collapse: !this.state.collapse,
    })
}

    render(){
    return(
        
            <div>
                <MDBNavbar color="bg-success" fixed="top" dark expand="lg" scrolling transparent>
                    <MDBNavbarBrand>
                        <Link href="/"><a style={{color: "white"}}><strong>Agrinnov</strong></a></Link>
                    </MDBNavbarBrand>
                    {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} /> }
                    <MDBCollapse isOpen={this.state.collapse} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <Link href="/"><a className="ml-xl-3">Accueil</a></Link>
                            </MDBNavItem>
                            <MDBNavItem className>
                                <a className="ml-xl-3 ml-lg-3 text-white">A-propos</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a className="ml-xl-3 ml-lg-3 text-white">Service</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a className="ml-xl-3 ml-lg-3 text-white">Formation</a>
                            </MDBNavItem>
                            <MDBNavItem>
                                <a className="ml-xl-3 ml-lg-3 text-white">Contact</a>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                    
                 </MDBNavbar>
                    

            </div>
                
                
                
                    
             
    )}

}


export default Menu