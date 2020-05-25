<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>33-scope</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
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

        <menu-list :items="['apple','banana','cherry','durian','egg', 'fig']">
            <!-- <template slot-scope="data"> -->
            <template slot-scope="{qux}">
                <!-- <h5> {{ data.thing }} {{ data.item }} {{ data.bar }} </h5> -->
                <h5> {{ qux }} </h5>
            </template>
        </menu-list>

        <named-slot-exam :items="['apple','banana','cherry','durian','egg', 'fig']">
            <template slot="menu-item" slot-scope="props">
                <div>
                    <em>{{ props.item }}</em>
                </div>
            </template>
        </named-slot-exam>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/33-scope/dist/app.js"></script>
</body>
</html>
