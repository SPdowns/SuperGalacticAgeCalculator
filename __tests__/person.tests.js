import {Person} from "./../src/person";
  let reusablePerson;

describe('Person class', () => {
  beforeEach(() => {
    reusablePerson = new Person("Sean", 18);
  });

  test("should create a new person object", () => {
    expect (reusablePerson).toMatchObject({name: "Sean", age: 18})
  });

  test("should convert earth age to mercury age", () => {
    reusablePerson.mercuryAge();
    expect (mercuryAge).toEqual(75)
  });
});