$(document).ready(function() {
    console.log(this);
    

    var val = $('.disco').val();

    if (typeof val !== typeof undefined && val !== false) {
        $.ajax({
            'url':'../database/db.php',
            'method': 'GET',
            'data': {
                'arrivato': 'ok'
            },
            'success': function(data){
                for (var i = 0; i < data.length; i++) {

                    var disco = data[i];

                    creo_dischi(disco);

                    if ($('option').val() != disco.author) {
                        $('.custom-select').append('<option val ="'+ disco.author +'">' + disco.author + '</option>');
                    }
                }
            },
            'error': function() {
                alert('si è verificato un errore');
            },
        });
    }

    function creo_dischi(dischi){

        var template = Handlebars.compile($('#template-handlebars').html());

        // var template2 = Handlebars.compile($('#template2-handlebars').html());

        var dati_disco = {
            'copertina': dischi.poster,
            'titolo': dischi.title,
            'autore': dischi.author,
            'anno': dischi.year
        };

        var card = template(dati_disco);
        $('.disco').append(card);

        // if ($('option').val() != dischi.author) {
        //     var option = {'autore' : dischi.author};
        //     var select = template2(option);
        //     $('.custom-select').append(select);
        // }
    }


    // clicclando sul menu a tendina (select) assegno l'attributo "selected" alla voce che seleziono ogni volta. il click non funziona perchè il tag option non viene visto nell'HTML, va usato il "change".
    $('.custom-select').change(function(){

        var autore_selezionato = $(this).val();

        $.ajax({
            'url':'../database/db.php',
            'method': 'GET',
            'data': {
                'autore': autore_selezionato
            },
            'dataType':'json',
            'success': function(data){
                $('.disco').empty();
                for (var j = 0; j < data.length; j++) {

                    var disco = data[j]; 
                    creo_dischi(disco);
                }
            },
            'error': function() {
                alert('si è verificato un errore');
            },
        });
    });

})