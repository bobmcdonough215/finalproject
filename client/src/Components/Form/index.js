import React from "react";
import "./Form.css";
export function Input(props) {
  return (
    <div className="form-group">
      
      <input className="form-control" {...props} />
    </div>
  );
}


export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success buttons">
      {props.children}
    </button>
  );
}
