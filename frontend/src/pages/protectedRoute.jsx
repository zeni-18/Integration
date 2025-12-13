import React from 'react'
import { Navigate } from 'react-router-dom';

export default function protectedRoute({children}) {
    const isLoginIn=localStorage.getItem("email");
  return (
    <div>
        {isLoginIn ? children : <Navigate to="/login"/>}
    </div>
  )
}
