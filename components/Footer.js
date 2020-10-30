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

var a=0
var b =0
class Persikf extends React.Component {


    state={
        amp:true
    }
    static async getInitialProps({ req }) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }

    componentDidMount() {
        this.setState({amp:false})
        a =document.body.clientHeight
        b = window.innerHeight
    }

    render() {

        return (
          <>

                  <div>
                      {b-50>=a?(<div className="footer" style={{marginTop:"20px"}}>
                          <div style={{backgroundColor:"#dbdbdb",height:"1px",paddingRight:"40px",paddingLeft:"40px"}}></div>

                          <div className="hdblock">

                              <div style={{textAlign:"center"}}>
                                  <div className="FineBot" style={{marginLeft:"5px",marginRight:"5px",fontSize:20,marginTop:"-9px",marginBottom:"-6px"}}>
                                  FineBot
                                  </div>
                                  <a href="/rules" style={{textDecoration:"none",color:"#000",fontSize:"14px"}} aria-current="page" itemProp="url"><span>Правила использования</span></a>
                              </div>
                          </div>

                      </div>):(<div style={{marginTop:"20px"}}>
                          <div style={{backgroundColor:"#dbdbdb",height:"1px",paddingRight:"40px",paddingLeft:"40px"}}></div>

                          <div className="hdblock">

                              <div style={{textAlign:"center",marginBottom:"5px"}}>
                                  <div className="FineBot" style={{marginLeft:"5px",marginRight:"5px",fontSize:20,marginTop:"-9px",marginBottom:"-6px"}}>
                                      FineBot
                                  </div>
                                  <a href="/rules" style={{textDecoration:"none",color:"#000",fontSize:"14px"}} aria-current="page" itemProp="url"><span>Правила использования</span></a>
                              </div>
                          </div>

                      </div>)}

                  </div>



              </>

        );
    }
}
export default Persikf
