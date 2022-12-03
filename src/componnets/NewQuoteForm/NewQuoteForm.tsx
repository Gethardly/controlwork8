import React, {useState} from 'react';
import {newQoteType} from "../../types";

interface Props {
  onSubmit: (quote: newQoteType) => void;
}

const NewQuoteForm: React.FC<Props> = ({onSubmit}) => {

  const [quote, setQuote] = useState<newQoteType>({
    author: '',
    category: '',
    text: '',
  });

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...quote
    })
  };

  const onQuoteChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setQuote(prev => ({...prev, [name]: value}));
  };
  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="mt-4">Add Quote</h4>
      <div className="form-group mt-3">
        <label htmlFor="name">Category</label>
        <select
          id="category" name="category"
          className="form-control form-select"
          onChange={onQuoteChange}
          value={quote.category}
        >
          <option>Star-wars</option>
          <option>Famous people</option>
          <option>humour</option>
          <option>motivational</option>
        </select>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="name">Author</label>
        <input
          id="author" name="author" type="text"
          className="form-control"
          onChange={onQuoteChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="description">Text</label>
        <textarea
          id="text" name="text"
          className="form-control"
          onChange={onQuoteChange}
        />
      </div>
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
};

export default NewQuoteForm;