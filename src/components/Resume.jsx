import React from "react";

export default function Resume() {
    return (
        <div className="resume w-100 mt-5" id="resume">
            <div className="container">
                <h1 className="text-center">
                    <p className="textAbout textserv">Summary</p>
                    <p className="textKnow servKnow">Resume</p>
                    <hr className="hrKnow" />
                </h1>

                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <h3>My Education</h3>
                        <div className="card p-3 mt-5 mb-5">
                            <h3>Computer Science</h3>
                            <p style={{ color: "red" }}>During My Institut Period</p>
                            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                        <div className="card p-3 mt-5 mb-5">
                            <h3>Bachelor Degree</h3>
                            <p style={{ color: "red" }}>Fergana Polytechnic Institute</p>
                            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3>My Experience</h3>
                        <div className="card p-3 mt-5 mb-5">
                            <h3>Jr. Product Designer</h3>
                            <p style={{ color: "red" }}>Dribbble</p>
                            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                        <div className="card p-3 mt-5 mb-5">
                            <h3>Product Designer</h3>
                            <p style={{ color: "red" }}>Adobe</p>
                            <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <h3>My Skills</h3>
                    <div className="col-md-6 col-sm-12">
                        <div className="position-relative mt-3">
                            <div className="position-absolute top-0 start-0">Web Design</div>
                            <div className="position-absolute top-0 end-0">60%</div>
                        </div>
                        <div className="progress mb-5 mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="position-relative mt-3">
                            <div className="position-absolute top-0 start-0">HTML/CSS</div>
                            <div className="position-absolute top-0 end-0">85%</div>
                        </div>
                        <div className="progress mb-5 mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="position-relative mt-3">
                            <div className="position-absolute top-0 start-0">JavaScript</div>
                            <div className="position-absolute top-0 end-0">75%</div>
                        </div>
                        <div className="progress mb-5 mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="position-relative mt-3">
                            <div className="position-absolute top-0 start-0">Bootstrap</div>
                            <div className="position-absolute top-0 end-0">90%</div>
                        </div>
                        <div className="progress mb-5 mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="position-relative mt-3">
                            <div className="position-absolute top-0 start-0">React JS</div>
                            <div className="position-absolute top-0 end-0">70%</div>
                        </div>
                        <div className="progress mb-5 mt-5">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}