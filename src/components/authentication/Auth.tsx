import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      {children}
    </>
  );
};

export default Auth;
