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
});
