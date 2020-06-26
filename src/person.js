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
      return this.lifeExpectency;
    } else {
      let tempLifeExpectency = this.age -= this.lifeExpectency;
      this.lifeExpectency = tempLifeExpectency;
    }
  }

  mercuryAge() {
    this.days /= 88;
    let mercuryAge = this.days.toFixed(2);
    this.age = parseFloat(mercuryAge);
    
  }

  venusAge() {
    this.days /= 225;
    let venusAge = this.days.toFixed(2);
    this.age = parseFloat(venusAge);
  }

  marsAge() {
    this.days /= 687;
    let marsAge = this.days.toFixed(2);
    this.age = parseFloat(marsAge);
  }
  jupiterAge() {
    this.days /= 4333;
    let marsAge = this.days.toFixed(2);
    this.age = parseFloat(marsAge);
  }
  saturnAge() {
    this.days /= 10756;
    let saturnAge = this.days.toFixed(2);
    this.age = parseFloat(saturnAge);
  }
  uranusAge() {
    this.days /= 30687;
    let uranusAge = this.days.toFixed(2);
    this.age = parseFloat(uranusAge);
  }
  neptuneAge() {
    this.days /= 60190;
    let neptuneAge = this.days.toFixed(2);
    this.age = parseFloat(neptuneAge);
  }
  plutoAge() {
    this.days /= 90553;
    let plutoAge = this.days.toFixed(2);
    this.age = parseFloat(plutoAge);
  }
}