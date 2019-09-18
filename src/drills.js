require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

function search(searchTerm) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then( results => {
      console.log(results)
    })
}

function paginate(pageNumber) {
  const resultsPerPage = 5;
  const offset = resultsPerPage * (pageNumber - 1);

  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(resultsPerPage)
    .offset(offset)
    .then( results => {
      console.log(results)
    }) 
}

function addedAfter(daysAgo) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where('date_added', '>', knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo))
    .then( results => {
      console.log(results)
    })
}

function totalCost() {
  knexInstance
    .select('category')
    .from('shopping_list')
    .groupBy('category')
    .sum('price AS total')
    .then( results => {
      console.log(results)
    })
}

addedAfter(2);