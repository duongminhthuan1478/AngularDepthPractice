import { faker } from '@faker-js/faker';
import { Hero } from './../models/hero.model';

export function createRandomHero(): Hero {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    details: {
      age: Number(faker.random.numeric(2)),
      country: faker.address.country()
    }
  };
}

export function getNewHeroName(): string {
  return faker.name.fullName();
}

export function getNewHeroAge(): number {
  return Number(faker.random.numeric(2));
}