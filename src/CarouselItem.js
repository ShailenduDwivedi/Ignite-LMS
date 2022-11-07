import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img_url from '../src/assets/images/service-icon-01.png';



function CarouselItem()
{
    const baseURL = "http://localhost/api/public/section";

    const [posts, setPosts] = useState([]);
    const [posts2, setPosts2] = useState([]);
    const [error, setError] = useState(null);

    const client = axios.create({
        baseURL: baseURL
    });

    useEffect(() => {
        client.get('/2?page=1').then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });
    }, []);

    useEffect(() => {        
        client.get('/2?page=2').then((response) => {
            console.log(response.data);
            setPosts2(response.data);
        });
    }, []);

    return (<>
        <section className="services">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="owl-service-item owl-carousel">

                        <Carousel showThumbs={false} autoPlay={true} labels={false} showStatus={false}>
                        <div>
                        {
                            posts.map((post, i) => {
                                return (
                                    <div className="item" key={`car${i}`}>
                                        <div className="icon">
                                            <img src={img_url} alt={`img-${i}`} />
                                        </div>
                                        <div className="down-content">
                                            <h4>{post.contentTitle}</h4>
                                            <p dangerouslySetInnerHTML={{__html: post.contentDescription}}></p>
                                        </div>
                                    </div>
                                )                                
                            })
                        }
                        </div>
                        <div>
                        {
                            posts2.map((post, i) => {
                                return (
                                    <div className="item" key={`sec${i}`}>
                                        <div className="icon">
                                            <img src={img_url} alt={`img-${i}`} />
                                        </div>
                                        <div className="down-content">
                                            <h4>{post.contentTitle}</h4>
                                            <p dangerouslySetInnerHTML={{__html: post.contentDescription}}></p>
                                        </div>
                                    </div>
                                )                                
                            })
                        }
                        </div>
                        
                        </Carousel>                       
                        
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default CarouselItem;