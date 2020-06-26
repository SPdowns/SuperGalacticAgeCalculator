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
    expect (reusablePerson.age).toEqual(75);
  });

  test("should be able to return a life expectency value if age is less than expectency", () => {
    reusablePerson.mercuryAge();
    reusablePerson.mercuryLifeExpectency();
    expect (reusablePerson.lifeExpectency).toEqual(5);
  });
  
  test("should be able to return a life expectency value if age is more then expectency", () => {
    const person2 = new Person ({name: "Sean", age: 50, lifeExpectency: 80})
    person2.mercuryAge();
    person2.mercuryLifeExpectency();
    expect (person2.lifeExpectency).toEqual(127);
  });

});