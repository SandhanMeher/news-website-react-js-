import React from "react";

export default function Card(props) {
  return (
    <div className="container my-5">
      <div className="card text-center">
        <div className="card-header">Jocks :  {props.obj.category}</div>
        <div className="card-body">
          <h5 className="card-title my-5">{props.obj.setupp}</h5>
          <h5 className="card-title my-5">{props.obj.delii}</h5>
          {/* <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p> */}
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
}
