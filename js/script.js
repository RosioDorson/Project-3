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
    //use a conditional stmt inside change event listener to listen for changes made to "design" menu 'select' element
    $('#design').on('change', function () {
        if ($('#design').val() === 'js puns') {
            $options.show();
            $('#color option:eq(0)').hide();
            $('#color option[value="tomato"]').hide();
            $('#color option[value="steelblue"]').hide();
            $('#color option[value="dimgrey"]').hide();
        } else if ($('#design').val() === 'heart js') {
            $options.show();
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
        $cost = $($event).attr("data-cost").slice(1,4);
        $number = parseInt($cost);
        if ($(this).is(':checked')) {
            $totalActivityCost += $number;
        } else
        {
           $totalActivityCost -= $number;
        }
    $costDiv.text("Total: $" + $totalActivityCost);
    const $date = $($event).attr("data-day-and-time");
    const $name = $($event).attr("name");

    if ($($date) === $(this).attr("data-day-and-time") && $name !== $(this).attr('name')) {
        if ($(this).is(':checked')) {
            $(this).attr('disabled',true);
        } else
        {
            $(this).removeAttr('disabled');
        }
    }
    console.log($name);
    });

    //hide the select "payment method" 'option' so it doesnt show in the dropdown menu
    $('#payment option:eq(0)').hide();
    //show the corresponding payment option and hide the others
    $('#payment').change(function () {
        const changes = $('#payment').find(':selected').text();
        if (changes === 'Credit Card') {
        } else if (changes === 'PayPal') {
            $('#credit-card').hide();
            $('#bitcoin').hide();
            $('#paypal').show();
        } else if (changes === 'Bitcoin') {
            $('#credit-card').hide();
            $('#paypal').hide();
            $('#bitcoin').show();
         }
    });



    // GOOD CODE ^^

    //CAN'T FIGURE OUT HOW TOO DISABLE CONFLICTING ACTIVITIES
    
    


    
    
    //create a separate validation function for each of the form fields 
    
    //create the master validation function
    
    //add a submit event listener
    // });












