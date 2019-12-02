"use strict";

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use("Factory");
const Hash = use("Hash");

Factory.blueprint("App/Models/User", async faker => {
  return {
    first_name: faker.first_name(),
    middle_name: faker.middle_name(),
    last_name: faker.last_name(),
    username: faker.username(),
    password: await Hash.make(faker.password()),
    role_id: faker.role_id()
  };
});
