<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>05_bind</title>
    <?php include("../nav.php") ?>
    <style>
        button.color-blue{
            color: cornflowerblue;
        }
        button.color-red{
            color: tomato;
        }
    </style>
</head>
<body>

    <section id="pz">

        <button :title="title"
         v-text="title"
         :class="className"
         @click.prevent="chgColor"></button>
        
         <p>
             {{ reversed }}
         </p>

        <h2>sold out</h2>
        <ul>
            <li v-for="fruit in fruits" v-show="fruit.soldOut">{{ fruit.name }}</li>
        </ul>

        <h2>being sold</h2>
        <ul>
            <li v-for="fruit in nowBeingSold" v-show="!fruit.soldOut">{{ fruit.name }}</li>
        </ul>
    </section>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
        
        let app = new Vue({
            el: '#pz',
            data(){
                return {
                    title: "hello title",
                    className: "color-blue",
                    fruits: [
                        {name: "apple", soldOut: false},
                        {name: "banana", soldOut: true},
                        {name: "cherry", soldOut: false},
                        {name: "durian", soldOut: true},
                        {name: "egg", soldOut: false},
                        {name: "fo", soldOut: false},
                    ]
                }
            },
            mounted(){
                
            },
            methods: {
                chgColor(){
                    this.className = this.className === "color-blue" ? "color-red" : "color-blue";
                }
            },
            computed: {
                reversed(){
                    return this.title.split('').reverse().join('');
                },
                nowBeingSold(){
                    return this.fruits.filter( fruit => ! fruit.soldOut);
                }
            }
        });

    </script>
</body>
</html>