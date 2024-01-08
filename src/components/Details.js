import React from "react";
import axios from 'axios'
import queryString from 'query-string'
import '../styles/Details.css'
import navHook from "./navigator";
import Navbar from "./navbar";

class Details extends React.Component{

    constructor(){
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        const q = queryString.parse(window.location.search);

        const { type } = q;

        axios({
            url: `http://localhost:5500/shows/${type}`,
            method: 'GET',
            headers: { 'Content-Type': 'Application/JSON'}
        })
        .then(res => {
            this.setState({movies: res.data.Details})
        })
        .catch(err => { console.log(err)})
    }

    playVideo = (id) =>{
        window.open(`http://localhost:5500/stream/${id}`);
    }

    render(){

        const{movies} = this.state;
        var styles = {
            backgroundImage:`linear-gradient(to top , rgba(0, 0, 0, 0.8) 10%, rgba(0, 0, 0, 0) 112%, rgba(0, 0, 0, 0.8) 104% ),url(${movies.banner})`,
        } 

        return(
            <div>
                <Navbar />
                <div className="bgi" style={styles}>
                    <div className="mvDtls">
                        <h2>{movies.title}</h2>
                        <h5>Available Now</h5>
                        <div>
                            <h5>Rating : {movies.Rating}</h5>
                            <div>{movies.synopsis}</div>
                        </div>
                        <button onClick={()=>this.playVideo(movies._id)}>Play</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default navHook(Details);