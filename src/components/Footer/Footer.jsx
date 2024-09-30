import React, { Component,useState, useEffect } from "react"
import Link from "components/_ui/Link/Link";
import Icon from "components/_ui/Icon/Icon";
import image from "./book.png"

import "./Footer.scss"
import NewsletterSignup from "components/_shared/NewsletterSignup/NewsletterSignup";

import { getCategory } from "../../apis/index"

const Footer = ({ location }) => {

    const pathname = location?.pathname || '/';
        const [category, setCategory] = useState(null);


        useEffect(() => {
    const fetchCategory = async () => {
            try {
                const result = await getCategory();
                console.log({result})
                setCategory(result);
            } catch (error) {
                console.error("获取分类时出错:", error);
            }
            };

            fetchCategory();
        }, []);

        return (
            <footer className="Footer">
                {/* <Link href="http://fullstack.io/fullstack-d3">
                    <img src={image} alt="Fullstack D3 & Data Visualization" className="Footer__image" />
                </Link> */}
                <div className="Footer__text">
                    <div className="Footer__name">
                        LeahLin © 2024
                    </div>
                    <div className="Footer__siblings">
                        <div className="Footer__links">
                            {pathname != "/" && (
                                <Link className="Footer__link" to="/">
                                    <img src="https://twemoji.maxcdn.com/2/svg/1f44b.svg" className="Footer__link__emoji" alt="wave" />
                                    Go home
                                </Link>
                            )}
                            {/* <Link className="Footer__link" href="http://twitter.com/wattenberger">
                                <img src="https://twemoji.maxcdn.com/2/svg/1f426.svg" className="Footer__link__emoji" alt="bird" />
                                Ask me anything on Twitter
                            </Link>
                            <Link className="Footer__link" href="http://fullstack.io/fullstack-d3">
                                <img src="https://twemoji.maxcdn.com/2/svg/1f4d6.svg" className="Footer__link__emoji" alt="book" />
                                Learn how to make amazing data visualizations
                            </Link>
                            <Link className="Footer__link" to="/rss">
                                <Icon name="rss" className="Footer__link__icon" alt="book" />
                                RSS
                            </Link> */}

                        </div>

                        {/* {!["/thanks-for-signing-up", "/keep-in-touch"].includes(pathname) && (
                            <NewsletterSignup className="Footer__signup" />
                        )} */}
                    </div>
                </div>

            </footer>
        )
}

export default Footer
