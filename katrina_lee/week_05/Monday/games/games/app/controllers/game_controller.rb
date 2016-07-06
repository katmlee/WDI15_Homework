class GameController < ApplicationController

def magic8

end

def fortune
    answers =[
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Dont count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ]

    @answer = answers[rand(20)]
end

def secret
  @verdict = ""
  @number = params[:number].to_i
  if @number == rand(1..10)
    @verdict = "Congrats, you picked the right number!"
  elsif params[:number].present?
    @verdict = "Sorry, try again!"
  end
end

# def secret_number
#   @verdict = ""
#   @number = params[:number].to_i
#   if @number == rand(1..10)
#     @verdict = "Congrats, you picked the right number!"
#   else
#     @verdict = "Sorry, try again!"
#   end
#
# end

def rock_paper_scissors_play
  @message = ""
  choices = ["rock", "paper", "scissors"]
  @computer_choice = choices[rand(choices.length)]
  @player_choice = params[:throw]
  if @computer_choice == @player_choice
    @message = "It's a tie!" end
  if @computer_choice == "rock" && @player_choice == "paper"
    @message = "The computer chose rock, player has won!" end
  if @computer_choice == "paper" && @player_choice == "scissors"
      @message = "The computer chose paper, player has won!" end
  if @computer_choice == "scissors" && @player_choice == "rock"
      @message = "The computer chose scissors, player has won!" end
  if @computer_choice == "rock" && @player_choice == "scissors"
      @message = "The computer chose rock, computer has won!" end
  if @computer_choice == "paper" && @player_choice == "rock"
      @message = "The computer chose paper, computer has won!" end
  if @computer_choice == "scissors" && @player_choice == "paper"
      @message = "The computer chose scissors, the computer has won!" end

end

end
