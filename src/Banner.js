import React, { useEffect, useState } from "react";
import axios from "axios";

function Banner()
{
    const baseURL = "http://localhost/api/public/section/1";

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const client = axios.create({
        baseURL: baseURL
    });

    useEffect(() => {
        client.get().then((response) => {
            console.log(response.data);
            setPosts(response.data);
        });
    }, []);

    return <>
        <div className="video-overlay header-text">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                {
                    posts.map((post, i) => {
                        return (
                            <div className="caption" key={i}>
                                <h6>{post.contentTitle}</h6>
                                <div dangerouslySetInnerHTML={{__html: post.contentDescription}}></div>
                                <div className="main-button-red">
                                    <div className="scroll-to-section"><a href="#contact">Join Us Now!</a></div>
                                </div>
                            </div>
                        )
                    })
                }
                    
                </div>
            </div>
            </div>
        </div>
    </>;
}

export default Banner;