import React, { Component } from 'react'

class DiscoverButton extends Component {

	handleButtonClickChild(apiLink) {
		console.log(apiLink);
		this.props.functionfromParent(apiLink);
	}

	render () {
		var apiLink = this.props.buttonLink;
		var buttonText = this.props.buttonText;
		return (
			<button className="btn btn-primary" onClick={() => this.handleButtonClickChild(apiLink)}>
				{buttonText}
			</button>
		)
	}
}

export default DiscoverButton;