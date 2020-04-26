'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
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

        }


    }
    componentDidMount() {
        setTimeout(()=>this.setState({promo:true}),1500)
        setTimeout(()=>this.setState({promo1:false}),1900)
    }



    render() {


        return (
           <div>
               <Fade top when={this.state.promo} >
                   <Promo/>
               </Fade>


                   {this.state.promo1?(<Glavpage></Glavpage>):(
                       null
                   )}




           </div>
        );
    }
}



