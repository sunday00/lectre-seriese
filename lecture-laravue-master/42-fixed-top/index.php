<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>42-fixed-top</title>
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

        <Fixed-Top @is-fixed-e='toggleFix'>
            <nav :class="['w-screen','top-0', {'fixed' : isFixed}]">
                <ul class="flex">
                    <li class="mr-6">
                        <a class="hover:text-blue-800" href="#">Active</a>
                    </li>
                    <li class="mr-6">
                        <a class="hover:text-blue-800" href="#">Link</a>
                    </li>
                    <li class="mr-6">
                        <a class="hover:text-blue-800" href="#">Link</a>
                    </li>
                </ul>
            </nav>
        </Fixed-Top>
<!-- 
        <Fixed-Top @is-fixed-e='toggleFix'>
            <nav :class="['w-screen','top-0', {'fixed' : isFixed}]">
                a
            </nav>
        </Fixed-Top> -->

    </section>

    <section>
        <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>
                <img src="https://placeimg.com/640/480/any">
            </li>
            <li>
                <img src="https://placeimg.com/640/480/any?0">
            </li>
            <li>
                <img src="https://placeimg.com/640/480/any?1">
            </li>
            <li>
                <img src="https://placeimg.com/640/480/any?2">
            </li>
            <li>
                <img src="https://placeimg.com/640/480/any?3">
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis id, officia commodi adipisci aliquid totam quibusdam dolorum delectus. Eum quam dicta impedit. Quaerat possimus, cumque nihil aut similique incidunt?</li>
        </ul>
    </section>

    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/42-fixed-top/dist/app.js"></script>
</body>
</html>
