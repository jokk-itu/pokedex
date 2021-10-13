<?php
 
 for($i = 1; $i < 494; $i++) {
    $url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'. $i .'.png';
    $file_name = basename($url);
    echo $file_name;
    if(file_put_contents( $file_name,file_get_contents($url))) {
        echo "File downloaded successfully \n";
    }
    else {
        echo "File downloading failed. \n";
    }
 }
?>
