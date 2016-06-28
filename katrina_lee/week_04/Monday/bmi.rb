def prompt(message)
  print message
  gets.chomp #implicit return
end

height = prompt("What is your height in meters? ").to_i

weight = prompt("What is your weight in kg? ").to_i

puts (weight*1.0/(height*height))
