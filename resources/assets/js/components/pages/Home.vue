<template>
    <div>
        <modal-edit :id="edit_id" @input="closeModal" v-if="showModal"></modal-edit>
        <modal-create @input="closeModal" v-if="showModalCreate"></modal-create>

        <div class="container mt-3" v-if="$auth.check()">

            <button type="button" class="btn btn-primary" @click="createTask">Add new task</button>

            <div class="card mt-3 mb-3">
                <div class="card-header">
                    Task list
                </div>

                <div class="card-body1">

                    <ul class="list-group list-group-flush" v-if="tasks.length">
                        <li class="list-group-item" :class="task.status === 'completed' ? 'list-group-item-success' : ''" v-for="task in tasks">

                            <span class="task-left">
                                <i class="mdi mdi-numeric-1-circle priority-icon" v-if="task.priority === 1"></i>
                                <i class="mdi mdi-numeric-2-circle priority-icon" v-if="task.priority === 2"></i>
                                <i class="mdi mdi-numeric-3-circle priority-icon" v-if="task.priority === 3"></i>
                                <i class="mdi mdi-checkbox-blank-outline task-status" @click="toggleStatus(task.id)" v-if="task.status === 'continues'"></i>
                                <i class="mdi mdi-checkbox-marked-outline task-status" @click="toggleStatus(task.id)" v-if="task.status === 'completed'"></i>
                                {{task.name}}
                            </span>

                            <button class="btn btn-outline-secondary btn-sm btn-edit ml-3" @click="editTask(task.id)">EDIT</button>
                            <span class="badge badge-task badge-pill tag-badge" v-if="task.tags.length" v-for="tag in task.tags">
                                {{ tag.name }}
                            </span>
                        </li>
                    </ul>
                    <ul class="list-group list-group-flush" v-else>
                        <li class="list-group-item no-tasks">No tasks found for this user</li>
                    </ul>

                </div>

            </div>


        </div>

        <div class="container mt-3" v-else>
            <div class="col-md-12 text-center">
                <p class="no-tasks mt-5 mb-5">Login to be able to work with tasks</p>
                <p><b>Default username:</b> admin</p>
                <p><b>Default password:</b> admin</p>
            </div>
        </div>

    </div>
</template>

<script>
    import VueTagsInput from '@johmun/vue-tags-input';
    import ModalEdit from "../ModalEdit"
    import ModalCreate from "../ModalCreate"
    export default {
        data() {
            return {
                showModal: false,
                showModalCreate: false,
                showNewTaskForm: false,
                edit_id: null,
                tasks: [],
                tag: '',
                autocompleteItems: [],
                newtask: {
                    name: '',
                    priority: '2',
                    status: 'continues',
                    tags: [],
                },
            };
        },
        mounted(){
            if(this.$auth.check()){
                this.getTasks();
            }
        },
        methods: {
            createTask(){
              this.showModalCreate = true;
            },
            toggleStatus(id){
                this.$http.post('/api/toggle-status', {id: id}).then(response=>{
                    console.log(response);
                    this.getTasks();
                });
            },
            editTask(id){
                this.edit_id = id;
                console.log('id', this.edit_id);
                this.showModal = true;
            },
            closeModal(){
                this.edit_id = null;
                this.showModal = false;
                this.showModalCreate = false;
                this.getTasks();
            },
            getTasks(){
                this.$http.get('/api/get-tasks').then(response=>{
                    this.tasks = response.body;
                    console.log('response',response);
                });
            }
        },
        components: {
            VueTagsInput,
            'modal-edit': ModalEdit,
            'modal-create': ModalCreate,
        },
    }
</script>
