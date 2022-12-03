export interface quotesList {
  [id: string]: quotesType;
}

export interface quotesType {
  id: string;
  author: string;
  category: string;
  text: string;
}

export type newQoteType = Omit<quotesType, 'id'>;
