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
    "You are loved!."
  ];
  
  const pandaMessages = [
    "Your smile has the power to light up the world Faye; don’t let anything dim it",
    "Remember, Faye, you’re the star of your own story—shine brightly",
    "Even on cloudy days, the sun shines just for you above the clouds",
    "Faye Your laugh is the music the world needs to hear—don’t let it fade",
    "You light up the room just by being in it—don’t ever let that glow fade",
    "You are sunshine wrapped in human form, spreading light wherever you go."
    
  ];
  
  function showBunnyMessage() {
    const message = bunnyMessages[Math.floor(Math.random() * bunnyMessages.length)];
    document.getElementById("bunny-message").textContent = message;
  }
  
  function showPandaMessage() {
    const message = pandaMessages[Math.floor(Math.random() * pandaMessages.length)];
    document.getElementById("panda-message").textContent = message;
  }