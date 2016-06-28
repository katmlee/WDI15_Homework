def prompt(message)
  print message
  gets.chomp #implicit return
end

# name = prompt "What is your name?"

def menu
  puts "(a) - addition"
  puts "(q) - quit"
  puts "(m) - multiply"
  puts "(s) - subtract"
  puts "(d) - divide"
  puts "(e) - exponent"
  puts "(r) - square root"
  prompt "Enter your choice: "
end

def add(a, b)
  puts "#{a+b}"
end

def multiply(a, b)
  puts "#{a*b}"
end

def subtract(a, b)
  puts "#{a-b}"
end

def divide(a, b)
  puts "#{a/b}"
end

def exponent(a,b)
  puts "#{a**b}"
end

def square_root(a)
  puts "#{Math.sqrt(a)}"
end
menu_selection = menu()


until menu_selection == 'q'
  case menu_selection
  when 'a'
    add(a, b)

  when 's'
    a = prompt("What's the first number?").to_i
    b = prompt("What's the second number?").to_i
    subtract(a, b)
  when 'm'
    a = prompt("What's the first number?").to_i
    b = prompt("What's the second number?").to_i
    multiply(a, b)
  when 'd'
    a = prompt("What's the first number?").to_i
    b = prompt("What's the second number?").to_i
    divide(a, b)
  when 'e'
    a = prompt("What's the first number?").to_i
    b = prompt("What's the second number?").to_i
    exponent(a, b)
  when 'r'
    a = prompt("What's the first number?").to_i
    square_root(a)
  else
    puts "Invalid selection"
  end

  menu_selection = menu

end

puts "Thank you for using this calculator"
