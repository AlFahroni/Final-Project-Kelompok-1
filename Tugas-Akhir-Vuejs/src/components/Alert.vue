<template>
    <v-snackbar
      v-model="alert"
      :timeout="2000"
      bottom
      color="color"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red darken-3"
          text
          v-bind="attrs"
          @click="close"
        >
          <v-icon>mdi-close-box</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name:"alert",
    computed : {
        ...mapGetters({
            status:"alert/status",
            color:"alert/color",
            text:"alert/text",
        }),
        alert : {
            get() {
                return this.status
            },
            set(value){
                this.setAlert({
                    status:value
                });
            }
        }
    },
    methods : {
        ...mapActions({
            setAlert:"alert/set"
        }),
        close(){
            this.setAlert({status:false})
        }
    }

}
</script>