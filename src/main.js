import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Person } from './person';

$(document).ready(function () {
  $("#submit-calc").submit(function() {
    event.preventDefault();
    let person = new Person();
    
    $("#output-name").text(person.name)
    $("#output-age").text(person.age)

    console.log(person);
  })
});