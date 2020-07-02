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

  test("should convert this.age to the amount of days for old person", () => {
    expect(reusablePerson2.days).toEqual(27375)
  })

  test("should convert earth age to mercury age", () => {
    reusablePerson.mercuryAge();
    expect (reusablePerson.spaceAge).toEqual(74.66);
  });

  test("should be able to return a mercury life expectancy value", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(331.82);
  });
  
  test("should be able to return a mercury life expectancy left value if age is less than expectancy", () => {
    reusablePerson.mercuryAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(257.16);
  });

  test("should be able to return a mercury life expectancy left value if age is more than expectancy", () => {
    reusablePerson2.mercuryAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(20.74)
  });

  test("should convert earth age to venus age", () => {
    reusablePerson.venusAge();
    expect (reusablePerson.spaceAge).toEqual(29.2)
  })

  test("should return a venus life expectancy value", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(129.78)
  })

  test("should return a venus life expectancy left if age is less than expectancy", () => {
    reusablePerson.venusAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(100.58)
  });

  test("should return a venus life expectancy left if age is more than expectancy", () => {
    reusablePerson2.venusAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(8.11)
  })

  test("should convert earth age to mars age", () => {
    reusablePerson.marsAge();
    expect (reusablePerson.spaceAge).toEqual(9.56)
  })

  test("should return a mars life expectancy value", () => {
    reusablePerson.marsAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(42.5)
  })

  test("should return a mars life expectancy left if age is less than expectancy", () => {
    reusablePerson.marsAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(32.94)
  });

  test("should return a mars life expectancy left if age is more than expectancy", () => {
    reusablePerson2.marsAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(2.65)
  })
  test("should convert earth age to jupiter age", () => {
    reusablePerson.jupiterAge();
    expect (reusablePerson.spaceAge).toEqual(1.52)
  })

  test("should return a jupiter life expectancy value", () => {
    reusablePerson.jupiterAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(6.74)
  })

  test("should return a jupiter life expectancy left if age is less than expectancy", () => {
    reusablePerson.jupiterAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(5.22)
  });

  test("should return a jupiter life expectancy left if age is more than expectancy", () => {
    reusablePerson2.jupiterAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(.42)
  });

  test("should convert earth age to saturn age", () => {
    reusablePerson.saturnAge();
    expect (reusablePerson.spaceAge).toEqual(0.61);
  });

  test("should return a saturn life expectancy value", () => {
    reusablePerson.saturnAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(2.71)
  })

  test("should return a saturn life expectancy left if age is less than expectancy", () => {
    reusablePerson.saturnAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(2.1)
  });

  test("should return a saturn life expectancy left if age is more than expectancy", () => {
    reusablePerson2.saturnAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(0.16)
  });

  test("should convert earth age to uranus", () => {
    reusablePerson.uranusAge();
    expect (reusablePerson.spaceAge).toEqual(0.21)
  });

  test("should return a uranus life expectancy value", () => {
    reusablePerson.uranusAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(0.95)
  })

  test("should return a uranus life expectancy left if age is less than expectancy", () => {
    reusablePerson.uranusAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(0.74)
  });

  test("should return a uranus life expectancy left if age is more than expectancy", () => {
    reusablePerson2.uranusAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(0.06)
  });
  test("should convert earth age to neptune", () => {
    reusablePerson.neptuneAge();
    expect (reusablePerson.spaceAge).toEqual(0.11)
  });

  test("should return a neptune life expectancy value", () => {
    reusablePerson.neptuneAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(0.49)
  })

  test("should return a neptune life expectancy left if age is less than expectancy", () => {
    reusablePerson.neptuneAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(0.38)
  });

  test("should return a neptune life expectancy left if age is more than expectancy", () => {
    reusablePerson2.neptuneAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(0.04)
  });

  test("should convert earth age to pluto", () => {
    reusablePerson.plutoAge();
    expect (reusablePerson.spaceAge).toEqual(0.07)
  });

  test("should return a pluto life expectancy value", () => {
    reusablePerson.plutoAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.spaceAgeLifeExpectancy).toEqual(0.32)
  })

  test("should return a pluto life expectancy left if age is less than expectancy", () => {
    reusablePerson.plutoAge();
    reusablePerson.lifeExpectancyCalc();
    expect (reusablePerson.lifeExpectancy).toEqual(0.25)
  });

  test("should return a pluto life expectancy left if age is more than expectancy", () => {
    reusablePerson2.plutoAge();
    reusablePerson2.lifeExpectancyCalc();
    expect (reusablePerson2.lifeExpectancy).toEqual(0.02)
  });
});