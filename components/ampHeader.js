import React from "react";

export default function () {
	return(
		<div className="parent">
			<div className="hdblock" >
				<div style={{display:"inline-flex"}}>
					<a href="/"><amp-img src="/static/images/logo.png" height="35px" width="35px" style={{marginLeft:"10px",marginRight:"10px"}}/></a>
				</div>
			</div>
			<div amp-custom style={{backgroundColor:"#dbdbdb",height:"1px",paddingRight:"40px",paddingLeft:"40px"}}></div>

		</div>
	)
}