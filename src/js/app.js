$(document).ready(function() {

    // creo una var vuota da richiamare dentro l'AJAX
    var array_dischi;
    // creo una variabile uguale ad un oggetto vuoto.
    var disco1 = {};

    // imposto e creo il templete handlebars da richiamre poi nella funzione
    var template_html = $('#template-handlebars').html();
    var template = Handlebars.compile(template_html);

    $.ajax({
        'url':'database/db.php',
        'method': 'GET',
        'success': function(data){
            // assegno, alla variabile creata sopra, il valore response di "data", che ha all'interno 10 oggetti dentro un array. quindi in definita mi estraggo un array con 10 oggetti.
            array_dischi = data;
            // richiamo la funzione di associazione data - disco
            associo_dischi();
        },
        'error': function() {
            alert('si è verificato un errore');
        },
    });

    function associo_dischi(){

        // con il ciclo for vado ad assegnare, ad ogni proprietà che creo dentro il mio oggetto vuoto, un valore che deve matchare con quello presente nei data che ho estratto prima. il mio ciclo for dura tanto quanto la lunghezza dell'array che ho estratto (quindi 10).
        for (var i = 0; i < array_dischi.length; i++) {
            // creo proprietà author, che sarà uguale a le keys/nomi "author" presenti dentro l'array che mi sono preso dall'ajax. faccio lo stesso procedimento per tutti le altre keys/nomi che mi interessa prendere
            disco1.author = array_dischi[i].author;
            disco1.title = array_dischi[i].title;
            disco1.year = array_dischi[i].year;
            disco1.poster = array_dischi[i].poster;
            disco1.genre = array_dischi[i].genre;

            // richiamo la funzione che mi permette di appendere, ad ogni singolo ciclo, l'oggetto che con le proprietà che ho estratto dall'array.
            handlebars(disco1);
        }
    }

    // con questa funzione appendo, ad ogni singolo ciclo, l'oggetto che con le proprietà che ho estratto dall'array.
    function handlebars(disco) {
        var html = template(disco);
        $('.disco').append(html);
    }






})