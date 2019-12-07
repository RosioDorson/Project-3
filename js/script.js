/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Rosio Dorson
******************************************/
$(document).ready(function() {
    //add a focus to the name input field.
    $('#name').focus();
    //hide the your job roles text field so that it is hidden initially.
    $('#other-title').hide();
    //include a text field that shows up when the other option is selected from the job role drop down menu
    const $jobTitle = $('#title');
    $jobTitle.change(function () {
        const change = $jobTitle.find(':selected').text();
        if (change === 'Other') {
            $('#other-title').show();
        }
    });
    //hide the 'select theme' option in the dropdown menu
    const $options = $('#color option');
    const $newText = $('#design option:first');
    $('#color').prepend("<option>Please select a T-Shirt theme</option>");
    $('#color').val("Please select a T-Shirt theme");
    $newText.hide();
    $options.hide();
    $('#colors-js-puns').hide();
    //use a conditional stmt inside change event listener to listen for changes made to "design" menu 'select' element
    $('#design').change(function () {
        if ($('#design').val() === 'js puns') {
            $options.show();
            $('#colors-js-puns').show();
            $('#color option:eq(0)').hide();
            $('#color option[value="tomato"]').hide();
            $('#color option[value="steelblue"]').hide();
            $('#color option[value="dimgrey"]').hide();
        } else if ($('#design').val() === 'heart js') {
            $options.show();
            $('#colors-js-puns').show();
            $('#color option:eq(0)').hide();
            $('#color option[value="cornflowerblue"]').hide();
            $('#color option[value="darkslategrey"]').hide();
            $('#color option[value="gold"]').hide();   
        }
     });
    //create an element to display the total activity cost
     const $checkBox = $('.activities input:checkbox')
    let $totalActivityCost = 0.00;
    const $costDiv= $('<div></div>').text("Total: $" + $totalActivityCost);
    $('.activities').append($costDiv);

     $checkBox.on('change', function(event) { 
         let $event = (event.target);
        const $cost = $($event).attr("data-cost").slice(1,4);
        const $number = parseInt($cost);
        const $date = $($event).attr("data-day-and-time");
        const $name = $($event).attr("name");
        $checkBox.each(function() {
        if (($date) === $(this).attr("data-day-and-time") && 
        $($name) !== $(this).attr('name')) {
            if ($($event).is(':checked')) {
                $(this).prop('disabled',true);
            } else
            {
                $(this).removeAttr('disabled');
            }
        }
        });
        if ($(this).is(':checked')) {
            $totalActivityCost += $number;
        } else
        {
           $totalActivityCost -= $number;
        }
        $costDiv.text("Total: $" + $totalActivityCost);
    });
    //hide the select "payment method" 'option' so it doesnt show in the dropdown menu
    $('#payment option:eq(0)').hide();
    $('#payment').val("Credit Card");
    //show the corresponding payment option and hide the others
    $('#payment').change(function () {
        const changes = $('#payment').find(':selected').text();
        if (changes === 'PayPal') {
            $('#credit-card').hide();
            $('#bitcoin').hide();
            $('#paypal').show();
        } else if (changes === 'Credit Card') {
            $('#credit-card').show();
        } else if (changes === 'Bitcoin') {
            $('#credit-card').hide();
            $('#paypal').hide();
            $('#bitcoin').show();
         }
    });
//*VALIDATING FUNCTIONS*//
const $invalidName = $("<span class='errormsg'>Please enter your name.</span>").insertBefore('#name').hide();
const $invalidEmail = $("<span class='errormsg'>Please enter a valid email.</span>").insertBefore('#mail').hide();
const $invalidActivity = $("<span class='errormsg'>Please select an activity.</span>").insertAfter('.activities legend').hide();
const $invalidCard = $("<span class='errormsg'>Please enter a credit card number.</span>").insertBefore('#cc-num').hide();
const $invalidZip = $("<span class='errormsg'>Please enter a valid Zip Code.</span>").insertBefore('#zip').hide();
const $invalidCvv = $("<span class='errormsg'>Please enter a valid CVV.</span>").insertBefore('#cvv').hide();

function $isvalidName() {
    const $name = $('#name');
    if ($name.val() === '') {
        $name.addClass('errormsg').css("border-color", "red");
        $invalidName.show();
        return false;
    } else {
        $name.removeClass('errormsg').css("border-color", "");
        $invalidName.hide();
        return true;
    }
};    

function $isvalidEmail() {
    const $email = $('#mail');
    const $regex = /^[^@]+@[^@.]+\.[a-z]{3}$/i;
    if (!($regex).test($('#mail').val())) {
        $email.addClass('errormsg').css("border-color", "red");
        $invalidEmail.show();
        return false;
    } else {
        $email.removeClass('errormsg').css("border-color", "");
        $invalidEmail.hide();
        return true;
    }
};    

function $isvalidActivity() {
    const $activity = $('.activities');
    if ($totalActivityCost === 0) {
        $activity.addClass('errormsg').css({border: "3px red solid"});
        $invalidActivity.show();
        return false;
    } else {
        $activity.removeClass('errormsg').css("border-color", "");
        $invalidActivity.hide();
        return true;
    }
};    

function $isvalidCreditcard() {
    const $creditCard = $('#cc-num');
    const $regex = /^[0-9]{13,16}$/;
    if (!($regex).test($('#cc-num').val())) {
        $creditCard.addClass('errormsg').css("border-color", "red");
        $invalidCard.show();
        return false;
    } else {
        $creditCard.removeClass('errormsg').css("border-color", "");
        $invalidCard.hide();
        return true;
    }
};    

function $isvalidZipcode() {
    const $zip = $('#zip');
    const $regex = /^[\d]{5}$/;
    if (!($regex).test($('#zip').val())) {
        $zip.addClass('errormsg').css("border-color", "red");
        $invalidZip.show();
        return false;
    } else {
        $zip.removeClass('errormsg').css("border-color", "");
        $invalidZip.hide();
        return true;
    }
};    

function $isvalidCvv() {
    const $cvv = $('#cvv');
    const $regex = /^[\d]{3}$/
    if (!($regex).test($('#cvv').val())) {
        $cvv.addClass('errormsg').css("border-color", "red");
        $invalidCvv.show();
        return false;
    } else {
        $cvv.removeClass('errormsg').css("border-color", "");
        $invalidCvv.hide();
        return true;
    }
};    
$('form').submit(function(event) {
    if ($isvalidName() === false) {
        event.preventDefault();
    } 
    if ($isvalidEmail() === false) {
        event.preventDefault();
    }
    if ($isvalidActivity() === false) {
        event.preventDefault();
    } 
    if ($('#payment').val()==='Credit Card'){
        if ($isvalidCreditcard() === false) {
            event.preventDefault();
        } 
        if ($isvalidZipcode() === false) {
            event.preventDefault();
        } 
        if ($isvalidCvv() === false) {
            event.preventDefault();
        }
    }
});
});