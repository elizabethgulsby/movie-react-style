//dependencies/components
import React, { Component } from 'react';
import $ from 'jquery';

// custom components/modules
import Poster from './Poster';
import Constants from './Constants';
import config from './config';
import DiscoverButton from './DiscoverButton'

import './App.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.state = {
			moviePosters: []
		}
	}
	/*As soon as home is mounted*/
	componentDidMount() {
	    var url = Constants.baseUrl + Constants.nowPlayingEP + config.api_key;
	    $.getJSON(url, (movieData) => {
	      console.log(movieData)
	      this.setState({
	        moviePosters: movieData.results
	      })
	    });
  	}

  	// Custom function to update Home's state var, FROM THE CHILD BUTTON
  	handleCategoryChange(categoryApiUrl) {
  		console.log(categoryApiUrl)
  		var url = Constants.baseUrl + categoryApiUrl + config.api_key
  		console.log(url);
  		$.getJSON(url, (categoryData) => {
  			this.setState({
  				moviePosters: categoryData.results
  			})
  		});
  	}

	render () {
		/*Load up the movie posters array with poster components*/
		var postersArray = [];
    	this.state.moviePosters.map((poster, index) => {
      		postersArray.push(<Poster poster={poster} key={index} />)
    	});

    	/*build buttons with DiscoverButton component*/
    	var discoverButtons =[];
    	Constants.discoverLinks.map((category, index) => {
    		discoverButtons.push(
    			<DiscoverButton buttonLink={category.link} buttonText={category.buttonText} functionfromParent={this.handleCategoryChange} key={index} />
    		)
    	});


		return (
			<div>
				<h1>This is the home page!</h1>
				<div className="col-sm-12">
					{discoverButtons}
				</div>
				{postersArray}
			</div>
		)
	}
}

export default Home;