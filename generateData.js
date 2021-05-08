const faker = require('faker');
const fs = require("fs");


const generateUsersData = (number) => {
    const users = [];
    for (let index = 0; index < number; index++) {
        users.push({
            "birth": faker.date.past(),
            "email": faker.internet.email(),
            "firstName": faker.name.firstName(),
            "friends": [... generateFriendsListData(3)],
            "gender": faker.name.gender() ,
            "id": index,
            "job": faker.name.jobTitle(),
            "lastName": faker.name.lastName(),
            "location": faker.address.country(),
            "password": faker.internet.password(),
            "profilePicture": faker.image.avatar(),
            "school": faker.address.streetName()
          });         
        
    }
    return users;
}



const generatePostsData = (number) => {
    const posts = [];
    for (let index = 0; index < number; index++) {
        posts.push( {
            "date": faker.date.past(),
            "id": number,
            "image": faker.image.avatar(),
            "likersList": [... generateLikersListData(3)],
            "text": faker.lorem.text(),
            "title": faker.lorem.words(),
            "userId": 2
          });         
        
    }
    return posts ;
}

const generateCommentsData = (number) => {
    const comments = [];
    for (let index = 0; index < number; index++) {
        comments.push({
            "date": faker.date.past(),
            "id": number,
            "likersList":  [... generateLikersListData(3)],
            "postId": 2,
            "text": faker.lorem.sentences(),
            "userId": index
          });         
        
    }
    return comments ;
}

const generateMessagesData = (number) => {
    const messages = [];
    for (let index = 0; index < number; index++) {
        messages.push( {
            "date": faker.date.past(),
            "id": number,
            "receiverId": 1,
            "senderId": 2,
            "text": faker.lorem.text()
          });         
        
    }
    return messages ;
}


const generateFriendsListData = (number) => {
    const friends = [];
    for (let index = 0; index < number; index++) {
        friends.push({
            "id": index,
          });         
        
    }
    return friends;
}

const generateLikersListData = (number) => {
    const likers = [];
    for (let index = 0; index < number; index++) {
        likers.push({
            "id": index,
          });         
        
    }
    return likers;
}


fs.writeFileSync(
    "./db.json",
    JSON.stringify({ 
        users: generateUsersData(3),
        comments: generateCommentsData(3),
        posts: generatePostsData(3),
        messages: generateMessagesData(3)
     })
  );

