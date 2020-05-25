<template>
<div class="container">
    <div class="columns">
        <div class="column">
            <add-to-stream @done="createdStream"></add-to-stream>
            <div class="message list" v-for="status in statuses" :key="status.idx">
                <div class="message-header">
                    <p>
                        {{ status.user.name }}
                    </p>
                    <p>
                        {{ postedOn(status) }}
                        <!-- {{ status.created_at | ago }} -->
                        {{ status.user.name | last | uppercase }}
                    </p>
                </div>
                <div class="message-body" v-text="status.body"></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import moment from 'moment';
import Status from '../models/Status';
import AddToStream from './AddToStream';

export default {
    components: { 
        AddToStream
    },
    data(){
        return {
            statuses : []
        }
    },
    filters: {
        last(name){
            return name.split(' ')[1];
        },
        uppercase(value){
            return value.toUpperCase();
        }
    },
    created(){
        this.getStatuses();
    },
    compouted:{
        
    },
    methods:{
        getStatuses(){
            Status.all(statuses => this.statuses = statuses);
        },
        postedOn(status){
            return moment(status.created_at).fromNow();
        },
        createdStream(status){
            this.statuses.unshift(status);
        }
    }
}
</script>

<style scoped>
    .container {
        margin-top: 20px;
    }
    
    @keyframes into {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .message.list{
        animation: into 500ms ease-in;
        transition: 500ms;
    }

    
</style>
