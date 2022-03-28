/** @format */

import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, url, newsUrl,source,date } = this.props;
        return (
            <div>
                <div className='card'>
                    <img
                        src={
                            !url
                                ? "https://image.cnbcfm.com/api/v1/image/106960914-1634273936901-gettyimages-1235872203-JAPAN_DAIWA.jpeg?v=1648088211&w=1920&h=1080"
                                : url
                        }
                        className='card-img-top'
                        alt='...'
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text'>{description}...</p>
                        <p className='card-text'>{source}</p>
                        <p className='card-text'>{date}</p>
                        <a
                            href={newsUrl}
                            className='btn btn-dark'
                            target='_blank'
                            rel='noreferrer'>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
