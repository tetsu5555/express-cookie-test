const faker = require("faker/locale/ja");
const fs = require("fs");

const users = [];
const maxLength = 100, max = 85, min = 16;

for (let i = 0; i < maxLength; i++) {
    const name = faker.name.lastName() + ' ' + faker.name.firstName();
    users.push({
        id: i + 1,
        name: name,
        age: Math.floor(Math.random() * (max + 1 - min)) + min
    })
}

fs.writeFile('jsons/users.json', JSON.stringify(users), () => {
    console.log("users.jsonを作成しました");
});