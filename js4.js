/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function result() {
    var day = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
    ]

    var today = new Date().getDay() + 3;

    if (today > 6) {
        today = today - 6
    }

    return day[Math.abs(today)];
  }
  
  console.log(result());