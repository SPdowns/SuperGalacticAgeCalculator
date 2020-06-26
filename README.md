# Super Galactic Age Calculator

#### Super Galactic Age Calculator, 2020/06/26

#### _By Sean Downs_
## Description
This is an application that determines a user’s age based on a planet’s solar years. Then determines how many years a user has left to live on each planet

## Specifications
This needs to take in a persons age in earth years and convert it to a corresponding planet solar year. I'm thinking just enter in a name and age, and then have an output where all planets are listed in text and print the calculatedage and calculatedlifeexpectency.

**Behavior 1**: This will create a person object with a name and date of birth
  * Input: Name: Sean; Age: 18
  * Output: Person1 = Name: Sean; Age: 18

**Behavior 2**: This wil calculate the age on mercury, A year is 88 days on mercury.
  * Input: Name: Sean; Age: 18
  * Output: Earth Age: 18; Mercury Age: 74.569

**Behavior 3**: This will calc number to 2nd decimal place.
  * Input: the calculated age is 74.569
  * Output: the toFixed(2) will make our number a string with correct decimals "74.57". ParseFloat function will change back to number 74.57.

**Behavior 4**: Life expexctancy will be 80 for every person. This will calculate the life expectancy on mercury if age is less than expectency.
  * Input: Name: Sean; Age: 18
  * Output: Earth Age: 18; Rounded Mercury Age: 74.57; Life left on earth: 62 years; Life left on mercury; 5.34 years

**Behavior 5**: This will calculate the life expectancy on mercury if age is more than expectency.
  * Input: Name: Sean; Age: 75
  * Output: The earth age is 75, the rounded mercury age 311.08. The outputted life expectancy number is 231.08 over the normal 80.

## Known Bugs
* No known bugs.   

## Setup/Installation Requirements
Open by downloading:
1. Download this repository onto your computer by clicking the 'clone or download button'
2. In your code editor of choice, navigate to the projects root folder.

Open via Bash/GitBash:
1. Clone this repository onto your computer:
`https://github.com/SPdowns/SuperGalacticAgeCalculator`
2. Navigate into the `root` directory in Visual Studio Code terminal or preferred terminal
3. Run npm install to setup specific project dependencies:
`% npm install`
4. Run npm run build to compile into a dist folder
`% npm run build`
5. Run npm run start to host test server
`% npm run start`

## Technologies Used
* Visual Studio Code (code editor)
* HTML
* CSS
* Bootstrap-4.5.0
* JavaScript
* jQuery-3.5.1
* Node
* Webpack
* Jest

## License
This software is licensed under the MIT license. Copyright (c) 2020 **_Sean Downs_**

**Behavior**: 
  * Input: 
  * Output: 