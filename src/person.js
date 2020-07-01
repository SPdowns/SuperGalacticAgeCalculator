// this is where the person constructor will go

export class Person {
  constructor(name, age, spaceAge, spaceAgeLifeExpectancy) {
    this.name = name;
    this.age = age;
    this.spaceAge = spaceAge;
    this.spaceAgeLifeExpectancy = spaceAgeLifeExpectancy;
    this.days = this.age*365;
    this.lifeExpectancy = 29200;
  }

  lifeExpectencyCalc() {
    if (this.spaceAge < this.lifeExpectancy) {
      this.lifeExpectancy -= this.spaceAge;
      let x = this.lifeExpectancy.toFixed(2);
      this.lifeExpectancy = parseFloat(x);
    } else {
      let x = this.spaceAge -= this.lifeExpectancy;
      let y = x.toFixed(2);
      this.lifeExpectancy = parseFloat(y);
    }
  }

  mercuryAge() {
    this.days /= 88;
    this.lifeExpectancy /=88;
    let mercuryAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(mercuryAge);
    let mercuryLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(mercuryLifeExpexctency);
  }

  venusAge() {
    this.days /= 225;
    this.lifeExpectancy /= 225;
    let venusAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(venusAge);
    let venusLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(venusLifeExpexctency);
  }

  marsAge() {
    this.days /= 687;
    this.lifeExpectancy /= 687;
    let marsAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(marsAge);
    let marsLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(marsLifeExpexctency);
  }
  jupiterAge() {
    this.days /= 4333;
    this.lifeExpectancy /= 4333;
    let marsAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(marsAge);
    let jupiterLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(jupiterLifeExpexctency);
  }
  saturnAge() {
    this.days /= 10756;
    this.lifeExpectancy /= 10756;
    let saturnAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(saturnAge);
    let saturnLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(saturnLifeExpexctency);
  }
  uranusAge() {
    this.days /= 30687;
    this.lifeExpectancy /= 30687;
    let uranusAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(uranusAge);
    let uranusLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(uranusLifeExpexctency);
  }
  neptuneAge() {
    this.days /= 60190;
    this.lifeExpectancy /= 60109;
    let neptuneAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(neptuneAge);
    let uranusLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(uranusLifeExpexctency);
  }
  plutoAge() {
    this.days /= 90553;
    this.lifeExpectancy /= 90553;
    let plutoAge = this.days.toFixed(2);
    this.spaceAge = parseFloat(plutoAge);
    let plutoLifeExpexctency = this.lifeExpectancy.toFixed(2);
    this.spaceAgeLifeExpectancy = parseFloat(plutoLifeExpexctency);
  }
}