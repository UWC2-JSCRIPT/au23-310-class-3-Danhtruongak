
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}



/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */

let total = 0;
function getPointsFromResult(result) {
  let pointValue = RESULT_VALUES[result]
  total +=pointValue;

  console.log(total); /// I got 3,6,7 on the console//
  return total;

}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

function getTotalPoints(results){
 const letters = results.split("");
console.log(letters)
 letters.forEach((result=>{
  
  getPointsFromResult(result); 

  }))


};


// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
  function orderTeams(name, result){
    this.name = name;
    this.result = result;


    return Array.from(arguments)

    
  }
  orderTeams();

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4

