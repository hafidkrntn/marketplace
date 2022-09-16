import bcrypt from 'bcryptjs'

const data = {
    
    users: [
        {
            name: "Admin",
            email: "radmin@gmail.com",
            password: bcrypt.hashSync("admin"),
            address: "Jakarta",
            phone: "+6289503843908",
            image: "./assets/images/sellers/ja.jpeg",
            isAdmin: true
        },
        {
            name: "Hafid",
            email: "hafidkrntn4@gmail.com",
            password: bcrypt.hashSync("ricpe"),
            address: "Tangerang",
            phone: "+6285156278510",
            image: "./assets/images/sellers/seller.png",
            isAdmin: false
        },
        {
            name: "Rifa",
            email: "rifatul@gmail.com",
            password: bcrypt.hashSync("ricpe"),
            address: "Pasuruan",
            phone: "+6281524321321",
            image: "./assets/images/sellers/seller.png",
            isAdmin: false
        }

    ],
    
    category: [
        {
            name: "Fashion"
        },
        {
            name: "Handphone"
        }
    ],

    products: [
        {
            name: "Sepatu",
            slug: "sepatu",
            category: "fashion",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
            price: "140000",
            image: "./assets/images/products/sepatu.png",
            seller: "Admin",
            sellerImage: "./assets/images/sellers/ja.jpeg"
        },
        {
            name: "Samsung",
            slug: "samsung",
            category: "Handphone",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime porro voluptatum pariatur perspiciatis, cupiditate deleniti voluptatibus. Laboriosam laudantium suscipit quis delectus, ab voluptates enim consectetur ipsum repudiandae vitae? Similique, nulla. Similique labore quos libero fuga nam et omnis, porro nostrum repellat molestias aut quidem recusandae ratione earum odio suscipit. Sit provident quae, saepe velit obcaecati fugit labore recusandae cum ea.",
            price: "1200000",
            image: "./assets/images/products/hp.png",
            seller: "Ricpe",
            sellerImage: "./assets/images/sellers/seller.png"
        },
    ]
}

export default data;