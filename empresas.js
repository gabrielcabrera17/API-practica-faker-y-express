const { faker } = require('@faker-js/faker');
const empresas = [
  {
    id:1,
    nombre: faker.company.name(),
    direccion: {
      calle: faker.address.streetAddress(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      codigo_postal: faker.address.zipCode(),
      pais: faker.address.country()
    },
  },
];

module.exports = empresas;
