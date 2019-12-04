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
        let $checked = (event.target);
        $cost = $($checked).attr("data-cost").slice(1,4);
        $number = parseInt($cost);
        if ($(this).is(':checked')) {
            $totalActivityCost += $number;
        } else
        {
           $totalActivityCost -= $number;
        }
    $costDiv.text("Total: $" + $totalActivityCost);
    $date = $($checked).attr("data-day-and-time");

    // GOOD CODE ^^




    // $checked.prop( "disabled", true );
 
     for (let i = 1; i < $checkBox.length; i++ ) {
         if ($($date) === $($date).eq(i)) {
             $checkBox.attr('disabled', true);
         }
    }
    
    //hide the select "payment method" 'option' so it doesnt show in the dropdown menu
    
    //get the value of the payment select element
    
    //show the corresponding payment option and hide the others
    
    //create a separate validation function for each of the form fields 
    
    //create the master validation function
    
    //add a submit event listener
    });
    });












