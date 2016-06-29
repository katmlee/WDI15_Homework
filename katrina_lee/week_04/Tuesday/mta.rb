require 'pry'
def prompt(message)
  print message
  gets.chomp #implicit return
end

def planTrip()
  start_stop = prompt("What station are you at? ")
  start_line = prompt("What line are you starting from? ")
  end_stop = prompt("What station do you want to go to? ")
  end_line = prompt("On which line? ")

  lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }
  start_index = lines[start_line].index(start_stop)
  end_index = lines[end_line].index(end_stop)
  if start_line == end_line && start_stop == end_stop
    print "You're already there smartie!"
  if start_line == end_line
    if start_index < end_index
      stops_passed = (lines[start_line][(start_index+1)...end_index])
      stops_passed_string = stops_passed * ", "
      print "You start at station #{start_stop} on line #{start_line} and pass #{stops_passed_string} and arrive at #{end_stop}. You passed #{stops_passed.size} stops. "
    end
    if start_index > end_index
      lineArray = lines[start_line].reverse
      start_index = lineArray.index(start_stop)
      end_index = lineArray.index(end_stop)
      stops_passed = lineArray[(start_index+1)...end_index]
      stops_passed_string = stops_passed*", "
      print "You start at station #{start_stop} on line #{start_line} and pass #{stops_passed_string} and arrive at #{end_stop}. You passed #{stops_passed.size} "
    end
  else
    us1_index = lines[start_line].index("Union Square")
    us2_index = lines[end_line].index("Union Square")
    if start_index < us1_index
      stops_passed_1 = (lines[start_line][(start_index+1)...us1_index])
      stops_passed_1_string = stops_passed_1* ", "
      if us2_index < end_index
        stops_passed_2 = (lines[end_line][(us2_index+1)...end_index])
        stops_passed_2_string = stops_passed_2* ", "
      else
        secondLineArray =lines[end_line].reverse
        end_index_reverse = secondLineArray.index(end_stop)
        us2_index_reverse = secondLineArray.index("Union Square")
        stops_passed_2 = (secondLineArray[(us2_index_reverse+1)...end_index_reverse])
        stops_passed_2_string = stops_passed_2*", "
      end
    else
      firstLineArray = lines[start_line].reverse
      start_index_reverse = firstLineArray.index(start_stop)
      us1_index_reverse = firstLineArray.index("Union Square")
      stops_passed_1 = firstLineArray[(start_index_reverse+1)...us1_index_reverse]
      stops_passed_1_string = stops_passed_1* ", "
      if us2_index < end_index
        stops_passed_2 = (lines[end_line][(us2_index+1)...end_index])
        stops_passed_2_string = stops_passed_2* ", "
      else
        secondLineArray =lines[end_line].reverse
        end_index_reverse = secondLineArray.index(end_stop)
        us2_index_reverse = secondLineArray.index("Union Square")
        stops_passed_2 = (secondLineArray[(us2_index_reverse+1)...end_index_reverse])
        stops_passed_2_string = stops_passed_2* ", "
      end
    end
    print "You start at station #{start_stop} on line #{start_line} and pass #{stops_passed_1_string} then switch at Union Square and pass #{stops_passed_2_string} and arrive at #{end_stop}. You passed #{stops_passed_1.length+stops_passed_2.length} stops."
  end
end

planTrip
