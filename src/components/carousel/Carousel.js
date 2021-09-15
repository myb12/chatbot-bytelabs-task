import './Carousel.css';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Responsive extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <h2 className="news-feed-title"> News Feed </h2>
                <Slider {...settings}>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://st2.depositphotos.com/3364427/11786/i/600/depositphotos_117861802-stock-photo-orange-robot-holding-chat-bubble.jpg" alt="" />
                                <h5 className="card-title">Automate up to 40% of conversations and reduce your team’s workload.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://img.freepik.com/free-vector/chatbot-concept-background-realistic-style_23-2147831749.jpg?size=338&ext=jpg" alt="" />
                                <h5 className="card-title">Chatbot Flow Analytics - Create a Better Chatbot Experience.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://img.freepik.com/free-vector/chatbot-concept-background-with-mobile-device_23-2147826977.jpg?size=338&ext=jpg" alt="" />
                                <h5 className="card-title">How I Made $23.000 in High Ticket Sales After (Almost) Going Bankrupt.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0Dt9caW-dsyVf0ekrkemTnFR2U7HJE0a3LiFeB5wwT5Fcxjno28bvIR9c-KpZTb6KNs&usqp=CAU" alt="" />
                                <h5 className="card-title">How We Turned Cat Travel Bag Idea Into a $100K/year Side Business.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlc-ee1uixTTGC1qIOqIFMfALMirMblx8rzZcWc3DOCsVk5-PNbHx_yTy6M65QDXWxisE&usqp=CAU" alt="" />
                                <h5 className="card-title">How a Social Enterprise Used Chat to Boost Ticket Sales via Facebook.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg0kzwKJ_lSEFKkQSEt5IvyFELh5Tv2l0TUCxECGDsoXb-VJLlVlYnOYfZtJtfmAIkYg4&usqp=CAU" alt="" />
                                <h5 className="card-title">How Wicklewood’s Team of Two Used MYB to Compete with Ikea.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://media.istockphoto.com/vectors/cute-smiling-robot-chat-bot-say-hi-vector-modern-flat-cartoon-vector-id1073043564?k=20&m=1073043564&s=612x612&w=0&h=r8PPvBLMH9GjtofRu-l6yd8ydPH74rLRYrs5OAWdWqg=" alt="" />
                                <h5 className="card-title">How to Make a Chatbot [Easy Ways to Create Chatbots for Free].</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="carousel-card">
                            <div className="card-body">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9zOifOGGUhgxvJpSrhFxvlzfNrgcsgP6d2MO-GrJWs5bJrAbAYiGmML2Ls5Y9SX4Dig&usqp=CAU" alt="" />
                                <h5 className="card-title">Chatbot Flow Analytics - Create a Better Chatbot Experience.</h5>
                            </div>

                            <div className="card-footer">
                                <h5>Read full article</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}