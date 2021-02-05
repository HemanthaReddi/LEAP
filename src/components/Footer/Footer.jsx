import React from "react";
import propTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";

import footerStyle from "assets/jss/material-dashboard-react/components/footerStyle.jsx";
import stageCoach from "assets/img/footer-stagecoach.png";

function Footer({...props}){
	const {classes} = props;

return (
	<footer className={classes.footer}>
		<div className={classes.container}>
			<div className={classes.left}>
			<img src={stagecoach} alt="stagecoach Footer" height="auto" width="50%"/>
			<br/>
				<List className={classes.list}>
					<ListItem className={classes.inlineBlock}>
						<a href="https://home.teamworks.wellsfargo.net/efit" className={classes.block}>
						Home |
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href="#company" className={classes.block}>
						Contact Enterprise Finance & Information Technology |
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href="#portfolio" className={classes.block}>
						Teamworks policies |
						</a>
					</ListItem>
					<ListItem className={classes.inlineBlock}>
						<a href="#blog" className={classes.block}>
						Report Inappropriate use
						</a>
					</ListItem>
				</List>
			</div>
		</div>
	</footer>
	);
}

Footer.propTypes = {
	classes:PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
