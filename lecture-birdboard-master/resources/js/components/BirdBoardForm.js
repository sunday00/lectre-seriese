import Axios from "axios";

class BirdBoardForm {
    //constructor
    constructor(data){

        this.original = JSON.parse(JSON.stringify(data));
        Object.assign(this, data);
        this.errors = {};
        this.submitted = false;
        
    }

    data(){

        return Object.keys(this.original).reduce((data, attribute)=>{
            data[attribute] = this[attribute];
            return data;
        }, {});

        // let data = {};

        // for (let attribute in this.original){
        //     data[attribute] = this[attribute];
        // }

        // return data;
    }

    submit(endpoint, requestType="post"){
        return axios[requestType](endpoint, this.data())
            .catch(this.onFail.bind(this))
            .then(this.onSuccess.bind(this));
    }

    post(endpoint){
        return this.submit(endpoint, "post");
    }
    patch(endpoint){
        return this.submit(endpoint, "patch");
    }
    delete(endpoint){
        return this.submit(endpoint, "delete");
    }

    onFail(error) {
        this.errors = error.response.data.errors;
        this.submitted = false;
        throw error;
    }

    onSuccess(res){
        this.submitted = true;
        this.errors = {};

        return res;
    }

    reset(){
        Object.assign(this, this.original);
    }
};

export default BirdBoardForm;