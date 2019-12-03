/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Rosio Dorson
******************************************/

const $jobTitle = $('#title');
const $otherJob = $('#other-title');
const $options = $('#color option');
const $newText = $('#design option:first');


//add a focus to the name input field.
$('#name').focus();
//hide the your job roles text field so that it is hidden initially.
$('#other-title').hide();
//include a text field that shows up when the other option is selected from the job role drop down menu
$jobTitle.change(function () {
    const change = $jobTitle.find(':selected').text();
    if (change === 'Other') {
        $otherJob.show();
    }
});
//hide the 'select theme' option in the dropdown menu
$(document).ready(function() {
    $('#color').prepend("<option>Please select a T-Shirt theme</option>");
    $newText.hide();
    $options.hide();
});
//use a conditional stmt inside change event listener to listen for changes made to "design" menu 'select' element
/* NEED TO MAKE THE DROPDOWN MENUS UPDATE */
$('#design').on('change', function() {
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

//use a change event listener to listen for changes in the activity section

//create variables to store the important values

//update the display and total activity cost 

//disable the conflicting activities

//hide the select "payment method" 'option' so it doesnt show in the dropdown menu

//get the value of the payment select element

//show the corresponding payment option and hide the others

//create a separate validation function for each of the form fields 

//create the master validation function

//add a submit event listener

