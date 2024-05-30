const { faker } = require('@faker-js/faker');
const usuarios = [
  {
    id:1,
    primer_nombre: faker.name.firstName(),
    apellido: faker.name.lastName(),
    telefono: faker.phone.number(),
    email: faker.internet.email(),
    contraseña: faker.internet.password()
  },
];

module.exports = usuarios;
