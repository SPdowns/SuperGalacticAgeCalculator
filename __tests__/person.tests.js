import {Person} from "./../src/person";
  let reusablePerson;
  let reusablePerson2;

describe('Person class', () => {
  beforeEach(() => {
    reusablePerson = new Person("Sean", 18);
    reusablePerson2 = new Person("Old Sean", 75)
  });

  test("should create a new person object", () => {
    expect (reusablePerson).toMatchObject({name: "Sean", age: 18})
  });

  test("should convert this.age to the amount of days", () => {
    expect(reusablePerson.days).toEqual(6570)
  })

  test("should convert earth age to mercury age", () => {
    reusablePerson.mercuryAge();
    expect (reusablePerson.age).toEqual(75);
  });

  test("should be able to return a life expectency value if age is less than expectency", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(5);
  });
  
  test("should be able to return a life expectency value if age is more then expectency", () => {
    reusablePerson2.mercuryAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(231);
  });

  test("should convert earth age to venus age", () => {
    reusablePerson.venusAge();
    expect (reusablePerson.age).toEqual(29)
  })

  test("should return a venus life expectency if age is less than expectency", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(51)
  })

  test("should return a venus life expectency if age is more than expectency", () => {
    reusablePerson2.venusAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(42)
  })

  test("should convert earth age to venus age", () => {
    reusablePerson.marsAge();
    expect (reusablePerson.age).toEqual(10)
  })


});