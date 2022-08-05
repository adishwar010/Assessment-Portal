import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const ResultDropDown = () => {
  
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">Marks:</div>
          <div className="col">Class Average:</div>
        </div>
        <div className="row heading">
          <div className="">
            <h6 className="mt-3">Weak</h6>
            
          </div>
        </div>

        <div className="row heading">
          <div className="">
            <h6 className="mt-3">Strong Topics</h6>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultDropDown;
