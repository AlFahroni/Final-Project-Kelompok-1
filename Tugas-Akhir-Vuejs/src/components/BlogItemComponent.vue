<template>
    <v-col lg="3" sm="12" md="2">
          <!-- <v-card :to="`/blog/`+blog.id" width="260px" class="mb-1">
            <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/600x400/b5b5b5/7a797a'"
              class="white--text"
              height="180px"
              width="260px">
              <v-card-title class="fill-height align-end"
              v-text="blog.title">
              </v-card-title>
            </v-img>

            <v-card-actions>
              <span>{{blog.title.substring(0,14)}}...</span>
            </v-card-actions>
          </v-card> -->
          <v-card width="260px" class="mb-1" :to="'/blog/'+blog.id">
            <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://dummyimage.com/600x400/b5b5b5/7a797a'"
              class="white--text"
              height="180px"
              width="260px">
              <v-card-title class="fill-height align-end"
              v-text="blog.title">
              </v-card-title>
            </v-img>

            <v-card-actions>
              <span>{{blog.title.substring(0,14)}}...</span>
            </v-card-actions>
          </v-card>
    </v-col>
</template>
<script>
export default {
    data : () => ({        
        apiDomain: 'https://demo-api-vue.sanbercloud.com',
    }),
    props : ['blog']
}
</script>
