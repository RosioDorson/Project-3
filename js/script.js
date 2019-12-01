const $jobTitle = $('#title')
const $otherJob = $('#other-title')


//link the script file to the HTML and check that they are working by logging it to the console.
console.log('hello');
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
// $('#title').change(function () {
//     if $('#title').val()=== 'Other' {
//         $('#other-title').show();
//     } else {
//         $('#other-title').hide();
//     }
// })
//until a theme is selected from the design menu no color color options appear and the color field ready "please select a tshirt theme"

//once a design is chosen only the color options for that design should be shown 

//
//
//
//
//
//
//