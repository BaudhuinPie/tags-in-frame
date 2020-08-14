<template>
    <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
      
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          
          width="100"
        />
      </div>
</template>
<script>
    //import
    export default {
        name: '',
        //extends: '',
        // components: {
            
        // },
        // methods:{
        //     getValue:function(){
        //         return ;
        //     }
        // }
    };
</script>

<style lang="scss" scoped>
    /***************************************************************
     * Place your scss here and keep this comment.
     * It will ensure webpack to generate a css file even if empty
     ***************************************************************/
</style>