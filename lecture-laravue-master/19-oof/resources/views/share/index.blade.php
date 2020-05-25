<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>24_share</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; }
        
    </style>
</head>
<body>
    <section id="pz" class="container">
        
        <div id="one">
            <h1 class="title">
                @{{ user.name }} : @{{ user.shared.age }}
            </h1>
        </div>

        <div id="two">
            <h1 class="title">
                @{{ user.name }} : @{{ user.shared.age }}
            </h1>
        </div>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="{{mix('/js/share.js')}}"></script>
</body>
</html>