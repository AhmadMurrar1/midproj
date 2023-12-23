// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ path, element: Element, isLoggedIn }) {
  return (
    isLoggedIn ? <Route path={path} element={<Element />} /> : <Navigate to="/" replace />
  );
}

export default PrivateRoute;
