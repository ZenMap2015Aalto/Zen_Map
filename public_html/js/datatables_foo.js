/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
$(document).ready(function() {
    $('#example').DataTable();
} );
*/

/* testing a simple data form
$(document).ready(function() {
    var t = $('#example').DataTable();
    var namein = 'Rami';
    var positionin = 'Codemaster';
    var deliverycenterin = 'ZenMap';
    var indoorin = 3;
    var outdoorin = 5;
 
    $('#addRow').on( 'click', function () {
        t.row.add( [
            namein,
            positionin,
            deliverycenterin,
            indoorin,
            outdoorin
        ] ).draw( false );
    } );
 
    // Automatically add a first row of data
    //$('#addRow').click();
} );

*/

$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('button').click( function() {
        var data = table.$('input, select').serialize();
        alert(
            "The following data would have been submitted to the server: \n\n"+
            data.substr( 0, 120 )+'...'
        );
        return false;
    } );
} );

