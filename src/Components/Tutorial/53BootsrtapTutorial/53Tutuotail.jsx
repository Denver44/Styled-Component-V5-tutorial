import React, { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-capitalize text-primary my-3">Welcome to My Page</h1>
        <div className="row">
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/1600x900/?water"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/1600x900/?nature"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://source.unsplash.com/1600x900/?Beauty"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
