import React from 'react';

import Layout from './Layout'
import AmpState from './amp/AmpState'
import { useAmp } from 'next/amp'
import Head from 'next/head'

import AmpScript from './amp/AmpScript'
import {
	AmpIncludeAmpList,
	AmpIncludeAmpCarousel,
} from './amp/AmpCustomElement'
import {styles} from "next/dist/server/error-debug";

class Persikf extends React.Component {


		state={
			amp:true
		}




	render() {
		return (
			<>

					<div className="parent">
						<div className="hdblock" >

							<div style={{display:"inline-flex"}}>
								<a href="/"><img src="/static/images/logo.png" height="35px" width="35px" style={{height:"35px",width:"35px",marginLeft:"10px",marginRight:"10px"}}/></a>
							</div>
						</div>
						<div style={{backgroundColor:"#dbdbdb",height:"1px",paddingRight:"40px",paddingLeft:"40px"}}></div>

					</div>



</>

		);
	}
}
export default Persikf
