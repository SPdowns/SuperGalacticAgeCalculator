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

  test("should convert this.age to the amout of days", () => {
    expect(reusablePerson2.days).toEqual(27375)
  })

  test("should convert earth age to mercury age", () => {
    reusablePerson.mercuryAge();
    expect (reusablePerson.age).toEqual(74.66);
  });

  test("should be able to return a mercury life expectency value", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(331.82);
  });
  
  test("should be able to return a mercury life expectency left value if age is less than expectency", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(257.16);
  });

  test("should be able to return a mercury life expectency left value if age is more than expectency", () => {
    reusablePerson2.mercuryAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(20.74)
  });

  test("should convert earth age to venus age", () => {
    reusablePerson.venusAge();
    expect (reusablePerson.age).toEqual(29.2)
  })

  test("should return a venus life expectency value", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(129.78)
  })

  test("should return a venus life expectency left if age is less than expectency", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(100.58)
  });

  test("should return a venus life expectency left if age is more than expectency", () => {
    reusablePerson2.venusAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(8.11)
  })

  test("should convert earth age to mars age", () => {
    reusablePerson.marsAge();
    expect (reusablePerson.age).toEqual(9.56)
  })

  test("should return a mars life expectency value", () => {
    reusablePerson.marsAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(42.5)
  })

  test("should return a mars life expectency left if age is less than expectency", () => {
    reusablePerson.marsAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(32.94)
  });

  test("should return a mars life expectency left if age is more than expectency", () => {
    reusablePerson2.marsAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(2.65)
  })
  test("should convert earth age to jupiter age", () => {
    reusablePerson.jupiterAge();
    expect (reusablePerson.age).toEqual(1.52)
  })

  test("should return a jupiter life expectency value", () => {
    reusablePerson.jupiterAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(6.74)
  })

  test("should return a jupiter life expectency left if age is less than expectency", () => {
    reusablePerson.jupiterAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(5.22)
  });

  test("should return a jupiter life expectency left if age is more than expectency", () => {
    reusablePerson2.jupiterAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(.42)
  });

  test("should convert earth age to saturn age", () => {
    reusablePerson.saturnAge();
    expect (reusablePerson.age).toEqual(0.61);
  });

  test("should return a saturn life expectency value", () => {
    reusablePerson.saturnAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(2.71)
  })

  test("should return a saturn life expectency left if age is less than expectency", () => {
    reusablePerson.saturnAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(2.1)
  });

  test("should return a saturn life expectency left if age is more than expectency", () => {
    reusablePerson2.saturnAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(0.16)
  });

  test("should convert earth age to uranus", () => {
    reusablePerson.uranusAge();
    expect (reusablePerson.age).toEqual(0.21)
  });

  test("should return a uranus life expectency value", () => {
    reusablePerson.uranusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(0.95)
  })

  test("should return a uranus life expectency left if age is less than expectency", () => {
    reusablePerson.uranusAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(0.74)
  });

  test("should return a uranus life expectency left if age is more than expectency", () => {
    reusablePerson2.uranusAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(0.06)
  });
  test("should convert earth age to neptune", () => {
    reusablePerson.neptuneAge();
    expect (reusablePerson.age).toEqual(0.11)
  });
  test("should return a neptune life expectency value", () => {
    reusablePerson.neptuneAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.spaceAgeLifeExpectency).toEqual(0.49)
  })

  test("should return a neptune life expectency left if age is less than expectency", () => {
    reusablePerson.neptuneAge();
    reusablePerson.lifeExpectencyCalc();
    expect (reusablePerson.lifeExpectency).toEqual(0.38)
  });

  test("should return a neptune life expectency left if age is more than expectency", () => {
    reusablePerson2.neptuneAge();
    reusablePerson2.lifeExpectencyCalc();
    expect (reusablePerson2.lifeExpectency).toEqual(0.04)
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