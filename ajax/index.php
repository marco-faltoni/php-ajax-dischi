<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi Musicali</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="../public/app.css">
    </head>

    <body>
        <header>
            <div class="cont">
                <img src="../logo.png" alt="logo" />
            </div>
        </header>

        <div class="select">
            <select class="custom-select">
                <option selected data = "tutto">Scegli l'Artista - All</option>
            </select>
        </div>

        <div class="disco" value='ajax'>

        </div>

        <script id="template2-handlebars" type="text/x-handlebars-template">
            <option value="{{autore}}">{{autore}}</option>
        </script>

        <script id="template-handlebars" type="text/x-handlebars-template">
            <div class="cds-container containerx main-visible" data-autore = '{{autore}}' >
                <div class="cd">
                    <img src="{{copertina}}" alt="">
                    <h3>{{titolo}}</h3>
                    <span class="autore">{{autore}}</span>
                    <span class="anno">{{anno}}</span>
                </div>
            </div>
        </script>

        <script src="../public/app.js"></script>
    </body>
</html>