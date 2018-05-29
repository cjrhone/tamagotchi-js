export let tamagotchi = {
  foodLevel: 100,
  attentionLevel: 100,
  sleepLevel: 100,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouDie() == true) {
        clearInterval(hungerInterval);
        return "Your Tamagotchi has died!";
      }
    }, 1000);
  },
  didYouDie: function() {
    if (this.foodLevel > 0 || this.sleepLevel > 0 || this.attentionLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      this.foodLevel += amount;
      return `Your Tamagotchi ate ${food}! Food level goes up 5`
    }
  },
  played: function(amount) {
    let that = this;
    return function(friend) {
      this.attentionLevel += amount;
      return `Your Tamagotchi was playing with ${friend} for ${amount} minutes!`
    }
  },
  sleep: function(amount) {
    let that = this;
    return function(rest) {
      this.sleepLevel += amount
      return `Your Tamagotchi rested for ${rest} minutes!`
    }
  }
};


tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);
tamagotchi.eatLarge = tamagotchi.feed(15);
tamagotchi.eatYuck = tamagotchi.feed(-10);
tamagotchi.eatPowerUp = tamagotchi.feed(50);
tamagotchi.eatSpecialBonus = tamagotchi.feed(100);
tamagotchi.eatWeirdThing = tamagotchi.feed(Math.floor((Math.random() * 20) + 1));


tamagotchi.playShort = tamagotchi.played(5);
tamagotchi.playMedium = tamagotchi.played(10);
tamagotchi.playLong = tamagotchi.played(15);
tamagotchi.playHurt = tamagotchi.played(-10);
tamagotchi.playFriends = tamagotchi.played(50);
tamagotchi.playSpecialBonus = tamagotchi.played(100);
tamagotchi.playStrange = tamagotchi.played(Math.floor((Math.random() * 20) + 1));

tamagotchi.restShort = tamagotchi.sleep(5);
tamagotchi.restMedium = tamagotchi.sleep(10);
tamagotchi.restLong = tamagotchi.sleep(15);
tamagotchi.restBad = tamagotchi.sleep(-10);
tamagotchi.restFull = tamagotchi.sleep(50);
tamagotchi.restSpecialBonus = tamagotchi.sleep(100);
tamagotchi.restNightmare = tamagotchi.sleep(Math.floor((Math.random() * 20) + 1));
