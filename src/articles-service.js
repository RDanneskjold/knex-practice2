
const ArticlesService = {
  getAllArticles(knex) {
    return knex.select('*').from('blogful_articles');
  },

  insertArticle(knex, newArticle) {
    return knex
      .insert(newArticle)
      .into('blogful_articles')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },

  getById(knex, id) {
    return knex.select('*').from('blogful_articles').where('article_id', id).first()
  },

  deleteArticle(knex, article_id) {
    return knex('blogful_articles')
      .where({ article_id })
      .delete()
  },

  updateArticle(knex, article_id, newData) {
    return knex('blogful_articles')
      .where({ article_id })
      .update(newData)
  },
}

module.exports = ArticlesService