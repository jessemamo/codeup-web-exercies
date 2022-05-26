

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//#2 .filter
let threeOrMre = users.filter(user => user.languages.length > 3);

console.log(" three or more:", threeOrMre);

//#3 .map
let strEmail = users.map(user => user.email)

console.log(strEmail);
console.log("email:", strEmail)
//#4 .reduce years Experience avg

let totalAvg = users.reduce((previousValue , currentValue ) => {
    console.log(previousValue)
    console.log(currentValue)
    return previousValue + currentValue
},0);
console.log(totalAvg);

//#5 .reduce longest email

let longestEmail = users.reduce((previousEmail, currentEmail) => {
    console.log(previousEmail.email);
    if (previousEmail.length < currentEmail.email.length) {
        previousEmail = currentEmail.email
    }
    return previousEmail
}, " ");
console.log(longestEmail);

//#6 .reduce to provide str of instructors
let instructors = users.reduce((previousValue, currentValue, currentIndex, array)=>{
    let delimiter = ",";
    if(currentIndex === (array.length-1)) delimiter = "."
    return previousValue + currentValue.name + delimiter + " ";


} "your onstructors are:");


console.log(instructors)

// bonus Use .reduce to get the unique list of languages from the list of users[arrays]

