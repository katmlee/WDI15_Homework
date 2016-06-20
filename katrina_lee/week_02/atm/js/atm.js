// Keep track of the checking and savings balances somewhere
var checkingAcct = 0;
var savingsAcct = 0;
var checkingBalance = 0;
var savingsBalance = 0;
var balance = 0;

// Add functionality so that a user can deposit money into one of the bank accounts. // Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.
$(document).ready(function(){
  $('#checking-deposit').click(function(){
    checkingAcct = +$('#checking-amount').val();
    checkingBalance = checkingBalance + checkingAcct;
    $("#checking-balance").text("$"+checkingBalance);
    balance = checkingBalance + savingsBalance;
    if(checkingBalance===0){
      $('#checking-balance').addClass('zero');
    }else{
      $('#checking-balance').removeClass('zero');
    }
    });
});

// Add functionality so that a user can withdraw money from one of the bank accounts.// Make sure you are updating the display and manipulating the HTML of the page so a user can see the change. // Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
$(document).ready(function(){
    $('#checking-withdraw').click(function(){
      if($('#checking-amount').val() <= checkingBalance){ //checking to see if withdraw amt is over the current balance//
        checkingAcct = $('#checking-amount').val();
        checkingBalance = checkingBalance - checkingAcct;
        $("#checking-balance").text("$"+checkingBalance);
        balance = checkingBalance + savingsBalance;
        if(checkingBalance === 0){
          $('#checking-balance').addClass('zero');
        }else{
          $('#checking-balance').removeClass('zero');
        }
      }else if($('#checking-amount').val() < balance){ //if need to overdraft//
        checkingAcct = $('#checking-amount').val();
        var difference = checkingAcct - checkingBalance;
        savingsBalance = savingsBalance - difference;
        checkingBalance = 0;
        $("#checking-balance").text("$"+checkingBalance);
        $("#savings-balance").text("$"+savingsBalance);
        balance = checkingBalance + savingsBalance;
        if(savingsBalance === 0){
          $('#checking-balance').addClass('zero');
        }else{
          $('#checking-balance').removeClass('zero');
        }

      }else{
        alert("You have insufficient funds");
      }
  });
});

//Savings account
$(document).ready(function(){
  $('#savings-deposit').click(function(){
    savingsAcct = +$('#savings-amount').val();
    savingsBalance = savingsBalance + savingsAcct;
    $("#savings-balance").text("$"+savingsBalance);
    balance = checkingBalance + savingsBalance;
    if(savingsBalance === 0){
      $('#savings-balance').addClass('zero');
    }else{
      $('#savings-balance').removeClass('zero');
    }
    });
});
$(document).ready(function(){
    $('#savings-withdraw').click(function(){
      if($('#savings-amount').val() <= savingsBalance){
        savingsAcct = $('#savings-amount').val();
        savingsBalance = savingsBalance - savingsAcct;
        $("#savings-balance").text("$"+savingsBalance);
        balance = checkingBalance + savingsBalance;
        if(savingsBalance===0){
          $('#savings-balance').addClass('zero');
        }else{
          $('#savings-balance').removeClass('zero');
        }
      }else if($('#savings-amount').val() < balance){ //if need to overdraft//
        savingsAcct = $('#savings-amount').val();
        var difference = savingsAcct - savingsBalance;
        checkingBalance = checkingBalance - difference;
        savingsBalance = 0;
        $("#checking-balance").text("$"+checkingBalance);
        $("#savings-balance").text("$"+savingsBalance);
        balance = checkingBalance + savingsBalance;
        if(savingsBalance === 0){
          $('#savings-balance').addClass('zero');
        }else{
          $('#savings-balance').removeClass('zero');
        }

      }else{
        alert("You have insufficient funds");
      }
  });
});

// When the balance of the bank account is $0 the background of that bank account should be red. It should be gray when there is money in the account.
// What happens when the user wants to withdraw more money from the checking account than is in the account? These accounts have overdraft protection, so if a withdrawal can be covered by the balances in both accounts, take the checking balance down to $0 and take the rest of the withdrawal from the savings account. If the withdrawal amount is more than the combined account balance, ignore it.
// Make sure there is overdraft protection going both ways.
// Are there ways to refactor your code to make it DRYer?
