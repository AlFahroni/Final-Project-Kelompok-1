<template>
    <v-container>
      <h2 class="text-h4 text-left">All Blog</h2>       
      <v-container class="mt-5">       
        <v-row class="mb-5">
            <v-col
            lg="3"
            sm="12"
            md="2"
            v-for="blog in dataBlog" :key="`blog-`+blog.id">
              <v-card width="265px">
                <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'"
                  class="white--text"
                  height="180px"
                  width="265px">
                  <v-card-title class="fill-height align-end"
                  v-text="blog.title">
                  </v-card-title>
                </v-img>

              </v-card>
            </v-col>
          </v-row>
          
        <v-pagination v-model="page" @input="go" :length="lengthPage" :total-visible="perPage">
          
        </v-pagination>
      </v-container>
    </v-container>
</template>

<script>
export default {
  data:()=> ({
    page:0,
    lengthPage:0,
    perPage:0,
    apiDomain: 'https://demo-api-vue.sanbercloud.com',
    blogs:[],
    dataBlog:[]
  }),
  methods:{
    go(){
      const config = {
        method:'get',
        url : this.apiDomain + '/api/v2/blog?page=' +this.page,
        params : {'page':this.page}
      };
      this.axios(config)
      .then((response)=>{
        let {blogs} = response.data
        this.blogs=blogs
        this.perPage=blogs.per_page
        this.page=blogs.current_page
        this.lengthPage=blogs.last_page
        this.dataBlog=blogs.data
        console.log(this.dataBlog)
      })
    }
  },
  created(){
    this.go()
  }
}
</script>
