/** @format */

import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import { useState } from "react";

function App() {
    const [Progress, setProgress] = useState(0);

    return (
        <BrowserRouter>
            <LoadingBar
                height={3}
                color='#f11946'
                progress={Progress}
                onLoaderFinished={() => setProgress(Progress)}
            />
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={
                        <News
                            setProgress={setProgress}
                            key='general'
                            pagination={15}
                            country='in'
                            category='general'
                        />
                    }
                />
                <Route
                    path='/business'
                    element={
                        <News
                            setProgress={setProgress}
                            key='business'
                            pagination={15}
                            country='in'
                            category='business'
                        />
                    }
                />
                <Route
                    path='/entertainment'
                    element={
                        <News
                            setProgress={setProgress}
                            key='entertainment'
                            pagination={15}
                            country='in'
                            category='entertainment'
                        />
                    }
                />
                <Route
                    path='/general'
                    element={
                        <News
                            setProgress={setProgress}
                            key='general'
                            pagination={15}
                            country='in'
                            category='general'
                        />
                    }
                />
                <Route
                    path='/health'
                    element={
                        <News
                            setProgress={setProgress}
                            key='health'
                            pagination={15}
                            country='in'
                            category='health'
                        />
                    }
                />
                <Route
                    path='/science'
                    element={
                        <News
                            setProgress={setProgress}
                            key='science'
                            pagination={15}
                            country='in'
                            category='science'
                        />
                    }
                />
                <Route
                    path='/sports'
                    element={
                        <News
                            setProgress={setProgress}
                            key='sports'
                            pagination={15}
                            country='in'
                            category='sports'
                        />
                    }
                />
                <Route
                    path='/technology'
                    element={
                        <News
                            setProgress={setProgress}
                            key='technology'
                            pagination={15}
                            country='in'
                            category='technology'
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
