<template>
    <div class="message">
        <div class="message-header">
            <p>
                Push
            </p>
        </div>
        <div class="message-body">
            <form action="/statuses" @submit.prevent="onSubmit" method="POST">
                <p class="control">
                    <textarea class="textarea" id="" placeholder="" v-model="form.body"></textarea>
                </p>
                <p class="control buttons is-right">
                    <button type="submit" class="button is-rounded is-outlined is-primary is-small">OK</button>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: new Form({ body: '' })
        }
    },
    methods:{
        onSubmit(){
            this.form.post('/statuses')
            .then(status => this.$emit('done', status));
        }
    }
}
</script>

<style>

</style>