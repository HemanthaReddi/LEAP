import React from "react";
import avatar1 from "assets/img/sidebar-1.jpg";
import avatar2 from "assets/img/sidebar-2.jpg";
import avatar3 from "assets/img/sidebar-3.jpg";

import {Fade} from "react-slideshow-image";

const fadeProperties = {
	duration:5000,
	transitionDuration: 500,
	infinite:true,
	indicators: true,
	arrows: true,
	fixedImagesHeight: true
    }
        
	const SlideShow = () => {
          
        return (
          <Fade {...fadeProperties}>
			<div className="each-fade">
				<div className="image-container">
					<img src={avatar1} alt="10K Run Challenge" style={{width: "100%", maxHeight: 250, justifyContent: 'center', alignItems: 'center',}}/>} />
			</div>
			<h5>10K Run Challenge</h5>
			</div>
			<div className="each-fade">
				<div className="image-container">
					<img src={avatar2} alt="Photo of the Month" style={{width: "100%", maxHeight: 250}}/>
			</div>
			<h5>Photo of the Month</h5>
			</div>
			<div className="each-fade">
				<div className="image-container">
					<img src={avatar1} alt="Winner of the Photo walk Q3" style={{width: "100%", maxHeight: 250}}/>
			</div>
			<h5>Winner of the Photo walk Q3</h5>
			</div>
		 </Fade>
		)
	}
export default SlideShow;
