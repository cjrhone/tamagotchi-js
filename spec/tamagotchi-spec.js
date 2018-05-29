
import { tamagotchi } from './../src/js/tamagotchi.js';

describe('tamagotchi', function() {
  let lulu = tamagotchi;

  beforeEach(function() {
    jasmine.clock().install();
    lulu.foodLevel = 100;
    lulu.sleepLevel = 100;
    lulu.attentionLevel = 100;
    lulu.name = "lulu";
    lulu.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });


//NAME AND START TEST
  it('should have a name, a food, a sleep and attention level of 100 when created', function(){
    expect(lulu.name).toEqual("lulu");
    expect(lulu.foodLevel).toEqual(100);
    expect(lulu.attentionLevel).toEqual(100);
    expect(lulu.sleepLevel).toEqual(100);
  });

//FOODLEVEL TESTS
  it('should return that tamagotchi eatSmall and food level should go up 5', function(){
    expect(lulu.eatSmall("Carrots")).toEqual("Your Tamagotchi ate Carrots! Food level goes up 5");
    expect(lulu.foodLevel).toEqual(105);
  });

  it('should have a food level of 90 after 10001 milliseconds', function(){
    jasmine.clock().tick(10000);
    expect(lulu.foodLevel).toEqual(90);
  });

  it('should check if the tamagotchi is dead ', function(){
    lulu.foodLevel = 0;
    lulu.attentionLevel = 0;
    lulu.sleepLevel = 0;
    expect(lulu.didYouDie()).toEqual(true);
  });

  it('should have a food level of 95 when fed', function(){
    jasmine.clock().tick(10000);
    lulu.eatSmall();
    expect(lulu.foodLevel).toEqual(95);
  })

//SLEEPLEVEL TESTS
  it('should return that tamagotchi rested and sleep level should go up 5', function(){
    lulu.restShort()
    expect(lulu.sleepLevel).toEqual(105);
  });

  // it('should have a food level of 90 after 10001 milliseconds', function(){
  //   jasmine.clock().tick(10000);
  //   expect(lulu.foodLevel).toEqual(90);
  // });
  //
  // it('should check if the tamagotchi is dead ', function(){
  //   lulu.foodLevel = 0;
  //   lulu.attentionLevel = 0;
  //   lulu.sleepLevel = 0;
  //   expect(lulu.didYouDie()).toEqual(true);
  // });
  //
  // it('should have a food level of 95 when fed', function(){
  //   jasmine.clock().tick(10000);
  //   lulu.eatSmall();
  //   expect(lulu.foodLevel).toEqual(95);
  // });









//ATTENTIONLEVEL TESTS
it('tamagotchi should be at a play level of 150', function(){
  expect(lulu.playFriends("Jim")).toEqual("Your Tamagotchi was playing with Jim for 50 minutes!");
  expect(lulu.attentionLevel).toEqual(150);
  console.log("new " + lulu.attentionLevel);
  });




});
