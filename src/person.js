// this is where the person constructor will go

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.days = 
    this.lifeExpectency = 80
  }

  lifeExpectencyCalc() {
    if (this.age < this.lifeExpectency) {
      this.lifeExpectency -= this.age;
      return this.lifeExpectency
    } else {
      let tempLifeExpectency = this.age -= this.lifeExpectency;
      this.lifeExpectency = tempLifeExpectency;
      return this.lifeExpectency
    }
  }

  mercuryAge() {
    this.days /= 88;
    let mercuryAge = Math.round(this.days)
    this.age = mercuryAge;
    return this.age
  }

  venusAge() {
    this.days /= 225;
    let venusAge = Math.round(this.days)
    this.age = venusAge;
    return this.age
  }


}