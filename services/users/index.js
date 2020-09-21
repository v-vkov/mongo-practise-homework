// #### Users

const {mapUser, getRandomFirstName} = require('../../util');
const users = require('./users.json');

// - Create 2 users per department (a, b, c)
async function createUsers(userCollection) {

    try {
      const { result } = await userCollection.insertMany(users);
      console.log('created:', result);
      console.log('-----------');
  
    } catch (err) {
      console.error(err)
        }   
}
  
// - Delete 1 user from department (a)
async function deleteOneUser(userCollection) {
    try {
        const query = {"department" : "a" };
        const { result } = await userCollection.deleteOne(query);
        console.log('deleted:', result);
        console.log('-----------');

    } catch (err) {
        console.error(err)
        }
}


// - Update firstName for users from department (b)
async function updateFirstName(userCollection) {
    try {
        const query = {"department": "b"}
        const update = {$set: {"firstName": "updated"}};
        const { result } = await userCollection.updateMany(query, update);
        console.log('updated:', result);
        console.log('-----------');

    } catch (err) {
        console.error(err)
        }
}


// - Find all users from department (c)
async function findAllUsers(userCollection) {
    try {
        const query = {"department": "c"}
        const result  = await userCollection.find(query).toArray();
        console.log('find:', result);
        console.log('-----------');
    } catch (err) {
        console.error(err)
        }
}


module.exports.userService = {
    createUsers,
    deleteOneUser,
    updateFirstName,
    findAllUsers
}