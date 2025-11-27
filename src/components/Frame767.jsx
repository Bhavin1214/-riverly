// Frame767.jsx
import React from "react";
import "../styles/Frame767.css";

import articleImg1 from "../images/artical.png";
import articleImg2 from "../images/artical.png";
import articleImg3 from "../images/artical.png";
import { FaArrowRight } from "react-icons/fa6";

const POSTS = [
    {
        id: 1,
        authorImg: articleImg1,
        authorName: "Raphaëlle",
        date: "12/05/25",
        title: "Les meilleures croisières fluviales à découvrir en 2025",
        image: articleImg1,
    },
    {
        id: 2,
        authorImg: articleImg2,
        authorName: "Raphaëlle",
        date: "12/05/25",
        title: "Les meilleures croisières fluviales à découvrir en 2025",
        image: articleImg2,
    },
    {
        id: 3,
        authorImg: articleImg3,
        authorName: "Raphaëlle",
        date: "12/05/25",
        title: "Les meilleures croisières fluviales à découvrir en 2025",
        image: articleImg3,
    },
];

export default function Frame767() {
    return (
        <section className="frame767">
            {/* Header */}
            <div className="BR-header">
                <h2 className="BR-header-title">
                    Le <span>Blog Riverly</span>
                </h2>

                <div className="BR-header-link">
                    <span className="BR-header-link-text">Tous nos articles</span>
                    <FaArrowRight className="BR-header-link-arrow" />
                </div>
            </div>

            {/* Cards */}
            <div className="BR-cards">
                {POSTS.map((post) => (
                    <div key={post.id} className="BR-card">
                        <div
                            className="BR-card-image"
                            style={{ backgroundImage: `url(${post.image})` }}
                        />

                        <div className="BR-card-content">
                            <div className="BR-card-meta-line">
                                <div className="BR-card-author">
                                    <img src={post.authorImg} className="BR-author-img" alt="" />
                                    <span className="BR-author-text">par {post.authorName}</span>
                                </div>

                                <span className="BR-date">{post.date}</span>
                            </div>

                            <h3 className="BR-card-title">{post.title}</h3>

                            <div className="BR-read">
                                <span className="BR-read-text">Lire l’article</span>
                                <FaArrowRight className="BR-read-arrow" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="extraSpace"></div>
        </section>
    );
}
