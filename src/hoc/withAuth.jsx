"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const withAuth = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const loggedIn = localStorage.getItem("isAuthenticated");
      if (!loggedIn) {
        router.push("/assignment-5/question-14/login");
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return null; 
    }

    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;
