import React from "react";
import ReactDOM from "react-dom";

import Banner from "./components/Banner";
import Jobs from "./components/Jobs";
import NewJob from "./components/Newjob";

ReactDOM.render(
    <div>
        <Banner/>
        <Jobs/>
        <NewJob/>
    </div>, document.getElementById("root"));