(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
     planetsArray = planetsString.split("|")
     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *//

    var planetsHTML = planetsArray.join('<br>');
    console.log(planetsHTML);
    document.write(planetsHTML);
var planetsHTMl = planetsArray.join('<br>');
console.log(planetsHTML)
})();
