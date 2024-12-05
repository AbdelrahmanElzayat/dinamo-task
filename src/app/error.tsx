"use client";
import Link from "next/link";
import React from "react";

interface errorPageProps {
  error: Error;
  reset: () => void;
}

const ArticlesErrorPage = ({ error, reset }: errorPageProps) => {
  return (
    <div className="error-page">
      <div className="error-message">
        Something went wrong in fetching data!
      </div>
      <h2 className="error-details">Error Message: {error.message}</h2>
      <button className="retry-button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default ArticlesErrorPage;
