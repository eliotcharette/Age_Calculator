import { AgeCalc } from './../src/ageCalc.js';

describe('AgeCalc', function() {
  it('should count seconds from a date until todays date', function() {
    let newage = new AgeCalc(27);
    newage.ageInSeconds();
    expect(851472000).toEqual(newage.age);
  });
  it('should return users age on mercury', function() {
    let newage = new AgeCalc(27);
    newage.ageMercury();
    expect(112.5).toEqual(newage.age);
  });
  it('should return users age on venus', function() {
    let newage = new AgeCalc(27);
    newage.ageVenus();
    expect(43.54838709677419).toEqual(newage.age);
  });
  it('should return users age on mars', function() {
    let newage = new AgeCalc(27);
    newage.ageMars();
    expect(14.361702127659575).toEqual(newage.age);
  });
  it('should return users age on Jupiter', function() {
    let newage = new AgeCalc(27);
    newage.ageJupiter();
    expect(2.2765598650927488).toEqual(newage.age);
  });
  it('should find the difference in seconds bewteen 2 dates', function() {
    let newage = new AgeCalc()
    let today = new Date(2018, 8, 3, 10, 10, 10);
    let lastYear = new Date(2017, 8, 3, 10, 10, 10);
    expect(newage.differenceDates(today, lastYear)).toEqual(31536000);
  });
  it('should return users years left to live on mercury', function() {
    let newage = new AgeCalc(27);
    let average = 82;
    expect(newage.yearsLeftMercury(average)).toEqual(229.16666666666669);
  });
  it('should return users years left to live on venus', function() {
    let newage = new AgeCalc(27);
    let average1 = 82;
    expect(newage.yearsLeftVenus(average1)).toEqual(88.70967741935483);
  });
  it('should return users years left to live on Mars', function() {
    let newage = new AgeCalc(27);
    let average2 = 82;
    expect(newage.yearsLeftMars(average2)).toEqual(29.25531914893617);
  });
  it('should return users years left to live on Jupiter', function() {
    let newage = new AgeCalc(27);
    let average3 = 82;
    expect(newage.yearsLeftJupiter(average3)).toEqual(4.63743676222597);
  });
  it('should return the amount of years user have lived past average life expectency', function() {
    let newage = new AgeCalc(95);
    let avg = 82;
    expect(newage.yearsPast(avg)).toEqual(13);
  });
});
