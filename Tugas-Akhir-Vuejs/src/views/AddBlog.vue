<template>
  <v-container>
      <v-form
            ref="form"
        >
        <v-text-field
            v-model="title"
            label="Title"
            required
            ></v-text-field>
        <v-text-field
            v-model="description"
            label="Description"
            required
            ></v-text-field>
            
            <v-btn
            color="success"
            class="mr-4"
            @click="submit"
            >
            Submit
            </v-btn>
        </v-form>
        <alert/>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '../components/Alert.vue'
export default {
    data: () => ({
        title: '',
        description: '',
         apiDomain: 'https://demo-api-vue.sanbercloud.com',
    }),
    components : {
        Alert
    },
    methods : {

        submit() {
            let formData = new FormData()

            formData.append('title', this.title)
            formData.append('description', this.description)

            const config = {
                method : "post",
                url : `${this.apiDomain}/api/v2/blog`,
                data: formData,
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
            })

            .catch((error) => {
                console.log(error)
            })
        },
        ...mapActions({
            setAlert:'alert/set'
        })
    }
}
</script>