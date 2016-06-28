def prompt(message)
  print message
  gets.chomp #implicit return
end


loan_amount = prompt("What is the amount you borrowed? ").to_i
interest_rate = prompt("What is the annual interest rate you received?").to_i
loan_length = prompt("What is length of your loan in years?").to_i
number_of_payments = loan_length*12
# puts number_of_payments
monthly_loan_interest = (interest_rate/100.0)/12
# puts monthly_loan_interest
numerator =  monthly_loan_interest*((1+monthly_loan_interest)**number_of_payments)
# puts numerator
denominator = ((1+monthly_loan_interest)**number_of_payments) - 1
# puts denominator
monthly_payment = loan_amount*(numerator/denominator)

puts "Your monthly payment is $#{monthly_payment.to_f}"
