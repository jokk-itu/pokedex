<?php
function fetch($from, $to) 
{
  for($i = $from; $i < $to; $i++) {
    $url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'. $i .'.png';
    $file_name = basename($url);
    echo $file_name . ' ';
    if(file_put_contents( $file_name,file_get_contents($url))) {
        echo "File downloaded successfully. \n";
    }
    else {
        echo "File downloading failed. \n";
    }
 }
}

//From gen1 to gen8
fetch(1, 899);

//Mega evolutions (some of them don't exist, hence a 404 is received)
fetch(10001, 10221);
 
?>
