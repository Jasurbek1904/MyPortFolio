import React from "react";
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import img4 from "../Images/img4.jpg"
import img5 from "../Images/img5.jpg"
import img6 from "../Images/img6.jpg"



export default function Portfolio() {
    return (
        <div className="portfolio w-100 bg-light" id="portfolio">
            <div className="container">
                <h1 className="text-center">
                    <p className="textAbout textserv">Portfolio</p>
                    <p className="textKnow servKnow">My Work</p>
                    <hr className="hrKnow" />
                </h1>
                <ul class="portfolio__type">
                    <li class="type__item item--active"><a href="#">All</a></li>
                    <li class="type__item"><a href="#">Design</a></li>
                    <li class="type__item"><a href="#">Brand</a></li>
                    <li class="type__item"><a href="">Photos</a></li>
                </ul>
                <div class="portfolio__gallery">
                    <div class="photo__item">
                        <img
                            class="gallery__photo"
                            src={img1}
                            alt="project 1 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                    <div class="photo__item">
                        <img
                            class="gallery__photo"
                            src={img2}
                            alt="project 4 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                    <div class="photo__item">
                        <img
                            class="gallery__photo"
                            src={img3}
                            alt="project 2 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                    <div class="photo__item" id="">
                        <img
                            class="gallery__photo"
                            src={img4}
                            alt="project 7 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                    <div class="photo__item" id="">
                        <img
                            class="gallery__photo"
                            src={img5}
                            alt="project 3 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                    <div class="photo__item" id="">
                        <img
                            class="gallery__photo"
                            src={img6}
                            alt="project 5 image"
                        />
                        <div class="project__desc">
                            <div class="desc__container">
                                <h3 class="project__title">Project Title</h3>
                                <p class="project__category">Category</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}