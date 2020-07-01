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
    
    let person = new Person(name, age, spaceAge);
    person.mercuryAge();
    

    $("#output-name").text(person.name);
    $("#output-age").text(person.age);
    $("#output-spaceage").text(person.spaceAge);
  });
});