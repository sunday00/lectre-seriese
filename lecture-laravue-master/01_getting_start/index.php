<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue 01</title>
    <?php include("../nav.php") ?>
</head>
<body>

    <section id="pz">

        <input type="text" id="input" v-model="message">
        <p> the message about {{ message }} is now bound </p>

        <ul>
            <li v-for="fruit in fruits">{{ fruit }}</li>
        </ul>

        <ul>
            <li v-for="fruit in fruits" v-text="fruit"></li>
        </ul>

        <input v-model="newFruit" type="text" v-on:keyUp.enter="addFruit">
        <button v-on:click="addFruit">Add fruit</button>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        
        let app = new Vue({
            el: '#pz',
            data(){
                return {
                    message : 'hello vue',
                    fruits  : ['apple', 'banana', 'cherry'],
                    newFruit: ''
                }
            },
            mounted(){
                console.log("m");
            },
            methods: {
                addFruit(){
                    this.fruits.push(this.newFruit);
                    this.newFruit = '';
                }
            }
        });

        

    </script>
</body>
</html>