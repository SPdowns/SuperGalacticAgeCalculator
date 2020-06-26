// this is where the person constructor will go

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.lifeExpectency = 80
  }

  mercuryAge() {
    this.age *= 365;
    this.age /= 88;
    let mercuryAge = Math.round(this.age)
    this.age = mercuryAge;
    return this.age
  }

  mercuryLifeExpectency() {
    if (this.age < this.lifeExpectency) {
      this.lifeExpectency -= this.age;
      return this.lifeExpectency
    } else {
      let mercuryLifeExpectency = this.age -= this.lifeExpectency;
      this.lifeExpectency = mercuryLifeExpectency;
      return this.lifeExpectency
    }
  }

  venusAge() {
    this.age *= 365;
    this.age /= 225;
    let venusAge = Math.round(this.age)
    this.age = venusAge;
    return this.age
  }
}