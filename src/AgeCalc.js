export class AgeCalc {
  constructor(age, date){
    this.age = age;
    this.date = date;
  }
  ageInSeconds(){
    this.age = this.age * 31536000;
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
  differenceDates(now, then){
    return(now - then)/1000;
  }
  yearsLeftMercury(averageCan){
    return (averageCan - this.age)/.24;
  }
  yearsLeftVenus(averageCan){
    return (averageCan - this.age)/.62;
  }
  yearsLeftMars(averageCan){
    return (averageCan - this.age)/1.88;
  }
  yearsLeftJupiter(averageCan){
    return (averageCan - this.age)/11.86;
  }
  yearsPast(avg){
    return (this.age - avg);
  }
}
