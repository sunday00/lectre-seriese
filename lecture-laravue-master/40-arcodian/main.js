import question from './components/question.vue';

let app = new Vue({
    el: '#pz',
    components:{
        question
    },
    data(){
        return {
            questions: [
                { question: "hello", answer: "world" },
                { question: "foo", answer: "bar" },
                { question: "baz", answer: "qux" },
                { question: "quux", answer: "corge" },
                { question: "grault", answer: "graply" },
                { question: "waldo", answer: "fred" },
                { question: "plugh", answer: "xyzzy" },
            ]
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
});