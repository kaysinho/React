const heroes = [
    { id : 1, name: "Batman" },
    { id : 2, name: "Superman" },
    { id : 3, name: "Thor" },
    { id : 4, name: "Ironman" },
    { id : 5, name: "Hulk" },
]

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );



