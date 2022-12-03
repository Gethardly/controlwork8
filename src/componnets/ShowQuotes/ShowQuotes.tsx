import React, {ReactNode, useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {quotesList, quotesType} from "../../types";
import ShowQuote from "./ShowQuote";
import axiosApi from "../../axiosApi";

interface Props {
  quotes?: quotesType[]
}

const ShowQuotes: React.FC<Props> = ({quotes}) => {
  const {category} = useParams();
  const [categoryQuotes, setCategoryQuotes] = useState<quotesType[]>([]);

  const getCategory = useCallback(async () => {
    const categoryResponse = await axiosApi.get<quotesList>('/quotes.json?orderBy="category"&equalTo="' + category + '"');
    const categoryQuotes = Object.keys(categoryResponse.data).map(key => {
      const categoryQuote = categoryResponse.data[key];
      categoryQuote.id = key
      return categoryQuote;
    });
    setCategoryQuotes(categoryQuotes);
  }, [category]);

  useEffect(() => {
    getCategory().catch(console.error);
  }, [category, getCategory]);

  let allQuotes: ReactNode;

  if (quotes !== undefined) {
    allQuotes = (<>

      {quotes.map(quote => (<ShowQuote key={quote.id} quote={quote}/>))}
    </>)
  } else {
    allQuotes = (<>
      {categoryQuotes.map(quote => (<ShowQuote key={quote.id} quote={quote}/>))}
    </>)
  }
  return (
    <div className="m-3 ms-5">
      <h3>{quotes ? 'All categories' : category}</h3>
      {allQuotes}
    </div>
  );
};

export default ShowQuotes;