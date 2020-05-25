<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>11_tab</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        header{ margin-bottom: 20px; }
        body{ padding: 40px; background-color: #ddd;}
    </style>
</head>
<body>
    <header>
        <?php include("../nav.php") ?>
    </header>
    <section id="pz" class="container">

        <tabs>
            <tab name="About" :selected="true">
                <h1 class="title is-2" style="background-color:tomato;">This is AboutTab</h1>
            </tab>
            <tab name="Woks" :selected="false">
                <h1 class="title is-2" style="background-color:cornflowerblue;">This is WorkTab</h1>
            </tab>
            <tab name="Member Ship" :selected="false">
                <h1 class="title is-2" style="background-color:forestgreen;">This is MemberShipTab</h1>
            </tab>
        </tabs>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/11_tab/main.js"></script>
</body>
</html>