import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Error 404, Page not found !</h1>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}

export default ErrorPage;
