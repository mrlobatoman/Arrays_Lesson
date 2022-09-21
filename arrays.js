var friends = ["samer", "sara", "bryan", "victoria"];
//removes "samer" from the array, reassigning the index position of every remaining element.
friends.pop();
var weightLog = [143, 147, 152, 151];
//removing elements outside of the index numbers listed, elements of and inside the index numbers will remain. ex [143, 147, 152]
weightLog.slice(0,2);
var workout = [true, false, false, true];
//adding and additional element to the front of the array with the same value as the index number of 1. Index numbers will be reassigned.
workout.unshift(1);
