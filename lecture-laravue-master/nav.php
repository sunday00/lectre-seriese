<?php

echo "<ul>";
echo "<li><a href=\"/\">home</a></li>";

$scanned = glob($_SERVER['DOCUMENT_ROOT']."/*", GLOB_ONLYDIR);
foreach($scanned as $item){
    $path = array_pop(explode("/", $item));
    if (strstr($path, "19") || strstr($path, "20") || strstr($path, "node_modules")) {
        continue;
    }
    if (is_dir($item)) {
        echo "<li>";
        echo "<a href=\"/{$path}\">{$path}</a>";
        echo "</li>";
    }
}

echo "<li>";
echo "<a href=\"http://localhost:8000\">some lectures are run with php artisan serve --host='localhost.web:8000'</a>";
echo "</li>";

echo "</ul>";

?>