import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person';

$(document).ready(function () {
  $("#input").submit(function(event) {
    event.preventDefault();
    let name = $("#input-name").val();
    let age = $("#input-age").val();
    let spaceAge;
    let planetSelector = $("#input-planet").val();
    let person = new Person(name, age, spaceAge);
    
    switch (planetSelector) {
    case ("Mercury"):
      person.mercuryAge();
      person.lifeExpectancyCalc();
      break;
    case ("Venus"):
      person.venusAge();
      person.lifeExpectancyCalc();
      break;
    case ("Mars"):
      person.marsAge();
      person.lifeExpectancyCalc();
      break;
    case ("Jupiter"):
      person.jupiterAge();
      person.lifeExpectancyCalc();
      break;
    case ("Saturn"):
      person.saturnAge();
      person.lifeExpectancyCalc();
      break;
    case ("Uranus"):
      person.uranusAge();
      person.lifeExpectancyCalc();
      break;
    case ("Neptune"):
      person.neptuneAge
      person.lifeExpectancyCalc();
      break;
    case ("Pluto"):
      person.plutoAge();
      person.lifeExpectancyCalc();
      break;
        default:
      person.mercuryAge();
      person.lifeExpectancyCalc();
    }
    $("#output-dom").show(3000);
    $("#output-name").text(person.name);
    $("#output-age").text(person.age);
    $("#output-spaceage").text(person.spaceAge);
    $("#output-planet-name").text(planetSelector);
    $("#output-life-expectancy").text(person.lifeExpectancy);
    $("#output-space-life-expectancy").text(person.spaceAgeLifeExpectancy);
  });
});