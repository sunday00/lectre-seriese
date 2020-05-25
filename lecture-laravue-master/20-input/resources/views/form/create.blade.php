<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>20_input</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <style>
        body>header{ margin-bottom: 20px; }
        body{ padding: 40px; }
        .control { margin-bottom:30px; }
    </style>
</head>
<body>
    <section id="pz" class="container">
        
        {{-- <input type="text" v-model="coupon"> --}}
        {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value"> --}}

        <coupon v-model="coupon"></coupon>


    </section>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <script src="{{mix('/js/app.js')}}"></script>
</body>
</html>