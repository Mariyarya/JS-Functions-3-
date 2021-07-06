// JS Functions 3 - Sleep Debt Calculator

//Create a function named getSleepHours with a single parameter named day.
const getSleepHours = day => {

    //utilizam if...else
    // if (day === 'monday') { //daca ziua === e monday 
    //     return 8; // sa se returneze 8h ca cifra indicata cat am dormit in acea noapte
    // }
    // else if (day === 'tuesday') { //iar daca urmatoarea zi e marti
    //     return 7; //sa se returneze 7 h
    // }
    // else if (day === 'wednesday') { //iar daca urm zi e miercuri
    //     return 8; //sa se returneze 8 h
    // }
    // else if (day === 'thursday') { //iar daca urm zi e joi
    //     return 5; //sa se returneze 5 h
    // }
    // else if (day === 'friday') { //iar daca urm zi e vineri
    //     return 8; //sa se returneze 8 h
    // }
    // else if (day === 'saturday') { //iar daca urm zi e sambata
    //     return 7; //sa se returneze 3 h
    // }
    // else if (day === 'sunday') { //iar daca urm zi e duminica
    //     return 8; //sa se returneze 8 h
    // } else {

    // } //else evaluiaza daca valoarea a day este sau nu una din conditie(adica luni sau marti)

    //poate fi utiliz si switch
    switch (day) {    //enumeram zilele a variabililei day
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednesday':
            return 8
            break;
        case 'thursday':
            return 5
            break;
        case 'friday':
            return 8
            break;
        case 'saturday':
            return 7
            break;
        case 'sunday':
            return 8
            break;
        default:
            return 'Error!' //setam defaultul in caz ca nu este indicata ziua
    }
};

//Test 
console.log(getSleepHours('wednesday'.toLowerCase()))

// Get the total sleep hours that you actually slept
// Get the ideal sleep hours that you prefer
// Calculate the sleep debt, if any.
// To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.

const getActualSleepHours = () => //am creat var noua care o sa preia actually slept h
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
//in interiorul getActualSleepHours function cu aceiasi denumire
//le-am adunat pe toate
//Inside the getActualSleepHours() function, call the getSleepHours() function for each day of t
// Add the results together and return the sum using an implicit return.


//test 
console.log(getActualSleepHours()); //51 h user a dormit sap trecuta

// To get the ideal sleep hours that you prefer,
//  create a function named getIdealSleepHours with no parameters. 
//  Inside the function, declare a variable named idealHours and set its
//   value to your ideal hours per night. Then return the idealHours 
//   multiplied by 7. You’ll want to multiply by 7 to get the total hours 
//   you prefer per week.

const getIdealSleepHours = () => { //function named getIdealSleepHours with no parameters
    let idealHours = 9; //Inside the function, declare a variable named idealHours and set its value to your ideal hours per night.
    return idealHours * 7; //Then return the idealHours multiplied by 7.
};

//test
console.log(getIdealSleepHours());  //63


// Now that you can get the actual sleep hours and the ideal sleep hours, 
// it’s time to calculate sleep debt. Create a function named 
// calculateSleepDebt with no parameters. Inside of its block,
//  create a variable named actualSleepHours set equal to the 
//  getActualSleepHours() function call. Then, create another 
//  variable named idealSleepHours, set equal to the getIdealSleepHours() 
//  function call.
const calculateSleepDebt = () => { // Create a function named calculateSleepDebt with no parameters
    const actualSleepHours = getActualSleepHours() //create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
    const idealSleepHours = getIdealSleepHours() //create another variable named idealSleepHours, set equal to the getIdealSleepHours()  function call.


    //Now that you have actualSleepHours and idealSleepHours, you can write a few if/else statements to output the result to the console. The function should fulfill this logic:
    // If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
    // If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
    // If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.

    if (actualSleepHours === idealSleepHours) { //if/else statements to output the result to the console.
        console.log(`Perfect amount of sleep`) //If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
    } else if (actualSleepHours > idealSleepHours) {  //If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
        console.log("You got " + (idealSleepHours - actualSleepHours) + " more hours of sleep this week!")
    } else if (actualSleepHours < idealSleepHours) { // If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
        console.log("You should get some rest because you slept " + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.")
    } else {
        console.log(`Error!`) //in case user did something wrong
    }

};

//test
calculateSleepDebt(); //You should get some rest!


// To make this calculator more helpful, add the hours the user is over or under their ideal sleep in each log statement in calculateSleepDebt().
//at line 120 we have change to  console.log("You got" + (idealSleepHours - actualSleepHours) + " more hours of sleep this week!") 
// at 122 from  console.log(`You should get some rest!`) change to   console.log("You should get some rest because you slept" + (idealSleepHours - actualSleepHours) + "hours less than you should have this week.")

//test
calculateSleepDebt();