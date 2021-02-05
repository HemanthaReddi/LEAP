import React from "react";
import classNames from "classnames";
 
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";

import Notifications from "@material-ui/icons/Notifications";

import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";
import avatar from "assets/img/user1.jpg";

class HeaderLinks extends React.Component {
	state = {
		open: false
	};
	handleToggle = () => {
		this.setState(state => ({ open: !state.open }));
	};
	
	handleClose = event => {
		if(this.anchorE1.contains(event.target)) {
			return;
		}
		
		this.setState({ open: false });
	};
	
	render() {
		const {classes }  = this.props;
		const {open}=this.state;
		const userId = "a123";
		const user_full_name="Hemantha";
		return (
		<div>
		&emsp;
		<img className="avatar" src={avatar} alt={userId + "_avatar"} />
		&thinsp;<font color={window.innerWidth > 959 ? "transparent" : "white"}>{user_full_name}</font>
		
		<div className={classes.manager}>
		<Button

export default withStyles(style)(GridContainer);
