import React from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/CONSTS";

const ErrorPage = () => {
    return (
        <div>
            Error page
            <Link to={HOME_ROUTE}>to hm</Link>
        </div>
    );
};

export default ErrorPage;