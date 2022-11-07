import React, { useEffect, useState } from "react";
import axios from "axios";
import img_url from '../src/assets/images/meeting-01.jpg';

function Upcoming()
{
    const baseURL = "http://localhost/api/public/section";

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const client = axios.create({
        baseURL: baseURL
    });

    useEffect(() => {
        client.get('/3').then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });
    }, []);


    const [posts2, setPosts2] = useState([]);

    useEffect(() => {
        client.get('/4?limit=4').then((response) => {
            console.log(response.data);
            setPosts2(response.data);
        });
    }, []);

    return (<>
    <section className="upcoming-meetings" id="meetings">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Upcoming Meetings</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="categories">
                    {
                        posts.map((post, i) => {
                            return (
                            <div key={`sec1${i}`}>
                                <h4>{post.contentTitle}</h4>
                                <div dangerouslySetInnerHTML={{__html: post.contentDescription}}></div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                    {
                        posts2.map((post, i) => {
                            return (
                                <div className="col-lg-6" key={`sec2${i}`}>
                                    <div className="meeting-item">
                                    <div className="thumb">
                                        <a href="#"><img src={img_url} alt={post.contentTitle} /></a>
                                    </div>
                                    <div className="down-content">                                
                                        <a href="#"><h4>{post.contentTitle}</h4></a>
                                        <div dangerouslySetInnerHTML={{__html: post.contentDescription}}></div>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>)
}
export default Upcoming;