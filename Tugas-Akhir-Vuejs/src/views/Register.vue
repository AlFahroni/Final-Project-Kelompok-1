<template>
  <v-container>
    <h2 class="text-h4 text-center">Register</h2>
    <div class="gray lighten-5 rounded pa-4 mt-2">
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        color="black--text"
    >
        <v-text-field
        v-model="email"
        label="E-mail"
        color="grey darken-4"
        required
        filled
        ></v-text-field>

        <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            color="grey darken-4"
            filled
            @click:append="show1 = !show1"
        ></v-text-field>

        <v-text-field
        v-model="name"
        label="Nama Lengkap"
        color="grey darken-4"
        required
        filled
        ></v-text-field>   

        <v-file-input
          accept="image/*"
          label="Photo Profile"
          v-model="photo"
        ></v-file-input>

        <div class="text-center">
            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Daftar
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            :to="'/'"
            >
            Batal
            </v-btn>
            <hr class="mt-3 mb-3">
            <span>Sudah Punya Akun Silahkan Login <router-link :to="'/login'" class="blue--text">Disini</router-link></span>
        </div>
    </v-form>
    </div>
    <alert/>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
import Alert from '../components/Alert.vue'
  export default {
  components: { Alert },
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      show1: false,
      password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
      photo:null
    }),

    methods: {
      ...mapActions({
          setAlert:'alert/set'
      }),
      validate () {
        this.$refs.form.validate()
        let dataForm = new FormData()
        dataForm.append('email',this.email)
        dataForm.append('name',this.name)
        dataForm.append('password',this.password)
        dataForm.append('photo_profile',this.photo)
        
        let config = {
          method : "post",
          url : "https://demo-api-vue.sanbercloud.com/api/v2/auth/register",
          data : dataForm
        }

      this.axios(config)
        .then((response) => {
          console.log(response)
          this.setAlert({
            status : true,
            color : 'blue lighten-1',
            text : 'Pendaftaran Berhasil'
          })
          this.reset()
          })
        .catch(error => {console.log(error)})
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>