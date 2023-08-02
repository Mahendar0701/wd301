import React from "react";

const NotfoundPage: React.FC = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>Page not found</h1>
      <button
        id="backToHomeButton"
        className="px-3 py-1 my-3 bg-gray-200 hover:bg-gray-300 rounded"
      >
        <a href="/home">Back to home</a>
      </button>
    </div>
  );
};

export default NotfoundPage;
