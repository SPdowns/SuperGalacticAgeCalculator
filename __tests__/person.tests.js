import {Person} from "./../src/person";
  let reusablePerson;
  let reusablePerson2;

describe('Person class', () => {
  beforeEach(() => {
    reusablePerson = new Person("Sean", 18);
    reusablePerson2 = new Person("Old Sean", 50)
  });

  test("should create a new person object", () => {
    expect (reusablePerson).toMatchObject({name: "Sean", age: 18})
  });

  test("should convert earth age to mercury age", () => {
    reusablePerson.mercuryAge();
    expect (reusablePerson.age).toEqual(75);
  });

  test("should be able to return a life expectency value if age is less than expectency", () => {
    reusablePerson.mercuryAge();
    reusablePerson.mercuryLifeExpectency();
    expect (reusablePerson.lifeExpectency).toEqual(5);
  });
  
  test("should be able to return a life expectency value if age is more then expectency", () => {
    reusablePerson2.mercuryAge();
    reusablePerson2.mercuryLifeExpectency();
    expect (reusablePerson2.lifeExpectency).toEqual(127);
  });

  test("should convert earth age to venus age", () => {
    reusablePerson.venusAge();
    expect (reusablePerson.age).toEqual(29)
  })
});