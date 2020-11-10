let findTheOldest = function(people) {

    // Oldest person for someone living current year - birth year
    const currentYear = new Date().getFullYear();

    // Oldest person for the dead is death year - birth year
    // Need to go through each person, calculate their age, and return the oldest
    // Can we sort?

    const oldest = people.sort(function(a, b) {
  
        for(i=0; i<people.length; i++){
            if(people[i].yearOfDeath){
                continue;
            } else{
                people[i].yearOfDeath = currentYear;
            }
        }
        
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
  
        if(lastGuy > nextGuy){
          return -1;
        } else {
          return 1;
        }
      })

      return oldest[0];
    
}

module.exports = findTheOldest
