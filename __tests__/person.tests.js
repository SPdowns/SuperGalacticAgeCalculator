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
    expect (reusablePerson.age).toEqual(74.66);
  });

  test("should be able to return a life expectency value if age is less than expectency", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(5.34);
  });
  
  test("should be able to return a life expectency value if age is more then expectency", () => {
    reusablePerson2.mercuryAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(231.08);
  });

  test("should convert earth age to venus age", () => {
    reusablePerson.venusAge();
    expect (reusablePerson.age).toEqual(29.2)
  })

  test("should return a venus life expectency if age is less than expectency", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(50.8)
  })

  test("should return a venus life expectency if age is more than expectency", () => {
    reusablePerson2.venusAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(41.67)
  })

  test("should convert earth age to mars age", () => {
    reusablePerson.marsAge();
    expect (reusablePerson.age).toEqual(9.56)
  })

  test("should return a mars life expectency if age is less than expectency", () => {
    reusablePerson.marsAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(70.44)
  })

  test("should convert earth age to jupiter age", () => {
    reusablePerson.jupiterAge();
    expect (reusablePerson.age).toEqual(1.52)
  })
  test("should return a jupiter life expectency if age is less than expectency", () => {
    reusablePerson.jupiterAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(78.48)
  })
  test("should convert earth age to saturn age", () => {
    reusablePerson.saturnAge();
    expect (reusablePerson.age).toEqual(0.61);
  })
  test("should return a saturn life expectency", () => {
    reusablePerson.saturnAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(79.39)
  });
  test("should convert earth age to uranus", () => {
    reusablePerson.uranusAge();
    expect (reusablePerson.age).toEqual(0.21)
  });
  test("should return a uranus life expectency", () => {
    reusablePerson.uranusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(79.79)
  });
  test("should convert earth age to neptune", () => {
    reusablePerson.neptuneAge();
    expect (reusablePerson.age).toEqual(0.11)
  });
  test("should return a neptune life expectency", () => {
    reusablePerson.neptuneAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(79.89)
  });
  test("should convert earth age to pluto", () => {
    reusablePerson.plutoAge();
    expect (reusablePerson.age).toEqual(0.07)
  });
  test("should return a pluto life expectency", () => {
    reusablePerson.plutoAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(79.93)
  });
});