/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
Rosio Dorson
******************************************/

const $jobTitle = $('#title');
const $otherJob = $('#other-title');
const $options = $('#color option');

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
})

$(document).ready(function() {
//hide the 'select theme' option in the dropdown menu
$('#design option:first').hide();

//hide the colors in the dropdown menu
$options.hide();

//add text to the color field that says "Please select a T-Shirt theme"
$('#color').prepend("<option>Please select a T-Shirt theme</option>");
});

//use a conditional stmt inside change event listener to listen for changes made to "design" menu 'select' element
$('#design').on('change', function() {
if () {

} else if () {

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

