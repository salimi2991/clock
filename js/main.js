function updateTime() {
  /*create a new Date Object called now, which represents the current date and time */
  const now = new Date();

  /*Thes lines extract the current hours, minutes and seconds from the now object
  using the hetHours(), getMinutes(), and getSeconds() methods respectively
  This allows us to retrieve the individual components of the current time
  */
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  /*Thes three lines calculate the angle of the hour, minute and second hands based on the current time.
  The hourAngle formula takes into account that there are 12 hours on a clock and each hour is 30 degrees
  (360 / 12). The formula calcualtes the angle og the hour hand by adding the hour value modulo 12 times 30
  which gives the number of degrees for the hour part, and the minute value divided by 2, which gives the 
  number of degrees for the minute part. The hour hand moves slightly as the minutes progress between two
  hour values. The minuteAngle formulat calculates the angle of the minute hand as 6 degrees times the
  current minute value. The secondAngle formula calculates the angle of the second hand as 6 degrees times
  the current second value.
  */
  const hourAngle = 30 * hours + minutes / 2;
  const minutesAngle = 6 * minutes;
  const secondAngle = 6 * seconds;

  /*Thes 3 lines select the hour, minute and second hands from th html document using the querySelector method */
  const hourHand = document.querySelector(".hour-hand"),
    minuteHand = document.querySelector(".minute-hand"),
    secondHand = document.querySelector(".second-hand");

  /*These lines set the transform property of the select DOM elements to rotate them to the respective
  angles calculated earlier. This updates the visual position of the clock hands on the page */
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minutesAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

/*This line call the updateTime function every 1000 milliseconds(i.e. on second)
using the setInterval method. this causes the clock hands to update every second and create the illusion
of a ticking clock
*/
setInterval(updateTime, 1000);
