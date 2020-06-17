<?php
    require "database/db.php";

    // foreach ($dischi as $lista) {
    //     var_dump($lista);
    //     foreach ($lista as $dati){
    //         var_dump($dati);
    //     }
        
    // }

?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Dischi Musicali</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="public/app.css">
    </head>

    <body>
        <header>
            <div class="cont">
                <img src="logo.png" alt="logo" />
            </div>
        </header>

        <div class="select">
            <select class="custom-select">
                <option selected data = "tutto">Scegli il genere musicale - All</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Metal">Metal</option>
                <option value= "Jazz">Jazz</option>
            </select>
        </div>

        <div class="disco">
            <?php
                foreach ($dischi as $lista) {
                
            ?>
            <div class="cds-container containerx main-visible" data-genere = '{{genre}}'>
                <div class="cd">
                    <img src=<?php echo $lista['poster']?> alt="">
                    <h3><?php echo $lista['title']?></h3>
                    <span class="author"><?php echo $lista['author']?></span>
                    <span class="year"><?php echo $lista['year']?></span>
                </div>
            </div><?php
        }
        ?>
        </div>

        <script src="public/app.js"></script>
    </body>
</html>