<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>34-wrap</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
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
    
        <portal-to></portal-to>
        
        <carousel :autoplay="10000">
            <img src="https://placeimg.com/640/480/any">
            <img src="https://placeimg.com/640/480/any?2">
            <img src="https://placeimg.com/640/480/any?3">
            <img src="https://placeimg.com/640/480/any?4">
            <img src="https://placeimg.com/640/480/any?5">
        </carousel>

        <portal-from style="background-color:red; color:white;"></portal-from>
    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="/34-wrap/dist/app.js"></script>
</body>
</html>
