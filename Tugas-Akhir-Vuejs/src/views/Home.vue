<template>
  <div>
    <v-carousel
      cycle
      height="400"
      reverse-transition="fade-transition"
      transition="fade-transition"
      show-arrows-on-hover
      color="white"
    >
      <v-carousel-item v-for="blog in blogs" :key="blog.id">
        <v-sheet
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3 img-fluid mt-1">
              <v-card>
                <v-img aspect-ratio="1.7" width="650px" height="350px" :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/600x400/b5b5b5/7a797a'">
                <v-card-title class="fill-height align-end"
                v-text="blog.title">
                </v-card-title>
                </v-img>
              </v-card>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="container pa-5">
      
      
      <v-container class="pa-4 mt-2">
        
        <v-row>
          <blog-item v-for="blog in blogs" :key="blog.id" :blog="blog"></blog-item>
        </v-row>

      </v-container>
      
      <div class="text-right mt-2">
        <v-btn text class="primary--text" to="/blogs">All Blogs
          <v-icon>mdi-chevron-double-right</v-icon>
        </v-btn>
      </div>

      <!-- <button @click="increment(5)">Tambah</button>
      {{tambah}} -->
    </div>
  </div>
</template>

<script>
import BlogItemComponent from '../components/BlogItemComponent.vue'
import {mapGetters, mapMutations} from 'vuex'

export default {
  data:()=> ({
    apiDomain: 'https://demo-api-vue.sanbercloud.com',
    blogs:[],
  }),
  components : {
    'blog-item' : BlogItemComponent
  },
  computed : {
    // count(){
    //   return this.$store.getters.count
    // }

    ...mapGetters({
        'tambah' : 'counter/count'
    })
  },
  methods : {
    go () {
      const config = {
        method : 'get',
        url : this.apiDomain + '/api/v2/blog/random/5'
      }
      
      this.axios(config)
      .then((response)=>{
        let {blogs} = response.data 
        this.blogs= blogs
        console.log(blogs)
      })
    },

    ...mapMutations({
      'increment' : 'counter/increment'
    })
    // increment (payload){
    //   this.$store.commit('increment', payload)
    // }
  },
   created(){
    this.go()
    console.log(this.$store.state.count)
    
  }
}
</script>
