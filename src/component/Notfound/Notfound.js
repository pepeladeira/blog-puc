import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div style={{margin:'20% auto', textAlign:'center'}}> 
            <h1>404, Page Not Found</h1>
            <Link to="/home">Go To Home</Link>
        </div>
    );
};

export default Notfound;