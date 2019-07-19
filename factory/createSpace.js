const faker = require("faker/locale/ja");
const fs = require("fs");

const spaces = [];
const maxLength = 4000, shop_count = 100;

for (let i = 0; i < maxLength; i++) {
    spaces.push(
        {
            "id": i + 1,
            "image": "aieqqqu.png",
            "shop_id": Math.floor(Math.random() * shop_count) + 1,
            "publication_num": 12,
            "media_category_id": 1,
            "space_category_id": 1
        }
    )
}

fs.writeFile('jsons/spaces.json', JSON.stringify(spaces), () => {
    console.log("spaces.jsonを作成しました");
});