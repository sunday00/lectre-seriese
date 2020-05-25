<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>40-arcodian</title>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; }
    </style>
</head>
<body>
    <header>
        <?php include("../nav.php") ?>
    </header>
    <section id="pz" class="container">

        <question :questions="questions"></question>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/40-arcodian/dist/app.js"></script>
</body>
</html>
