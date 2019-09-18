BEGIN;

INSERT INTO blogful_articles (title, date_published, content)
VALUES 
  ('1', now() - '21 days'::INTERVAL, '1'),
  ('2', now() - '21 days'::INTERVAL, '2'),
  ('3', now() - '21 days'::INTERVAL, '3'),
  ('4', now() - '21 days'::INTERVAL, '4'),
  ('5', now() - '20 days'::INTERVAL, '5'),
  ('6', now() - '20 days'::INTERVAL, '6'),
  ('7', now() - '20 days'::INTERVAL, '7'),
  ('8', now() - '15 days'::INTERVAL, '8'),
  ('9', now() - '15 days'::INTERVAL, '9'),
  ('10', now() - '13 days'::INTERVAL, '10'),
  ('11', now() - '13 days'::INTERVAL, '11'),
  ('12', now() - '10 days'::INTERVAL, '12'),
  ('13', now() - '10 days'::INTERVAL, '13'),
  ('14', now() - '10 days'::INTERVAL, '14'),
  ('15', now() - '10 days'::INTERVAL, '15'),
  ('16', now() - '10 days'::INTERVAL, '16'),
  ('17', now() - '10 days'::INTERVAL, '17'),
  ('18', now() - '10 days'::INTERVAL, '18'),
  ('19', now() - '10 days'::INTERVAL, '19'),
  ('20', now() - '10 days'::INTERVAL, '20');

COMMIT;