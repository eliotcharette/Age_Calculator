export class AgeCalc {
  constructor(age){
    this.age = age;
  }
  ageInSeconds(){
    this.age = this.age * 31536000;
    // console.log(seconds);
    // seconds * 31536000;
    // // let d = new Date(2018, 8, 3, 10, 10, 10);
    // // answer = d - l;
    // console.log(60 * 60 * 24 * 365 * 27);
     console.log(this.age);
    // return seconds;
  }
  ageMercury(){
    this.age = this.age / .24;
  }
  ageVenus(){
    this.age = this.age / .62;
  }
  ageMars(){
    this.age = this.age / 1.88;
  }
  ageJupiter(){
    this.age = this.age / 11.86;
  }
}
