<?php

if(  is_dir( getcwd()."\\{$argv[1]}" )  ){
    echo "\n";
    echo "\n";
    echo ("dir is already exists");
    echo "\n";
    echo "\n";
    die();
}

mkdir("./{$argv[1]}");
$file = fopen("./{$argv[1]}/index.php", "w");
$text = "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>{$argv[1]}</title>
    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css\">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; }
    </style>
</head>
<body>
    <header>
        <?php include(\"../nav.php\") ?>
    </header>
    <section id=\"pz\" class=\"container\">

        <component-example></component-example>

    </section>
    <script defer src=\"https://use.fontawesome.com/releases/v5.3.1/js/all.js\"></script>
    <script src=\"https://cdn.jsdelivr.net/npm/vue/dist/vue.js\"></script>
    <script src=\"/{$argv[1]}/dist/app.js\"></script>
</body>
</html>
";

fwrite($file, $text);
fclose($file);

$file2 = fopen("./{$argv[1]}/main.js", "w");
$text2 = "import ComponentExample from './components/ComponentExample.vue';

let app = new Vue({
    el: '#pz',
    components:{
        ComponentExample
    },
    data(){
        return {
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
});";

fwrite($file2, $text2);
fclose($file2);

mkdir("./{$argv[1]}/components");
$file3 = fopen("./{$argv[1]}/components/ComponentExample.vue", "w");
$text3 = "<template>
<div>
  
</div>
</template>

<script>
export default {
    props:[

    ]
}
</script>

<style>

</style>";

fwrite($file3, $text3);
fclose($file3);

$file4 = fopen("./{$argv[1]}/package.json", "w");
$text4 = "{
    \"name\": \"{$argv[1]}\",
    \"version\": \"1.0.0\",
    \"description\": \"\",
    \"main\": \"main.js\",
    \"scripts\": {
      \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\",
      \"watch\": \"npx webpack --mode=development --watch\",
      \"dev\": \"npx webpack --mode=development\",
      \"prod\": \"npx webpack\"
    },
    \"keywords\": [],
    \"author\": \"\",
    \"license\": \"ISC\",
    \"babel\": {
      \"presets\": [
        \"es2015\"
      ]
    },
    \"devDependencies\": {
        \"@babel/core\": \"^7.8.6\",
        \"@babel/preset-env\": \"^7.8.6\",
        \"babel-loader\": \"^8.0.6\",
        \"clean-terminal-webpack-plugin\": \"^2.1.0\",
        \"css-loader\": \"^3.4.2\",
        \"sass-loader\": \"^8.0.2\",
        \"style-loader\": \"^1.1.3\",
        \"vue-loader\": \"^15.9.0\",
        \"vue-template-compiler\": \"^2.6.11\",
        \"webpack\": \"^4.42.0\",
        \"webpack-cli\": \"^3.3.11\"
    }
  }";

fwrite($file4, $text4);
fclose($file4);

$file5 = fopen("./{$argv[1]}/webpack.config.js", "w");
$text5 = "// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

module.exports = {
    entry: './main.js',
    output: {
        path: `\${__dirname}/dist`,
        filename: 'app.js',
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new CleanTerminalPlugin()
    ]
}";

fwrite($file5, $text5);
fclose($file5);

echo "\n";
echo "\n";
echo "complete\n";
echo "\n";
echo "\n";

