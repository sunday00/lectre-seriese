<script>
export default {
    props:[

    ],
    data(){
        return {
            name: 'Doe'
        }
    },
    render(createEl){
        return createEl('h1', {
            class: 'title',
            style: [
                { backgroundColor: 'red' },
                { padding: '10px' }
            ]}, [
                `Hello `,
                createEl('span', {
                    style: {
                        color: 'blue'
                    }
                }, this.name),
                ' ?'
            ]);
    }
}
</script>

<style>

</style>