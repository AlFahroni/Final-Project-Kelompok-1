<template>
  <v-container>
    <h2 class="text-h4 text-center">Login</h2>
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

        <div class="text-center">
            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
            >
            Login
            </v-btn>

            <v-btn
            color="error"
            class="mr-4"
            :to="'/'"
            >
            Batal
            </v-btn>
            <hr class="mt-3 mb-3">
            <span>Belum Punya Akun Silahkan Daftar <router-link :to="'/register'" class="blue--text">Disini</router-link></span>
        </div>
    </v-form>
    </div>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
  export default {
    data: () => ({
      valid: true,
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
        }
    }),

    methods: {
      ...mapActions({
          setAlert : 'alert/set',
          setToken : 'auth/setToken'
      }),
      validate () {
        this.$refs.form.validate()
        let dataForm = new FormData()
        dataForm.append('email',this.email)
        dataForm.append('password',this.password)
        
        const config = {
          method : "post",
          url : "https://demo-api-vue.sanbercloud.com/api/v2/auth/login",
          data : dataForm
        }

        this.axios(config)
        .then((response) => {
          this.setToken(response.data.access_token)
          this.setAlert({
            status : true,
            color : 'blue lighten-1',
            text : 'Berhasil Login'
          })
        })
        .catch((response) => {
          console.log(response.data)
          this.setAlert({
            status : true,
            color : 'deep-orange lighten-1',
            text : 'Gagal Login'
          })
        })
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