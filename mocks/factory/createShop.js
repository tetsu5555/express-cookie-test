const faker = require("faker/locale/ja");
const fs = require("fs");

const shops = [];
const maxLength = 100,
    max = 85,
    min = 16;

for (let i = 0; i < maxLength; i++) {
    shops.push({
        "id": i + 1,
        "name": "バレリーナハウス",
        "ave_staying_time": Math.floor(Math.random() * 24),
        "free_comment": "店舗についてのフリーコメント",
        "other_comment": "その他のコメント",
        "user_id": Math.floor(Math.random() * 100),
        "business_category_id": 1,
        "estimated_reach": Math.floor(Math.random() * 10000),
        "inside_image": "aiueo.png",
        "outside_image": "aiueo.png",
        "telephone": faker.phone.phoneNumber(),
        "seating_capacity": Math.floor(Math.random() * 100),
        "private_room_num": 10,
        "private_room_capacity": 5,
        "shop_addresses": [{
            "postal_code": "3380003",
            "prefecture_id": 1,
            "address_1": "埼玉県",
            "address_2": "さいたま市"
        }],
        "shop_ages": [{
                "age": 0,
                "percentage": 10,
                "age_type": 0
            },
            {
                "age": 1,
                "percentage": 90,
                "age_type": 1
            }
        ],
        "shop_sexes": [{
                "sex": 0,
                "percentage": 90,
                "sex_type": 1
            },
            {
                "sex": 1,
                "percentage": 10,
                "sex_type": 0
            }
        ],
        "target_category_ids": [1, 2]
    })
}

fs.writeFile('@mocks_jsons/shops.json', JSON.stringify(shops), () => {
    console.log("shops.jsonを作成しました");
});