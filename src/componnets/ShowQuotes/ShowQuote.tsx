import React from 'react';
import {quotesType} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";

interface Props {
  quote: quotesType
}

const ShowQuote: React.FC<Props> = ({quote}) => {
  const navigate = useNavigate();

  const deleteQuote = async () => {
    await axiosApi.delete('/quotes/' + quote.id + '.json');
    navigate('/delete');
  };

  return (
    <div className="card bg-secondary mt-2" style={{width: "60rem"}}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Category: {quote.category}</h5>
          <button className="btn btn-danger" onClick={deleteQuote}>Delete</button>
        </div>
        <h3 className="card-title">Author: {quote.author}</h3>
        <p className="card-text text-white">{quote.text}</p>
      </div>
    </div>
  );
};

export default ShowQuote;