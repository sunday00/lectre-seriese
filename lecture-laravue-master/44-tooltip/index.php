<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>44-tooltip</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; display: flex; align-items: center; justify-content: center; height: 100vh;}
        .tooltip{ padding:10px; background-color:#41b883; color:white; border-radius: 15px; margin:5px;}
    </style>
</head>
<body>
    <header>
        <?php include("../nav.php") ?>
    </header>
    <section id="pz" class="container">

        <!-- <p>hello
            <span data-tooltip="toolTip!"
                data-tooltip-placement="right">Hover! this!</span>
        </p> -->
        
        <!-- <p>
        <span v-tooltip:top.foo="'toolTip!'"
                >Hover! this!</span>
        </p> -->

        <p>hello
            <span data-tooltip="product-tooltip">
                Hover! this!
            </span>
        </p>
        <ComponentToolTip name="product-tooltip" placement="right">
            <h1 class="title">Product</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </ComponentToolTip>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/44-tooltip/dist/app.js"></script>
</body>
</html>
