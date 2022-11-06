import React from "react";
//import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img_url from '../src/assets/images/service-icon-01.png';



function CarouselItem()
{
    const data = [
        {
            'img': img_url,
            'title': 'Best Education',
            'content': 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.'
        },
        {
            'img': img_url,
            'title': 'Best Education',
            'content': 'Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum.'
        }
    ];

    return (<>
        <section className="services">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="owl-service-item owl-carousel">

                        <Carousel showThumbs={false} autoPlay={true} labels={false} showStatus={false}>
                        <div>
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                        </div>
                        <div>    
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="icon">
                                    <img src={img_url} />
                                </div>
                                <div className="down-content">
                                    <h4>Legend</h4>
                                    <p>Legenddsfdsfsdfdf  dsfsd fsdfsdf sdf</p>
                                </div>
                            </div>
                            </div>
                        </Carousel>
                        
                        {/* {
                            data.map(val => (

                                <div className="item">
                                    <div className="icon">
                                        <img src={val.img} alt={val.title} />
                                    </div>
                                    <div className="down-content">
                                        <h4>{val.title}</h4>
                                        <p>{val.content}</p>
                                    </div>
                                </div>

                            ))

                        } */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default CarouselItem;