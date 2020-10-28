// content to make sure the test is running

const { expect } = require("chai")

// test to see if tests are running at all: failing test: 
describe('Articles service object', function () {
  //   it(`should run the tests`, () => {
  //     expect(true).to.eql(false)
  //   })


  const ArticlesServices = require('../src/articles-service')

  describe(`getAllArticles()`, () => {
    it(`resolves all articles from 'blogful_articles', table`, () => {
      // test that ArticlesService.getAllArticles gets data from table
    })
  })
})