<template>
    <div>
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">

                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Create task</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" @click="$emit('input')">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">

                                <div class="form-group row">
                                    <label for="newtask_name" class="col-md-12 col-form-label text-left">Task name</label>
                                    <div class="col-md-12">
                                        <input type="text" id="newtask_name" v-model="newTask.name" class="form-control" required autofocus>
                                    </div>

                                    <label for="priority" class="col-md-12 col-form-label text-left mt-3">Priority</label>
                                    <div class="col-md-12">
                                        <select id="priority" class="form-control" v-model="newTask.priority" required>
                                            <option value="1">High</option>
                                            <option value="2">Middle</option>
                                            <option value="3">Low</option>
                                        </select>
                                    </div>

                                    <label class="col-md-12 col-form-label text-left mt-3">Tags</label>
                                    <div class="col-md-12">
                                        <vue-tags-input
                                                class="tag-input"
                                                v-model="tag"
                                                :tags="newTask.tags"
                                                :autocomplete-items="filteredItems"
                                                @tags-changed="newTags => newTask.tags = newTags"
                                        />
                                    </div>

                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" @click="$emit('input')">Close</button>
                                <button type="button" class="btn btn-primary" @click="createTask">Create</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import VueTagsInput from '@johmun/vue-tags-input';
    export default {
        props: ['showModal'],
        name: "ModalCreate",
        data() {
            return {
                newTask: {
                    name: '',
                    priority: '2',
                    status: 'continues',
                    tags: [],
                },
                tag: '',
                autocompleteItems: [],
            }
        },
        mounted() {
            this.getTagsAutocomplete();
        },
        methods: {
            createTask(){
                this.$http.post('/api/create-task', this.newTask).then(response=>{
                    this.newTask.name = '';
                    this.newTask.priority = '2';
                    this.newTask.tags = [];
                    this.$emit('input')
                });
            },
            getTagsAutocomplete(){
                this.$http.post('/api/get-tags-autocomplete',{}).then(response=>{
                    console.log('get-tags-autocomplete', response.body);
                    this.autocompleteItems = response.body;
                });
            },
        },
        computed: {
            filteredItems(){
                return this.autocompleteItems.filter(i => {
                    return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
                })
            }
        },
        components: {
            VueTagsInput,
        }
    }
</script>