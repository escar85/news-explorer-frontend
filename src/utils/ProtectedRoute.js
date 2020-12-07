import React from 'react';
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {

  React.useEffect(() => {
    if (!props.loggedIn) {
      props.redirectToLogin();
    }
  }, [])

  return (
    <Route>
      <>
        { props.loggedIn
          ? <Component {...props} />
          : <Redirect to="/" />
        }
      </>
    </Route>
  )
}

export default ProtectedRoute;
