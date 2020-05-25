<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>10_component_bulma</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        header{ margin-bottom: 20px; }
        body{ padding: 40px; }
    </style>
</head>
<body>
    <header>
        <?php include("../nav.php") ?>
    </header>
    <section id="pz" class="container">

        <modal v-show="isShow" @close="isShow = false">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat illo eaque illum quam, labore rem saepe dolorem dicta corrupti, commodi molestias neque, odio quo earum quidem vel. Perspiciatis, modi quas.
            </p>                
        </modal>
        <button @click="isShow = true" class="button is-primary">show</button>

    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/10_component_bulma/main.js"></script>
</body>
</html>
