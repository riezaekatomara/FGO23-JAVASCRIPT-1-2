const movie = {
    id: 1,
    title: "Avenger",
    image: "Avenger.jpg",
    genre: ["Action", "Superhero", "Adventure"],
    cast: [
        { name: "Steve Rodgers", role: "Captain America" },
        { name: "Tony Stark", role: "Iron Man" },
        { name: "Bruce Banner", role: "Hulk" },
        { name: "Chris Hemsworth", role: "Thor" },
        { name: "Natasha Romanoff", role: "Black Widow" }
    ],

    getMovieDetails() {
        return {
            title: this.title,
            image: this.image,
            genre: this.genre
        };
    },

    getCastAscending() {
        return this.cast.slice().sort((a, b) => a.name.localeCompare(b.name));
    },

    setTitle(newTitle) {
        this.title = newTitle;
    },

    setImage(newImage) {
        this.image = newImage;
    }
};