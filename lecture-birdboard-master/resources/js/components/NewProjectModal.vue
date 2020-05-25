<template>
  <modal name="create-project-modal" classes="p-10 bg-card rounded-lg" :height="'auto'" @closed="closed">
        <form @submit.prevent="submit">
            <h1 class="font-normal mb-16 text-center text-2xl">Create New Project</h1>

            <div class="flex">
                <div class="flex-1 mr-4">
                    <div class="mb-4">
                        <label for="title" class="text-sm block mb-2">Title</label>
                        <input type="text" id="title" class="border-muted-light p-2 py-2 px-2 text-xs block w-full rounded bg-card" 
                         :class="form.errors.title ? 'border-red-400 border-2' : 'border'"
                         placeholder="Title" v-model="form.title" />
                         <span class="text-xs text-red-600" v-show="form.errors.title" v-text="form.errors.title ? form.errors.title[0] : ''"></span>
                    </div>
                    <div class="mb-4">
                        <label for="description" class="text-sm block mb-2">Description</label>
                        <textarea id="description" class="border-muted-light p-2 py-2 px-2 text-xs block w-full rounded bg-card" 
                         :class="form.errors.description ? 'border-red-400 border-2' : 'border'"
                         rows="7" placeholder="Description" v-model="form.description"></textarea>
                         <span class="text-xs text-red-600" v-show="form.errors.description" v-text="form.errors.description ? form.errors.description[0] : ''"></span>
                    </div>
                </div>
                <div class="flex-1 ml-4">
                    <div class="mb-4">
                        <label for="new-task" class="text-sm block mb-2">Tasks</label>
                        <input type="text" id="new-task" class="border border-muted-light p-2 py-2 px-2 mb-2 text-xs block w-full rounded bg-card" placeholder="Task 1" 
                        v-for="(task, idx) in form.tasks" :key="idx" v-model="task.body" />
                    </div>
                    <button type="button" class="inline-flex items-center" @click="addTask">
                        <i class="mr-2 border-2 border-gray-500 rounded-full p-1 text-gray-600">
                            <svg class="w-3 " aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                        </i>
                        
                        <span class="items-center">Add new task</span>
                    </button>
                </div>
            </div>

            <footer class="flex justify-end">
                <button type="button" class="button mr-2 border-red-300 text-red-300 border-outlined"
                    @click.prevent="$modal.hide('create-project-modal')">Cancel</button>
                <button type="submit" class="button">Create!</button>
            </footer>
        </form>
    </modal>
</template>

<script>
import BirdBoardFrom from './BirdBoardForm';

export default {
    data(){
        return {
            form: new BirdBoardFrom({
                title : '',
                description: '',
                tasks : [{ body: '' }]
            }),
            // errors: {}
        }
    },
    methods: {
        addTask(){
            this.form.tasks.push( { body: '' } );
            this.errors = {};
        },
        closed(){
            this.errors = {}
        },
        async submit(){

            if(! this.form.tasks[0].body ){
                delete this.form.original.tasks;
            }

            this.form.submit("/projects")
                .then((response) => {
                    location = response.data.message;
                    console.log(response);

                });
                // .catch(err => console.log(err));
            
        }
    }
}
</script>

<style>

</style>