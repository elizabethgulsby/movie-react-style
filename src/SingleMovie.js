import React, { Component } from 'react'
import $ from 'jquery'

class SingleMovie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMovieData: [],
			revenue: '',
			budget: '',
		}
	}

	componentDidMount() {
		var currentMovieId = this.props.params.id;
		var url = 'https://api.themoviedb.org/3/movie/' + currentMovieId + '?api_key=5847d8d10c644a674d1dbbc20b14230e';
		$.getJSON(url, (movieApiResponse) => {
			console.log(movieApiResponse) /*.homepage is gleaned from this ajax call response*/
			var revenue = "$" + movieApiResponse.revenue;
			var budget = "$" + movieApiResponse.budget;
			this.setState({
				currentMovieData: movieApiResponse,
				revenue: revenue,
				budget: budget
			})
		});
	}

	render() {
		var posterPath = 'http://image.tmdb.org/t/p/original' + this.state.currentMovieData.poster_path;
		return (
			<div className="col-sm-8">
				<a href={this.state.currentMovieData.homepage} target="_blank">
					<img src={posterPath} />
				</a>
			</div>
		)
	}
}

export default SingleMovie;