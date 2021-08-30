/* Funciones JavaScript administrador Mastercad
   Versión 0.1
   Autor: nicolas.gonzalez@solventa.com.ar
*/
$(document).ready(function() {
	/* ALTA TARJETAS MASTERCARD */

	//OPCIONES DE DATOS DE ENTREGA EN DOMICILIO PART / OTRO
    $("#show-shipping").click(function() {
    	$( "#shipping" ).toggle();
    });


    //OPCIONES DE FORMAS DE PAGO FIN
    /* ALTA TARJETAS MASTERCARD FIN  */

     $.datepicker.regional['es'] = {
            closeText: 'Cerrar',
            prevText: '<Ant ',nextText: 'Sig>',
            currentText: 'Hoy',
            monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié;', 'Juv', 'Vie', 'Sáb'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            weekHeader: 'Sm',
            dateFormat: 'yy-mm-dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
            };
            $.datepicker.setDefaults($.datepicker.regional['es']);
    $("#fechadesde").datepicker();
    $("#fechahasta").datepicker();
    $("#fechaNacimiento").datepicker();
    $("#Fecha").datepicker();

    $("#Devolucion").click(function() {  
        if($("#Devolucion").is(':checked')) {  
            $("#Devolucion").val(1);  
        } else {  
            $("#Devolucion").val(0);   
        }  
    });   

});

