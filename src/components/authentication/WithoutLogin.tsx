import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const WithoutLogin = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div>
      {children}
    </div>
  );
};

export default WithoutLogin;
