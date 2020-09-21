'use strict'

///### Articles

const articles = require('./articles.json')

// Create 5 articles per each type (a, b, c)
async function createArticles(articleCollection) {
    try {
      
      const { result } = await articleCollection.insertMany(articles)

      console.log('created:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }

// Find articles with type a, and update tag list with next value [‘tag1-a’, ‘tag2-a’, ‘tag3’]
async function updateTagList(articleCollection) {
    try {
      
      const query = {"type": "a"};
      const update = {$set: {"tags": ["tag1-a", "tag2-a", "tag3"]}};
      const {result}  = await articleCollection.updateMany(query, update);
      console.log('updated:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }

 // Add tags [‘tag2’, ‘tag3’, ‘super’] to other articles except articles from type a 
async function addTags(articleCollection) {
    try {
      
      const query = { "type": {$ne: "a"} };
      const update = {$set: {"tags": ["tag2", "tag3", "super"]}};
      const {result}  = await articleCollection.updateMany(query, update);
      console.log('added tags:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }

// Find all articles that contains tags [tag2, tag1-a]
async function findAllwithQuery(articleCollection) {
    try {
      const query = { "tags": { $in: ["tag2", "tag1-a"] } } //or we can use $all if want to match both of values 
      const result  = await articleCollection.find(query).toArray();
      console.log('find:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }

// Pull [tag2, tag1-a] from all articles
async function pullTags(articleCollection) {
    try {
  
      const query = {};
      const update = {$pullAll: {"tags": ["tag2", "tag1-a"]}};
      const {result}  = await articleCollection.updateMany(query, update);
      console.log('pull:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }

  module.exports.articleService = {
    createArticles,
    updateTagList,
    addTags,
    findAllwithQuery,
    pullTags
}