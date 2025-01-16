// Countdown to Monday (Philippines Time)
function updateCountdown() {
    const now = new Date();
    const talentShowDate = new Date('2025-01-19T00:00:00+08:00'); // Talent show date
    const remainingTime = talentShowDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('timer').textContent = "Talent Show Countdown:" +days+"d" +hours+"h "+minutes+"m" +seconds+"s";

    setTimeout(updateCountdown, 1000);
}

updateCountdown();

  
  // Bunny and Panda Messages
  const bunnyMessages = [
    "You're doing amazing,And you have the strength to keep going.",
    "Believe in yourself, You're capable of incredible things",
    "You've already made it this far, And you can go even further",
    "Dont Stop now, You're closer than you think to your goals",
    "You are loved!",
    "Your potential is limitless—never be afraid to reach for the stars",
    "The world is lucky to have someone as kind and talented as you",
   "You’ve already accomplished so much—keep going, because your best is yet to come",
   "Your strength and passion are unstoppable—keep going, Faye!".
  ];
  
  const pandaMessages = [
    "Your smile has the power to light up the world Faye; don’t let anything dim it",
    "Remember, Faye, you’re the star of your own story—shine brightly",
    "Even on cloudy days, the sun shines just for you above the clouds",
    "Faye Your laugh is the music the world needs to hear—don’t let it fade",
    "You light up the room just by being in it—don’t ever let that glow fade",
    "You are sunshine wrapped in human form, spreading light wherever you go",
    "Your strength and beauty inspire those around you, and it’s something I will always admire",
    "You are the author of your own story—make it a beautiful one",
    "You’ve already accomplished so much—keep going, because your best is yet to come",
    "Faye, you are a beautiful soul with boundless potential—never forget that",
    "Faye, you are a beautiful soul with boundless potential—never forget that",
    "The light you carry inside is meant to shine brighter than you ever imagined",
    "Faye, your courage and resilience inspire everyone around you",
    "Faye, your kindness is the quiet strength that makes the world a better place",
    "Your strength and beauty inspire those around you, and it’s something I will always admire".

    
    
  ];
  
  function showBunnyMessage() {
    const message = bunnyMessages[Math.floor(Math.random() * bunnyMessages.length)];
    document.getElementById("bunny-message").textContent = message;
  }
  
  function showPandaMessage() {
    const message = pandaMessages[Math.floor(Math.random() * pandaMessages.length)];
    document.getElementById("panda-message").textContent = message;
  }
