export default {
    template: `<div>
        <h1>{{ titleProp }}</h1>
        <p>{{ message }}</p>
    </div>`,
    props:[
        'titleProp'
    ],
    data(){
        return {
            message: 'hello world'
        }
    }
};
