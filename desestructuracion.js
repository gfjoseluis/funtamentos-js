const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
console.log(deadpool.getNombre());

//const nombre = deapool.nombre;
//const apellido = deapool.apellido;
//const poder = deapool.poder;

const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder, edad);

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

