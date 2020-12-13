'use strict';
import React from 'react';

import Glavpage from "../components/glavpage"
import Promo from "../components/promo"
import Fade from "react-reveal"

export default class Persik extends React.Component {

    constructor(props){
        super(props);

        this.state={
            your_city:"",
            promo:false,
            promo1:true,
            promo2:true,

        }


    }
    componentDidMount() {

        window.onhashchange=(e)=>{
            var ne=e.newURL.split("#")[1]
            if(ne=="promo"){
                this.showPromo()
            }else{
                this.hidePromo()
            }
        }
        var hash = window.location.hash
        if(hash==="#promo"){
            this.showPromo()
        }
    }
    showPromo(){
        setTimeout(()=>this.setState({promo:true}),0)
        setTimeout(()=>this.setState({promo1:false}),400)
        setTimeout(()=>this.setState({promo2:false}),550)

    }
    hidePromo(){
        setTimeout(()=>this.setState({promo:false}),1)
        setTimeout(()=>this.setState({promo2:true}),3)

        setTimeout(()=>this.setState({promo1:true}),0)
    }


    render() {


        return (
           <div>
               <Fade top when={this.state.promo} >
                   {this.state.promo?(<Promo hidePromo={this.hidePromo.bind(this)}/>):(<div></div>)}
               </Fade>

               {this.state.promo2?( <Fade bottom when={this.state.promo1} >
                   {this.state.promo1?(<Glavpage showPromo={this.showPromo.bind(this)}></Glavpage>):(
                       null
                   )}
               </Fade>):(<div></div>)}



           </div>
        );
    }
}



