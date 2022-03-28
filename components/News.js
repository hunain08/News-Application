/** @format */

import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
    static defaultProps = {
        country: "in",
        pagination: 8,
        category: "general",
    };
    static propTypes = {
        country: PropTypes.string,
        pagination: PropTypes.number,
        category: PropTypes.string,
    };
    capitalize = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    };
    articles = [];
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0,
        };
        let title = `${this.props.category} Top-News `;
        document.title = this.capitalize(title);
    }

    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=80a3afbde97c4898a30b5e58e05d49c5&page=1&pageSize=${this.props.pagination}`;
        this.setState({
            loading: true,
        });
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    }
    fetchMoreData = async () => {
        this.props.setProgress(0);
        this.setState({
            page: this.state.page + 1,
        });
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?${this.props.country}&category=${this.props.category}&apiKey=80a3afbde97c4898a30b5e58e05d49c5&page=1&pageSize=${this.props.pagination}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setProgress(30);
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        });
        this.props.setProgress(100);
    };
    // handleNext = async () => {
    //     if (
    //         !(
    //             this.state.page + 1 >
    //             Math.ceil(this.state.totalResults / this.props.pagination)
    //         )
    //     ) {
    //         this.setState({
    //             loading: true,
    //         });
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
    //             this.props.category
    //         }&apiKey=80a3afbde97c4898a30b5e58e05d49c5&page=${
    //             this.state.page + 1
    //         }&pageSize={this.props.pagination}`;
    //         this.setState({
    //             loading: true,
    //         });
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         this.setState({
    //             articles: parsedData.articles,
    //             page: this.state.page + 1,
    //             loading: false,
    //         });
    //     } else {
    //     }
    //     console.log("gfdg");
    // };
    // handlePrevious = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
    //         this.props.category
    //     }&apiKey=80a3afbde97c4898a30b5e58e05d49c5&page=${
    //         this.state.page - 1
    //     }&pageSize={this.props.pagination}`;
    //     let data = await fetch(url);
    //     this.setState({
    //         loading: true,
    //     });
    //     let parsedData = await data.json();
    //     this.setState({
    //         articles: parsedData.articles,
    //         page: this.state.page - 1,
    //         loading: false,
    //     });
    // };
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ margin: "30px" }}>
                    Top News - Headlines from{" "}
                    <b style={{ color: "grey" }}>
                        {this.capitalize(this.props.category)} Category
                    </b>
                </h2>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    scrollableTarget='scrollableDiv'>
                    <div className='row'>
                        {!this.state.loading &&
                            this.state.articles.map((element) => {
                                return (
                                    <div
                                        className='col-md-4'
                                        key={element.url}
                                        style={{
                                            marginTop: "1rem",
                                            marginBottom: "0.5rem",
                                        }}>
                                        <NewsItem
                                            title={
                                                element.title
                                                    ? element.title.slice(0, 47)
                                                    : ""
                                            }
                                            description={
                                                element.description
                                                    ? element.description.slice(
                                                          0,
                                                          100
                                                      )
                                                    : ""
                                            }
                                            source={element.author}
                                            date={element.createdAt}
                                            url={element.urlToImage}
                                            newsUrl={element.url}
                                            loader={<Loading />}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default News;
