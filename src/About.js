import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';

function About()
{

    const baseURL = "http://localhost/api/public/section";

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    

    const client = axios.create({
        baseURL: baseURL
    });

    useEffect(() => {
        client.get('/5').then((response) => {
           setPosts(response.data);
        });
    }, []);

    const [posts2, setPosts2] = useState([]);

    useEffect(() => {
        client.get('/6?limit=6').then((response) => {
           setPosts2(response.data);
        });
    }, []);

    return <>
    <section className="apply-now" id="apply">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 align-self-center">
                    <div className="row">
                    {
                        posts.map((post, i) => {
                            return (
                            <div className="col-lg-12" key={`about${i}`}>
                                <div className="item">
                                    <h3>{post.contentTitle}</h3>
                                    <div dangerouslySetInnerHTML={{__html: post.contentDescription}}></div>
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="accordions is-first-expanded">
                        <Accordion defaultActiveKey="0" >
                        {
                            posts2.map((post, i) => {
                                return (
                                    <Accordion.Item eventKey={i} key={`acc$(i)`}>
                                        <Accordion.Header>{post.contentTitle}</Accordion.Header>
                                        <Accordion.Body dangerouslySetInnerHTML={{__html: post.contentDescription}}>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                )
                            })
                        }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>;
}

export default About;