/** @format */

import React, { Component } from "react";
import loading from "../../src/loading.gif";
export class Loading extends Component {
    render() {
        return (
            <div
                className='text-center'
                style={{ height: "10rem", color: "#fff" }}>
                <img src={loading} />,
            </div>
        );
    }
}

export default Loading;
