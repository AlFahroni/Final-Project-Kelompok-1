<template>
    <v-container>
        <v-card v-if="blog.id">
            <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'" class="white--text" height="350px">
            <v-card-title class="fill-height align-end" v-text="blog.title">

            </v-card-title>
            </v-img>

            <v-card-text>
        
                    <v-icon>mdi-format-title</v-icon>   
                    {{ blog.title }}  
                       <v-divider class="mt-2 mb-2"></v-divider>

                    <v-icon>mdi-note</v-icon>    
                    {{ blog.description }}  
                      <v-divider class="mt-2 mb-2"></v-divider>
        </v-card-text>
            
 
        </v-card> 
            <div v-if="!guest">
                    <v-btn
                        color="red lighten-2"
                        class="float-right mt-5"
                        dark
                        @click="hapus"
                    >
                        <v-icon >mdi-delete</v-icon>  
                    </v-btn>
                            <div class="text-center">
                                <v-dialog
                                v-model="dialog"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }" >
                                    <v-btn
                                    color="red lighten-2"
                                    class="float-left mt-5"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="editblog(blog)"
                                    >
                                    Edit
                                    </v-btn>
                                </template>

                                    <v-card>
                                        <h2 class="mx-5">Edit Blog</h2>
                                      <v-text-field
                                    class="mx-5"
                                    v-model="title"
                                      ></v-text-field>
                                       
                                      <v-text-field
                                    class="mx-5"
                                    v-model="description"
                                      ></v-text-field>
                                       

                                        <v-divider></v-divider>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                         <v-btn
                                            color="primary"
                                            text
                                            @click="edit"
                                        >
                                            Edit
                                        </v-btn>
                                        <v-btn
                                            color="error"
                                            text
                                            @click="dialog = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </div>
                            <div class="text-center">
                                <v-dialog
                                v-model="uploadFoto"
                                width="500"
                                >
                                <template v-slot:activator="{ on, attrs }" >
                                    <v-btn
                                    color="red lighten-2"
                                    class="float-left mt-5 ml-5"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    >
                                    Upload Foto
                                    </v-btn>
                                </template>

                                    <v-card>
                                        <h2 class="mx-5">Update Foto</h2>
                                      <v-file-input
                                            class="mx-5 my-2"
                                            label="File input"
                                            v-model="chosenFile"
                                            filled
                                            prepend-icon="mdi-camera"
                                        ></v-file-input>
                            
                                      <v-divider></v-divider>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>
                                         <v-btn
                                            color="primary"
                                            text
                                            @click="updateFoto"
                                        >
                                            Submit
                                        </v-btn>
                                        <v-btn
                                            color="error"
                                            text
                                            @click="uploadFoto = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog>
                                </div>
            
            </div>                            
        <alert/>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Alert from '../components/Alert.vue';

export default {
 
    data: () => ({
        blog: {},
        title: '',
        description: '',
        idEdit: '',
        apiDomain: 'https://demo-api-vue.sanbercloud.com',
        dialog: false,
        uploadFoto: false,
        chosenFile: null,
    }),
    components :{       
        Alert 
    },
    computed:{
        ...mapGetters({
            guest:'auth/guest'
        })
    },
    methods: {              
        ...mapActions({
            setAlert:'alert/set'
        }),
        go() {
            let { id }  = this.$route.params;

            const config = {
                method : 'get',
                url : `${this.apiDomain}/api/v2/blog/${id}`
            }

            this.axios(config)
            .then(response => {
                let { blog } = response.data;
                console.log(blog.photo);
                this.blog = blog;
            })
            .catch(error => {
                console.log(error);
            })
        },
        
      hapus() {
        let { id } = this.$route.params;

          const config = {
                method : 'post',
                url : `${this.apiDomain}/api/v2/blog/${id}`,
                params: { _method : 'DELETE'},
                headers: {
                     'Authorization' : 'Bearer' + this.$store.state.auth.token,
                }
            }
            this.axios(config)
            .then((response) => {
                this.setAlert({
                    status : true,
                    color : 'deep-orange lighten-1',
                    text : response.data.message
                })
            })
                    .catch( (error) => {
                        console.log(error)
                    })
            },

            editblog(blog){
                this.title = blog.title
                this.description = blog.description
                this.idEdit = blog.id

                console.log(this.title)
            },

                            
                    edit() {

                            let { id } = this.$route.params;
                            console.log(id)
                            let formData = new FormData();

                            formData.append('title', this.title)
                            formData.append('description', this.description )

                            const config = {
                                method : 'post',
                                url : `${this.apiDomain}/api/v2/blog/${id}`,
                                params: { _method : 'PUT'},
                                headers: {
                                    'Authorization' : 'Bearer' + this.$store.state.auth.token,
                                },
                                data : formData,
                            }

                            this.axios(config)
                            .then((response) => {
                                this.go()
                                this.setAlert({
                                    status : true,
                                    color : 'deep-orange lighten-1',
                                    text : response.data.message
                                })
                            })
                            .catch((error) => {
                                console.log(error)
                            })

                    },

                    updateFoto() {
                        let file = this.chosenFile
                        let { id } = this.$route.params;

                        let formData = new FormData();
                        formData.append('photo', file)

                        const config = {
                            method: "post",
                             url : `${this.apiDomain}/api/v2/blog/${id}/upload-photo`,
                             data :formData,
                              headers: {
                                    'Authorization' : 'Bearer' + this.$store.state.auth.token,
                                },
                        }

                        this.axios(config)
                        .then((response) => {
                            this.setAlert({
                                    status : true,
                                    color : 'deep-orange lighten-1',
                                    text : response.data.message
                                })
                            this.go()
                        })

                        .catch((error) => {
                            console.log(error)
                        })
                    }


    },
    created() {
        this.go();
    }
}
</script>