
// #### Students

const students = require('./students.json');


// Create students from json file
async function createStudents(studentCollection) {
    try {
      
      const { result } = await studentCollection.insertMany(students)
      console.log('created:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
    }
  }


// Find all students who have the worst score for homework, sort by descent
async function findWorstHW(studentCollection) {

    try {
      
    const result = await studentCollection.aggregate([
      { $unwind: { path: "$scores" }},

      // Filter to 'homework' scores 
      { $match: {
          "scores.type": "homework"
      }},

      // Sort in descending order
      { $sort: { 'scores.score': 1 }},
    ]
   ).limit(10).toArray();

   console.log('the worst 10 homework scores:', result);
    console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}
  
// Find all students who have the best score for quiz and the worst for homework, sort by ascending
async function findBestQuizAndWorstHW(studentCollection) {

    try {
      
    //   const result = await studentCollection.aggregate([
    //     { $unwind: { path: "$scores" }},
  
    //     // Filter to 'homework' scores 
    //     { $match: {$and: [{"scores.type": "homework"}, {"scores.type": "quiz"} ]}},
  
    //     // Sort in descending order
    //     // { $sort: { 'scores.score': -1 }},
      
    //   ]
    //  ).limit(10).toArray();

      // console.log('the best:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}

// Find all students who have best scope for quiz and exam
async function findBestQuizAndBestExam(studentCollection) {

    try {
      
 
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}

//Calculate the average score for homework for all students
async function averageScoreHW(studentCollection) {

    try {

    //   const result = await studentCollection.aggregate([
    //     { $unwind: { path: "$scores" }},
    //     { $match: {
    //         "scores.type": "homework"
    //     }},
    //     {
    //       $group:
    //         {
    //           _id: "$item",
    //           avgAmount: { $avg: { $multiply: [ "$price", "$quantity" ] } },
    //           avgQuantity: { $avg: "$quantity" }
    //         }
    //     }
    //   ]
    //  );
  
      
      // console.log('average score:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}


//Delete all students that have homework score <= 60
async function deleteWithQuery(studentCollection) {

    try {
      
  
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}

// Mark students that have quiz score => 80
async function markWithQuery(studentCollection) {

    try {
      
  
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}


//Write a query that group students by 3 categories (calculate the average grade for three subjects)
//        - a => (between 0 and 40)
//        - b => (between 40 and 60)
//        - c => (between 60 and 100)
async function groupByAverageGrade(studentCollection) {

    try {
      
      
   
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}


module.exports.studentService = {
    createStudents,
    findWorstHW,
    findBestQuizAndWorstHW,
    findBestQuizAndBestExam,
    averageScoreHW,
    deleteWithQuery,
    markWithQuery,
    groupByAverageGrade
}