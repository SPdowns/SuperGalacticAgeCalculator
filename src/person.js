// this is where the person constructor will go

export class Person {
  constructor(name, age, spaceAgeLifeExpectency) {
    this.name = name;
    this.age = age;
    this.spaceAgeLifeExpectency = spaceAgeLifeExpectency;
    this.days = this.age*365;
    this.lifeExpectency = 29200;
  }

  lifeExpectencyCalc() {
    if (this.age < this.lifeExpectency) {
      this.lifeExpectency -= this.age;
      let x = this.lifeExpectency.toFixed(2)
      this.lifeExpectency = parseFloat(x)
    } else {
      let x = this.age -= this.lifeExpectency;
      let y = x.toFixed(2)
      this.lifeExpectency = parseFloat(y);
    }
  }

  mercuryAge() {
    this.days /= 88;
    this.lifeExpectency /=88;
    let mercuryAge = this.days.toFixed(2);
    this.age = parseFloat(mercuryAge);
    let mercuryLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(mercuryLifeExpexctency)
  }
  //331.82

  venusAge() {
    this.days /= 225;
    this.lifeExpectency /= 225;
    let venusAge = this.days.toFixed(2);
    this.age = parseFloat(venusAge);
    let venusLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(venusLifeExpexctency)
  }

  marsAge() {
    this.days /= 687;
    this.lifeExpectency /= 687;
    let marsAge = this.days.toFixed(2);
    this.age = parseFloat(marsAge);
    let marsLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(marsLifeExpexctency);
  }
  jupiterAge() {
    this.days /= 4333;
    this.lifeExpectency /= 4333;
    let marsAge = this.days.toFixed(2);
    this.age = parseFloat(marsAge);
    let jupiterLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(jupiterLifeExpexctency);
  }
  saturnAge() {
    this.days /= 10756;
    this.lifeExpectency /= 10756
    let saturnAge = this.days.toFixed(2);
    this.age = parseFloat(saturnAge);
    let saturnLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(saturnLifeExpexctency);
  }
  uranusAge() {
    this.days /= 30687;
    this.lifeExpectency /= 30687;
    let uranusAge = this.days.toFixed(2);
    this.age = parseFloat(uranusAge);
    let uranusLifeExpexctency = this.lifeExpectency.toFixed(2)
    this.spaceAgeLifeExpectency = parseFloat(uranusLifeExpexctency);
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