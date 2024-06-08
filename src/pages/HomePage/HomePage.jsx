import React from 'react';
import {Link} from "react-router-dom";
import {ERROR_ROUTE} from "../../utils/CONSTS";

const HomePage = () => {
    return (
        <div>
            Home page
            <Link to={ERROR_ROUTE}>to err</Link>
        </div>
    );
};

export default HomePage;