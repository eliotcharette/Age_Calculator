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
    expect(6.4799999999999995).toEqual(newage.age);
  });
  it('should return users age on mercury', function() {
    let newage = new AgeCalc(27);
    newage.ageVenus();
    expect(16.74).toEqual(newage.age);
  });
});
