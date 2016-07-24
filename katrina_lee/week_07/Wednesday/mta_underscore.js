var lines = {
    "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L": ["8th", "6th", "Union Square", "3rd", "1st"],
    "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  };
var $startStop;
var $endStop;
  $(document).ready(function(){

    $('#submitButton').click(function(){
      $startStop = $('#startStop :selected').val();
      $endStop = $('#endStop :selected').val();

      var startLine = $startStop.split(",")[0];
      // console.log(startLine);
      var startStation = $startStop.split(",")[1];
      // console.log(startStation);
      var endLine = $endStop.split(",")[0];
      // console.log(endLine);
      var endStation = $endStop.split(",")[1];
      // console.log(endStation);

      var startIndex = lines[startLine].indexOf(startStation);
      var endIndex = lines[endLine].indexOf(endStation);
      var stopsPassed;

      var directions = function(){
        if (startStop === endStop){
          //already at the station
          $('#directions').innerHTML("You are already there!");
        }
      if(startLine === endLine){
          //same line
            if (startIndex < endIndex){
              stopsPassed= lines.startLine.slice(lines.startLine[startIndex], lines.endLine[endIndex]);
              console.log(stopsPassed);
            }else{
              //go backwards
              startLineReverse=lines.startLine.reverse;
              stopsPassed=startLineReverse.slice(startLineReverse[startLineReverse.indexOf(endStation)], startLineReverse[startLineReverse.indexOf(startStation)]);
            }
        }else{
          var usIndexStart= lines.startLine.indexOf["Union Square"];
          var usIndexEnd= lines.endLine.indexOf["Union Square"];
            if(startIndex<usIndexStart){
              stopsPassed1= lines.startLine.slice(lines.startLine[startIndex], lines.startLine[usIndexStart]);
              if(usIndexEnd< endIndex){
                stopsPassed2= lines.endLine.slice(lines.endLine[usIndexEnd], lines.endLine[endIndex]);
                stopsPassed= stopsPassed1+stopsPassed2;
              }else{
                reverseEndLine= lines.endLine.reverse;
                stopsPassed2=reverseEndLine.slice(reverseEndLine[usIndexEnd], reverseEndLine[endIndex]);
              }
              return stopsPassed1+stopsPassed2;
            }else{
              startLineReverse=lines.startLine.reverse;
              stopsPassed1=startLineReverse.slice(startLineReverse[startLineReverse.indexOf(endStation)], startLineReverse[startLineReverse.indexOf("Union Square")]);
                if(usIndexEnd< endIndex){
                  stopsPassed2= lines.endLine.slice(lines.endLine[usIndexEnd], lines.endLine[endIndex]);
                  stopsPassed= stopsPassed1+stopsPassed2;
                }else{
                  reverseEndLine= lines.endLine.reverse;
                  stopsPassed2=reverseEndLine.slice(reverseEndLine[usIndexEnd], reverseEndLine[endIndex]);
                }
                stopsPassed=stopsPassed1+stopsPassed2;
              return stopsPassed;
            }
          }
          console.log(stopsPassed);
      };

    });

  });
