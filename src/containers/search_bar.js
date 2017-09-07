import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    render(){
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input onChange={this.onInputChange} vale={this.state.term} placeholder="Get a five day forecast" className="form-control"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }


}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default  connect(null, mapDispatchToProps)(SearchBar);