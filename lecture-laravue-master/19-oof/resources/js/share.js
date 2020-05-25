let shared = {
    age : 30
}

new Vue({
    el: '#one',
    data(){
        return {
            user: {
                name: 'Sunday00',
                shared: shared
            }
        }
    }
});

new Vue({
    el: '#two',
    data(){
        return {
            user: {
                name: 'Monday7',
                shared: shared
            }
        }
    }
});