require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

const searchTerm = ' '
////////////////////////////////////////////////
//1. GET ALL ITEMS THAT CONTAIN TEXT //
////////////////////////////////////////////////
function searchByName(searchTerm) {
  knexInstance
    .select( '*')
    .from('shopping-list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result)
      console.log('SEARCH TERM', {searchTerm})
    })
}
searchByName('not dogs')

////////////////////////////////////////////////
//2. GET ALL ITEMS PAGINATED  //
////////////////////////////////////////////////
function paginateProducts(pageNumber) {
  const productsPerPage = 6
  const offset = productsPerPage * (page - 1)
  knexInstance 
    .select('*')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result)
      console.log('PAGINATE ITEMS', { page })
  })
}
paginateProducts(2)

////////////////////////////////////////////////
//3. GET ALL ITEMS ADDED AFTER DATE
////////////////////////////////////////////////
function addedAfterDate(daysAgo) {
  knexInstance
    .select('name', 'price', 'category', 'checked', 'date_added')
    .from('shopping_list')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log(result)
    })
}

addedAfterDate(6)

////////////////////////////////////////////////
//4. GET TOTAL COST FOR EACH CATEGORY
////////////////////////////////////////////////

function totalCost() {
  knexInstance
    .select('category')
    .sum('price as total')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
    console.log(result)
  })
}