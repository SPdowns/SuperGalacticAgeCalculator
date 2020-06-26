// this is where the person constructor will go

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.days = this.age*365;
    this.lifeExpectency = 80
  }

  lifeExpectencyCalc() {
    if (this.age < this.lifeExpectency) {
      this.lifeExpectency -= this.age;
    } else {
      let tempLifeExpectency = this.age -= this.lifeExpectency;
      this.lifeExpectency = tempLifeExpectency;
    }
  }

  mercuryAge() {
    this.days /= 88;
    let mercuryAge = Math.round(this.days)
    this.age = mercuryAge;
  }

  venusAge() {
    this.days /= 225;
    let venusAge = Math.round(this.days)
    this.age = venusAge;
  }

  marsAge() {
    this.days /= 687;
    let marsAge = Math.round(this.days)
    this.age = marsAge;
  }
}