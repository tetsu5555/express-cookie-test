const faker = require("faker/locale/ja");
const fs = require("fs");
const uuidv1 = require('uuid/v1');

const users = [];
const maxLength = 100, max = 85, min = 16;

for (let i = 0; i < maxLength; i++) {
    const name = faker.name.lastName() + ' ' + faker.name.firstName();
    users.push({
        "id": i + 1,
        name: name,
        email: faker.internet.email(),
        telephone: faker.phone.phoneNumber(),
        created_at: faker.date.past(),
        updated_at: faker.date.past(),
        role: 0,
        purpose: 0,
        uid: uuidv1(),
        way_to_know: 0
    })
}

fs.writeFile('mocks/jsons/users.json', JSON.stringify(users), () => {
    console.log("users.jsonを作成しました");
});