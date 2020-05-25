<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>19_OOF</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; }
        .control { margin-bottom:30px; }
    </style>
</head>
<body>
    <section id="pz" class="container">
        <div>
            @include('projects.list')
            <form action="/projects/store" method="POST" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">
                @csrf
                <div class="control">
                    <label for="name" class="label">name</label>
                    <input class="input" type="text" name="name" id="name" v-model="name" />
                    <span class="help is-danger" v-if="errors.has('name')" v-text="errors.get('name')"></span>
                </div>
                <div class="control">
                    <label for="description" class="label">description</label>
                    <input class="input" type="text" name="description"id="description" v-model="description" />
                    <span class="help is-danger" v-if="errors.has('description')" v-text="errors.get('description')"></span>
                </div>
                <input class="button is-primary" type="submit">
            </form>
        </div>
    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="{{mix('/js/app.js')}}"></script>
</body>
</html>