import React from "react";
import Navbar from "./navbar";
import "../styles/main.css";
import axios from 'axios';
import navHook from "./navigator";

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            movies: [],
            inputText: undefined,
            suggestions: []
        }
    }

    componentDidMount(){
        axios({
            url: 'http://localhost:5500/shows',
            method: 'GET',
            headers: { 'Content-Type': 'Application/JSON'}
        })
        .then(response=>{
           this.setState({movies: response.data.List})
           console.log(response);
        })
        .catch(err =>console.log(err))
    }

    handleInput = (event) => {
        const { movies } = this.state;
        const inputText = event.target.value;

        let suggestions = [];

        suggestions = movies.filter(item => item.title.toLowerCase().includes(inputText.toLowerCase()));
        this.setState({ inputText, suggestions });
    }

    showSuggestions = () => {
        const { suggestions, inputText } = this.state;

        if (suggestions.length === 0 && inputText === undefined) {
            return null;
        }

        if (suggestions.length > 0 && inputText === '') {
            return null;
        }

        if (suggestions.length === 0 && inputText) {
            return (
                <div className="sugg-item"> No Search Results Found </div>
            )
        }

            return(
                suggestions.map((item) => (
                    <div className="sugg-item" onClick={() => this.detailsPage(item._id)}>
                        <img className='sugg_img' src={`${item.banner}`} alt='No images to display' />
                    </div>
                ))
            );
    }

    detailsPage = (id) =>{
        this.props.navigate(`/Details?type=${id}`);
    }

    render(){

        const{movies} = this.state;

        return(
            <div>
                <Navbar />
                <div>
                    <div className="backgrd" ></div>
                    <div className="display">
                        <div className="holder">
                            <div className="search">
                                <input type="text" placeholder="Enter name to search" onChange={this.handleInput} />
                            </div>
                            <div className='sugg'>
                                    {this.showSuggestions()}                                    
                            </div>
                            <div className="list">
                                <h4>Action Movies</h4>
                                <div className="itm-hndl">
                                    {
                                        movies.map((movie)=>{
                                            return(
                                                <div className="item" onClick={()=>this.detailsPage(movie._id)}>
                                                    <img className="itm-img" src={movie.banner} alt={movie.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="list">
                                <h4>Made in India</h4>
                                <div className="itm-hndl">
                                    {
                                        movies.map((movie)=>{
                                            return(
                                                <div className="item" onClick={()=>this.detailsPage(movie._id)}>
                                                    <img className="itm-img" src={movie.banner} alt={movie.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="list">
                                <h4>Top Movies</h4>
                                <div className="itm-hndl">
                                    {
                                        movies.map((movie)=>{
                                            return(
                                                <div className="item" onClick={()=>this.detailsPage(movie._id)}>
                                                    <img className="itm-img" src={movie.banner} alt={movie.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="list">
                                <h4>New Releases</h4>
                                <div className="itm-hndl">
                                    {
                                        movies.map((movie)=>{
                                            return(
                                                <div className="item" onClick={()=>this.detailsPage(movie._id)}>
                                                    <img className="itm-img" src={movie.banner} alt={movie.title} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default navHook(Main);