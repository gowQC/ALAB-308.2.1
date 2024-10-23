const RADIUS = 5;
const PI = 3.1415;
const STARTING_PLANTS = 20;
const MINIMUM_SPACE = 0.8;
const AREA = PI * RADIUS * RADIUS;
//max capacity and total amount of spaces already occupied by starting plants
console.log("The garden can hold " + AREA/MINIMUM_SPACE + " total plants. After starting plants, the garden can hold " + ((AREA/MINIMUM_SPACE) - STARTING_PLANTS) + " plants.")  
//space in square meters available after start plants
console.log("With a starting area of " + AREA + " square meters and starting with " + STARTING_PLANTS + " plants, there will be " + (AREA - (STARTING_PLANTS * MINIMUM_SPACE)) + " square meters of space left.");

console.log("=====================================");
//end of week 1
try {
    if ( (STARTING_PLANTS/.8)*2 > AREA ) {
        throw "ERROR - Too many plants for week 1";
    }
    else {
        console.log("End of week 1, there are an estimated " + (STARTING_PLANTS * 2) + " plants.")
        if ( (STARTING_PLANTS * 2) > ((AREA/MINIMUM_SPACE)*.8) ) { //pruned
            console.log("Must start pruning");
        }
        else if ( ((AREA/MINIMUM_SPACE)*.5) <= (STARTING_PLANTS * 2) && (STARTING_PLANTS * 2) <= ((AREA/MINIMUM_SPACE)*.8) ) { //monitored
            console.log("Must start monitoring");
        }
        else if ( (STARTING_PLANTS * 2) < ((AREA/MINIMUM_SPACE)*.5) ) { //planted
            console.log("Must start planting");
        }
        console.log("If starting with 100 plants, end of week 1's plants would be " + (100 * 2) + ".");
        console.log("The garden would then need to allot an additional " + ( ((100 * 2) / .8) - AREA) + " more square meters of space.");
        console.log("If circular, the radius of such a garden would be approximately " + Math.sqrt(((100 * 2) / .8) / PI) + " meters.");
    }
}
catch (error) {
    console.log(error);
}
finally {
    console.log("=====================================");
}

//end of week 2
try {
    if ( (STARTING_PLANTS/.8)*4 > AREA ) {
        throw "ERROR - Too many plants for week 2";
    }
    else {
        console.log("After week 2, there are an estimated " + (STARTING_PLANTS * 4) + " plants.");
        if ( (STARTING_PLANTS * 4) > ((AREA/MINIMUM_SPACE)*.8) ) {
            console.log("Must start pruning");
        }
        else if ( ((AREA/MINIMUM_SPACE)*.5) <= (STARTING_PLANTS * 4) && (STARTING_PLANTS * 4) <= ((AREA/MINIMUM_SPACE)*.8) ) {
            console.log("Must start monitoring");
        }
        else if ( (STARTING_PLANTS * 4) < ((AREA/MINIMUM_SPACE)*.5) ) {
            console.log("Must start planting");
        }
        console.log("The garden would then need to allot an additional " + ( ((100 * 4) / .8) - AREA) + " more square meters of space.");
        console.log("If circular, the radius of such a garden would be approximately " + Math.sqrt(((100 * 4) / .8) / PI) + " meters.");
    }
}
catch (error) {
    console.log(error)
}
finally {
    console.log("=====================================");
}

//end of week 3
try{
    if ( (STARTING_PLANTS/.8)*8 > AREA ) {
        throw "ERROR - Too many plants for week 3";
    }
    else {
        console.log("After week 3, there are an estimated " + (STARTING_PLANTS * 8) + " plants.");
        if ( (STARTING_PLANTS * 8) > ((AREA/MINIMUM_SPACE)*.8) ) {
            console.log("Must start pruning");
        }
        else if ( ((AREA/MINIMUM_SPACE)*.5) <= (STARTING_PLANTS * 8) && (STARTING_PLANTS * 8) <= ((AREA/MINIMUM_SPACE)*.8) ) {
            console.log("Must start monitoring");
        }
        else if ( (STARTING_PLANTS * 8) < ((AREA/MINIMUM_SPACE)*.5) ) {
            console.log("Must start planting");
        }
        console.log("The garden would then need to allot an additional " + ( ((100 * 8) / .8) - AREA) + " more square meters of space.");
        console.log("If circular, the radius of such a garden would be approximately " + Math.sqrt(((100 * 8) / .8) / PI) + " meters.");
    }
}
catch (error) {
    console.log(error)
}
finally {
    console.log("=====================================");
}
