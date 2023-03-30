function calendarMatching(calendar1, dailyBounds1, calendar2, dailyBounds2, meetingDuration) {
  const updatedCalendar1 = updateCalendar(calendar1, dailyBounds1);
  const updatedCalendar2 = updateCalendar(calendar2, dailyBounds2);
  // after updateCalendar func, our calendars are converted to minutes
  // Example of how our calendars look right now: [[0, 150], [280, 940]] 
  const mergedCalendar = mergeCalendars(updatedCalendar1, updatedCalendar2);
  const flattenedCalendar = flattenCalendar(mergedCalendar);
  const matchingAvailabilities = getMatchingAvailabilities(flattenedCalendar, meetingDuration);
  return matchingAvailabilities;
}


function updateCalendar(calendar, dailyBounds) {
  // insert in the time before start bound and after end bound as unavailable time
  const updatedCalendar = [['0:00', dailyBounds[0]], ...calendar, [dailyBounds[1], '23:59']];
  return updatedCalendar.map(meeting => meeting.map(timeToMinutes));
}


function mergeCalendars(calendar1, calendar2) {
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < calendar1.length && j < calendar2.length) {
    const meeting1 = calendar1[i];
    const meeting2 = calendar2[j];
    if (meeting1[0] < meeting2[0]) {
      merged.push(meeting1);
      i++;
    } else {
      merged.push(meeting2);
      j++;
    }
  }
  // if we've added all the values in calendar2 but not 1 from the loop above, 
  // go through the rest of the values in calendar 1 here...
  while (i < calendar1.length) merged.push(calendar1[i++]);
  