// making a service obj first involves making an object that we'll export

const ArticlesService = {
  // method to get all articles
  getAllArticles(knex) {
    return knex.select('*').from('blogful_articles')
  }
}


module.exports = ArticlesService