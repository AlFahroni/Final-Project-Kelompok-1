<template>
    <v-app>
    <!-- <v-navigation-drawer app v-model="drawer">
      <v-list shaped>
        <v-list-item v-if="!guest">
          <v-list-item-avatar><v-icon large color="primary darken-2"> mdi-account-circle</v-icon></v-list-item-avatar>
          <v-list-item-content>Rafi.SF</v-list-item-content>
        </v-list-item>
        
          <div  v-if="guest" class="mb-2">
            <v-btn block color="primary" class="mb-1" center>
              <v-icon left> mdi-lock</v-icon>
              Login
            </v-btn>
            <v-btn block color="success">
              <v-icon left> mdi-account</v-icon>
              register
            </v-btn>
          </div>

      </v-list>
      
      <template v-slot:append v-if="!guest">
        <div class="pa-2">
            <v-btn block color="red" dark>
            <v-icon left>mdi-lock</v-icon>
            </v-btn>
        </div>
      </template>
    </v-navigation-drawer> -->

    <v-app-bar app color="primary">
      <v-toolbar-title class="white--text">Tugas Besar</v-toolbar-title>

      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="(item, index) in menu"
          :key="index"
          :to="item.route"
          color="white"
          text
          class="my-2 mr-1 ml-1"
        >
          {{ item.title }}
        </v-btn>
      </v-row>

      <div class="text-center mr-5">        
        <v-menu offset-y v-if="!guest">
          <template v-slot:activator="{ on, attrs }">
                <v-avatar size="40" v-bind="attrs" v-on="on">
                  <v-img :src="user.photo_profile ? apiDomain + user.photo_profile : 'https://dummyimage.com/40x40'">
                  </v-img>
                  </v-avatar>
          </template>
          
          <v-list dense>
            <v-subheader>{{user.name}}</v-subheader>
            <v-list-item-group
              color="primary"
            >
              <v-list-item :to="'/newblog'">
                <v-list-item-icon>
                  <v-icon>mdi-file-document-edit-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Add New Blog</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            <v-divider class="mt-2 mb-2"></v-divider>
              <v-list-item>
                <v-list-item-content>
                  <v-btn
                    outlined
                    small
                    color="red"
                    @click="logout"
                  >
                    Logout
                  </v-btn>
                </v-list-item-content>
              </v-list-item>
              
            </v-list-item-group>
          </v-list>
        </v-menu>
        <div v-else>
         <v-row justify="center" no-gutters>
            <v-btn color="white" text small :to="'/register'">Register</v-btn>
            <v-btn color="white" text small :to="'/login'">Login</v-btn>
          </v-row>
        </div>
      </div>     
    </v-app-bar>

    <v-main>    
        <router-view></router-view>
    </v-main>
    
  <v-footer
    app
    color="light-blue darken-4"
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="py-4 text-center white--text text-caption"
        cols="12"
      >
        {{ new Date().getFullYear() }} | <span>{{creator}} <v-icon class="red--text text-caption">mdi-cards-heart</v-icon> Indonesia</span>
      </v-col>
    </v-row>
  </v-footer>

  <alert/>
    
  </v-app>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  name: 'App',
  components : {
    Alert : () => import('./components/Alert.vue')
  },
  data: () => ({
    apiDomain : 'https://demo-api-vue.sanbercloud.com/',
    creator : 'Kelompok Satu',
    menu : [
      {title : 'Home', icon : 'mdi-home', route : '/'},
      {title : 'Blogs', icon : 'mdi-note', route : '/blogs'}
    ]
  }),
  computed : {
    ...mapGetters({
      guest : 'auth/guest',
      user : 'auth/user',
      token : 'auth/token'
    })
  },
  methods : {
    logout(){
      let config = {
          method : 'post',
          url : this.apiDomain+'api/v2/auth/logout',
          headers : {
              'Authorization':'Bearer '+this.token,
          },
        }
        
        // console.log(this.token)
        this.axios(config)
        .then(() => {
          this.setToken('')
          this.setUser({})
          this.setAlert({
            status : true,
            color : 'blue lighten-1',
            text : 'Berhasil Logout'
          })
        })
        .catch((response) => {
          this.setAlert({
            status : true,
            color : 'deep-orange lighten-1',
            text : response
          })
        })  
    },
    ...mapActions({
      setAlert:'alert/set',
      setToken:'auth/setToken',
      setUser:'auth/setUser',
      checkToken:'auth/checkToken'
    }),
  },
  mounted(){
    if(this.token){
      this.checkToken(this.token)
    }
  }


};
</script>
