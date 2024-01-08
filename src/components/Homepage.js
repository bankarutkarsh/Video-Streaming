import React from "react";
import "../styles/Homepage.css"
import Navbar from "./navbar";
import navHook from "./navigator";

class Homepage extends React.Component{

    navigatepage = () => {
        this.props.navigate(`/Main`);
    }

    render() {
        return(
            <div>
                <Navbar />
                <div className="main">
                    <div className="box">
                        <div className="descp">
                            <div>Unlimited movies, TV shows and more</div>
                            <div>Watch anywhere. Cancel anytime.</div>
                            <div id="emailreq">Ready to watch? Enter your email to create or restart your membership.</div>
                            <div className="search">
                                <input type="text" placeholder="Enter Email" />
                                <button onClick={() => this.navigatepage()}>Get Started {'>'}</button>
                            </div>
                        </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="box2">
                        <div className="content">
                            <div>Enjoy on your TV</div>
                            <div>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</div>
                        </div>
                        <div className="animation">
                            <img src="./images/tv.png" alt="1" />
                            <video src="./videos/video-tv-in-0819.m4v" autoPlay muted loop></video>
                        </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="box2">
                        <div className="animation">
                            <img src="./images/image3.jpg" alt="2" />
                            <div className="down">
                                <img id="imgst" src="./images/image3.1.png" alt="2.1" />
                                <div id="name">
                                    <span>Stranger</span>
                                    <span>Things</span>
                                    <span>Downloading...</span>
                                </div>
                            <div className="gif"></div>
                            </div>
                        </div>
                        <div className="content">
                            <div>Download your shows to watch offline</div>
                            <div>Save your favourites easily and always have something to watch.</div>
                        </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="box2">
                        <div className="content">
                            <div>Watch everywhere</div>
                            <div>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</div>
                        </div>
                        <div className="animation">
                            <img src="./images/image4.png" alt="3" />
                            <video id="vid4" src="./videos/video4.m4v" autoPlay muted loop></video>
                        </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="box2">
                        <div className="animation">
                            <img src="./images/image5.png" alt="4" />
                            
                        </div>
                        <div className="content">
                            <div>Create profiles for kids</div>
                            <div>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</div>
                        </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="ques">
                            <div className="head">Frequently Asked Questions</div>
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header" >
                                        <button className="accordion-button collapsed ques_box" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        What is Netflix? 
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse ans_box" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. <br/><br/>
                                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
                                    </div>
                                </div>
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How much does Netflix cost?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</div>
                                    </div>
                                </div>
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed accbutton" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Where can I watch?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br/><br/>
                                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
                                    </div>
                                </div>
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        How do I cancel?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
                                    </div>
                                </div>
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        What can I watch on Netflix?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
                                    </div>
                                </div>
                                <div className="accordion-item itm">
                                    <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        Is Netflix good for kids?
                                    </button>
                                    </h2>
                                    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. <br/><br/>
    
                                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
                                    </div>
                                </div>
                            </div>
                            <div id="emailreq">Ready to watch? Enter your email to create or restart your membership.</div>
                            <div className="search">
                                <input type="text" placeholder="Enter Email" />
                                <button onClick={() =>this.navigatepage()}>Get Started {'>'}</button>
                            </div>
                    </div>
                    <div className="separation"> </div>
    
                    <div className="links">
                        <div>Questions? Call <span>000-800-919-1694</span></div>
                        <div id="mar">
                            <div class="links1">
                                <p>
                                        <a href="https://help.netflix.com/support/412">FAQ</a><br />
                                        <a href="https://media.netflix.com/">Media Centre</a><br />
                                        <a href="https://www.netflix.com/watch">Ways to Watch</a><br />
                                        <a href="https://www.netflix.com/in/#">Cookie Preferences</a><br />
                                        <a href="https://fast.com/">Speed Test</a>
                                </p>
                            </div>
                            <div class="links2">
                                <p>
                                        <a href="https://help.netflix.com/">Help Centre</a><br />
                                        <a href="http://ir.netflix.com/">Investor Relations</a><br />
                                        <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a><br />
                                        <a href="https://help.netflix.com/legal/corpinfo"> Corporate Information</a><br />
                                        <a href="https://help.netflix.com/legal/notices">Legal Notices</a>
                                </p>
                            </div>
                            <div class="links3">
                                <p>
                                    <a href="https://www.netflix.com/youraccount">Account</a><br />
                                    <a href="https://jobs.netflix.com/jobs">Jobs</a><br />
                                    <a href="https://help.netflix.com/legal/privacy">Privacy</a><br />
                                    <a href="https://help.netflix.com/contactus">Contact Us</a><br />
                                    <a href="https://www.netflix.com/in/browse/genre/839338"> Only on Netflix</a>
                                </p>
                            </div>
                        </div>
                        <div className="lang">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-globe"
                                viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472M3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                            </svg>
                            <select>
                                <option selected>English</option>
                                <option>Hindi</option>
                            </select>
                        </div>
                        <div>Netflix India</div>
                    </div>
    
                </div>
            </div>
        )
    }
}

export default navHook(Homepage);