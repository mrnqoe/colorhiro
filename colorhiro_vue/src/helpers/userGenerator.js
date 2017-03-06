

export default function userGenerator () {
  var faker = require('faker');
  var users = [
    { name: faker.name.firstName(),
      color: faker.internet.color()
    },
    { name: faker.name.firstName(),
      color: faker.internet.color()
    },
    { name: faker.name.firstName(),
      color: faker.internet.color()
    }
  ];
  return users;
}

