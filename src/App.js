import React from "react";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container bg-info">
          <a className="navbar-brand" href="#">
            Blogify
          </a>
          <form classNameName="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Yeni Blog
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default App;
