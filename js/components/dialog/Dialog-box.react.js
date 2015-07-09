import React from 'react';
// 遮罩层
export default class DialogBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 0
		}
	}
	componentDidMount() {
		this.handleResize();
		window.addEventListener(
			'resize', 
			this.handleResize.bind(this), 
			false
		);
	}
	handleResize() {
		this.setState({
			width: document.body.clientWidth
		});
	}
	render() {
		return (
			<div id="dialogBox-wp" style={this.state} >
				{this.props.children}
			</div>
		);
	}
}