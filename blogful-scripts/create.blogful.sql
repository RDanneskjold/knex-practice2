CREATE TABLE IF NOT EXISTS blogful_articles (
  article_id SERIAL PRIMARY KEY,
  title TEXT UNIQUE NOT NULL,
  date_published TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  content TEXT
);