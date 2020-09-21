'use strict'

const { userService } = require('./services/users')
const { articleService } = require('./services/articles')
// const { studentService } = require('./services/students')

// db connection and settings
const connection = require('./config/connection')

let userCollection 
let articleCollection
// let studentCollection

runUsersTask() 
runArticlesTask()
// runStudentsTask()

//-----------------------User Task-------------------
async function runUsersTask() {
  await connection.connect()
  await connection.get().dropCollection('users')
  userCollection = connection.get().collection('users')

  await userService.createUsers(userCollection)
  await userService.deleteOneUser(userCollection)
  await userService.updateFirstName(userCollection)
  await userService.findAllUsers(userCollection)
  await connection.close(userCollection)
}


// -----------------------Article Task-------------------
async function runArticlesTask() {
  await connection.connect()
  await connection.get().dropCollection('articles')
  articleCollection = connection.get().collection('articles')

  await articleService.createArticles(articleCollection)
  await articleService.updateTagList(articleCollection)
  await articleService.addTags(articleCollection)
  await articleService.findAllwithQuery(articleCollection)
  await articleService.pullTags(articleCollection)
  await connection.close(articleCollection)
}


//-----------------------Students Task-------------------
// async function runStudentsTask() {
//   await connection.connect()
//   await connection.get().dropCollection('students')
//   studentCollection = connection.get().collection('students')

//   await studentService.createStudents(studentCollection)
//   await studentService.findWorstHW(studentCollection)
//   await studentService.findBestQuizAndWorstHW(studentCollection)
//   await studentService.findBestQuizAndBestExam(studentCollection)
//   await studentService.averageScoreHW(studentCollection)
//   await studentService.deleteWithQuery(studentCollection)
//   await studentService.markWithQuery(studentCollection)
//   await studentService.groupByAverageGrade(studentCollection)
//   await connection.close(studentCollection)
// }
