import React from "react";

export default function About() {
    return (
        <div className="about mt-5 mb-5" id="about">
            <div className="container">
                <h1 className="text-center">
                    <p className="textAbout">About Me</p>
                    <p className="textKnow">Know Me More</p>
                    <hr className="hrKnow" />
                </h1>
                <div className="row firstRow">
                    <div className="col-md-8 col-sm-12">
                        <div className="card">
                            <h3>I'm <span style={{ color: "#20c997" }}>Jasurbek Qosimjonov</span>, a Web Developer</h3>
                            <h6 className="animate__animated animate__zoomIn mt-4">
                                I'm web developer. I'm a junior programmer with good knowledge of front end.
                                I love structure and order and I also stand for quailty.
                                I love spending time on fixing little details and optimizing web apps.
                                Also I like working in a team, you will learn faster and much more.
                                As the saying goes : "Two heads are better than one"
                                <p></p>
                                I help you build brand for your business at an affordable price. Thousands of clients
                                have procured exceptional results while working with our dedicated team.
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h6>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className="card">
                            <strong>Name : <span>Jasurbek Qosimjonov</span></strong>
                            <hr />
                            <strong>Email : <span>Jasurbek</span></strong>
                            <hr />
                            <strong>Born : <span>19.04.2002</span></strong>
                            <hr />
                            <strong>From : <span>Fergana city, Uzbekistan</span></strong>
                        </div>
                    </div>
                </div>

                <div className="row secondRow text-center">
                    <div className="col-md-3 col-sm-6"><h1>10+</h1><p>Years Experiance</p></div>
                    <div className="col-md-3 col-sm-6"><h1>250+</h1><p>Happy Clients</p></div>
                    <div className="col-md-3 col-sm-6"><h1>650+</h1><p>Projects Done</p></div>
                    <div className="col-md-3 col-sm-6"><h1>38</h1><p>Get Awards</p></div>
                </div>
            </div>
        </div>
    )
}