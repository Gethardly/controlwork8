import React from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import NewQuoteForm from "../../componnets/NewQuoteForm/NewQuoteForm";
import {newQoteType} from "../../types";

const NewQuote = () => {
  const navigate = useNavigate();
  const createQuote = async (quote: newQoteType) => {
    try {
      await axiosApi.post('/quotes.json', quote)
      navigate('/');
    } finally {

    }
  };
  return (
    <div>
      <NewQuoteForm key={'newqotesform'} onSubmit={createQuote}/>
    </div>
  );
};

export default NewQuote;