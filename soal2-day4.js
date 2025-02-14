const movie = {
    id: 1,
    title: "Avenger",
    image: "Avenger.png",
    genre: ["Action", "Superhero", "Adventure"],
    cast: [
        { name: "Steve Rodgers", role: "Captain America" },
        { name: "Tony Stark", role: "Iron Man" },
        { name: "Bruce Banner", role: "Hulk" },
        { name: "Chris Hemsworth", role: "Thor" },
        { name: "Natasha Romanoff", role: "Black Widow" }
    ],

    getMovieDetails() {
        console.log(`judul: ${this.title}, gambar: ${this.image}, genre: ${
        (`${this.genre[0]}, ${this.genre[1]}, ${this.genre[2]}`)  
        }`)
    },

    getCastAscending () {
        console.log(
            this.cast.sort((a, b) => {
            if (a.name < b.name) {
                return -1
            }
            if (a.name < b.name) {
                return 1
            }
            return 0
        })
        )
    },

    setTitle(newTitle) {
        if (typeof newTitle !== "string") {
            console.log("Judul harus string")
            return
        }
        this.title = newTitle
    },

    setImage(newImage) {
        if (typeof newImage !== "string") {
            console.log("Input harus string")
            return
        }
        this.image = newImage
    },
}

movie.getMovieDetails();
movie.getCastAscending();
movie.setTitle("New Avenger");
movie.setImage("new-avenger.png");

console.log(movie);
