export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            length: 3,
            location: "Carribean",
            species: "Yellow Watchman Goby",
            image: "https:cdn.shopify.com/s/files/1/0092/5161/8878/products/Yellow_Watchman_grande.jpg?v=1579106961"
        },
        {
            name: "Jeff",
            food: "feeder fish",
            length: 6,
            location: "Indian Ocean",
            species: "Green Wrasse",
            image: "https://saltwateraquarist.com/wp-content/uploads/2018/07/Lime-GreenBanana-Wrasse.jpg"

        },
        {
            name: "Steve",
            food: "cheez-its",
            length: 1,
            location: "Gulf of Mexico",
            species: "Angel Fish",
            image: "https://petesaquariums.com/wp-content/uploads/Blue-Koran-Angelfish.png"
        },
        {
            name: "Karen",
            food: "algae",
            length: 4,
            location: "Carribean",
            species: "Clown Fish",
            image: "https://i.natgeofe.com/n/9f5bf33c-df4f-430c-873d-83ced10cc289/3245010_3x2.jpg"
        },
        {
            name: "Dory",
            food: "crustaceans",
            length: 6,
            location: "Pacific Ocean",
            species: "Green Moray",
            image: "https://i.ytimg.com/vi/i-qdp_I6ZGs/maxresdefault.jpg"
        }
        
    ]
}



