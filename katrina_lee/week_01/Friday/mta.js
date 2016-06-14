//when startStop matches an element in the array, return the indexof the element//
//when endStop matches an element in the array, return the indexof the element//
//print out "you start at" startStop and "go through" (print out all the elements in between) "to get to" endStop
var subwayLines = {

  nLine : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  lLine : ["8th", "6th", "Union Square", "3rd", "1st"],
  line6 : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var planTrip = function(startLine, startStop, endLine, endStop){
  if (startLine === endLine){ // if line stays the same
    var startIndex = subwayLines[startLine].indexOf(startStop);
    var endIndex = subwayLines[startLine].indexOf(endStop);
    if (startIndex < endIndex){ //go forward
        var firstStop= startIndex +1;
        var stopsPassed = [];
        stopsPassed = subwayLines[startLine].slice((firstStop),endIndex);
        console.log( "You start at station " + startStop + " and go pass " + stopsPassed + " and end at " + endStop +".");
      }else { // go reverse
        var lineReversed = subwayLines[startLine].slice(0).reverse();
        var startIndex = lineReversed.indexOf(startStop);
        var endIndex = lineReversed.indexOf(endStop);
        var firstStop= startIndex +1;
        var stopsPassed = [];
        stopsPassed = lineReversed.slice((firstStop),endIndex);
        console.log( "You start at station " + startStop + " and go pass " + stopsPassed + " and end at " + endStop +".");
      }
    } else{ // to unionsquare
      var startIndex = subwayLines[startLine].indexOf(startStop);
      var endIndex = subwayLines[endLine].indexOf(endStop);
      var indexOfUSSegment1 = subwayLines[startLine].indexOf("Union Square");
      var indexOfUSSegment2 = subwayLines[endLine].indexOf("Union Square");

      var stopsPassedSegment2Uptown = [];
      var stopsPassedSegment2Downtown = [];
      var stopsPassedSegment1Uptown = [];

      if (startIndex < indexOfUSSegment1){ //go forward
          var firstStop = startIndex +1;
          var stopsPassedSegment1Downtown = [];
          stopsPassedSegment1Downtown = subwayLines[startLine].slice(firstStop,indexOfUSSegment1);
          if (stopsPassedSegment1Downtown === "undefined"){
            stopsPassedSegment1Downtown = "";
          }
        }
      if (startIndex > indexOfUSSegment1) { // go reverse
          var lineReversed = subwayLines[startLine].slice(0).reverse();
          var startIndex = lineReversed.indexOf(startStop);
          // var endIndex = lineReversed.indexOf(endStop);
          var indexOfUS = lineReversed.indexOf("Union Square");
          var firstStop= startIndex +1;
          stopsPassedSegment1Uptown = lineReversed.slice((firstStop),indexOfUSSegment1);
          if (stopsPassedSegment1Uptown === undefined){
            stopsPassedSegment1Uptown = "";
          }

        }
      if (endIndex > indexOfUSSegment2){
        var firstStop= startIndex +1;
        stopsPassedSegment2Downtown = subwayLines[endLine].slice(indexOfUSSegment2+1,endIndex);
        if (stopsPassedSegment2Downtown === undefined){
          stopsPassedSegment2Downtown = "";
        }
      }
      if (endIndex < indexOfUSSegment2) { // go reverse
        var lineReversed = subwayLines[endLine].slice(0).reverse();
        var startIndex = lineReversed.indexOf(startStop);
        var endIndex = lineReversed.indexOf(endStop);
        var indexOfUS = lineReversed.indexOf("Union Square") + 1;
        var firstStop= startIndex;
        stopsPassedSegment2Uptown = lineReversed.slice(indexOfUS, endIndex);
        if (stopsPassedSegment2Uptown === "undefined"){
          stopsPassedSegment2Uptown = "";
        }
      }
        var segmentLength = stopsPassedSegment1Uptown.length+stopsPassedSegment1Downtown.length+stopsPassedSegment2Downtown.length+stopsPassedSegment2Uptown.length; //issues with length of undefined

        console.log("You start at station " + startStop + " and go pass " + stopsPassedSegment1Uptown + stopsPassedSegment1Downtown + " transfer at Union Square and pass " + stopsPassedSegment2Downtown + stopsPassedSegment2Uptown +" and end at " + endStop +"." + "You passed "  + segmentLength + " stations.");
        //

    };
};
//issues if stop is next to union square


planTrip("lLine", "3rd", "nLine", "Times Square");
planTrip("lLine", "3rd", "lLine", "8th");
