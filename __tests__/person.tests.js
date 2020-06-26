import {Person} from "./../src/person";

describe('Person class', () => {
  beforeEach(() => {
    reusablePerson = new Person("Sean", 18);
  });

  test("should create a new person object", () => {
    expect (reusablePerson).toMatchObject({name: "Sean", age: 18})
  });
