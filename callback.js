const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Jose'
    }
    setTimeout(() => {
        callback(user)
    }, 1500)
}

getUsuarioById(10, (persona) => {
    console.log(persona.id);
    console.log(persona.nombre.toUpperCase());
});