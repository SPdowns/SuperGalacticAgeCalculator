// this is where the person constructor will go

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.days = this.age*365;
    this.lifeExpectency = 80
  }

  lifeExpectencyCalc() {
    console.log(this.age, this.lifeExpectency)
    if (this.age < this.lifeExpectency) {
      this.lifeExpectency -= this.age;
    } else {
      let tempLifeExpectency = this.age -= this.lifeExpectency;
      this.lifeExpectency = tempLifeExpectency;
    }
  }

  mercuryAge() {
    this.days /= 88;
    console.log(this.days)
    let mercuryAge = this.days.toFixed(2)
    this.age = parseFloat(mercuryAge);
  }

  venusAge() {
    this.days /= 225;
    let venusAge = this.days.toFixed(2)
    this.age = parseFloat(venusAge);
  }

  marsAge() {
    this.days /= 687;
    let marsAge = this.days.toFixed(2)
    this.age = parseFloat(marsAge);
  }
}