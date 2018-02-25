import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, exact = false, path, authenticated }) => (
    <Route
        exact={exact}
        path={path}
        render={props => (
            authenticated 
                ? (React.createElement(component, props)) 
                : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        )}
    />
);

// PrivateRoute.propTypes = {
//     component: func.isRequired,
//     exact: bool,
//     path: string.isRequired,
//     authenticated: bool.isRequired,
//     location: object
// };

export default PrivateRoute;