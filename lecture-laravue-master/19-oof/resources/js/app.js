class Error{
    constructor(){
        this.err = {}
    }

    record(err){
        this.err = err;
    }

    has(target){
        return this.err.hasOwnProperty(target);
    }

    get(target){
        if (this.err[target]){
            return this.err[target][0];
        }
    }

    clear(target){
        delete this.err[target];
    }
}

new Vue({
    el: '#pz',
    created() {
        console.log("hello");
    },
    data(){
        return {
            name: '',
            description: '',
            errors: new Error()
        }
    },
    methods:{
        onSubmit(){
            let data = {
                name: this.name,
                description: this.description
            };
            axios.post('/projects/store', /*this.$data*/ data)
            .then(response => {
                console.log(response);
                this.name='';
                this.description='';
                // form.reset();
            }).catch(error => this.errors.record(error.response.data.errors));
        }
    }
});