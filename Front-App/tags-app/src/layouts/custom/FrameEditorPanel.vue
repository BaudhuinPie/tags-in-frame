<template>
    <div class="panel__layout--central-square nice-sky">
        HHHH
      </div>
</template>
<script>
    import Vue from 'vue' ;
    import VueWindowSize from 'vue-window-size';
 
    Vue.use(VueWindowSize);
    export default {
        name: '',
        //extends: '',
        // components: {
            
        // }, //
        data: function () {
            return {
               
            }
        },
        computed:{
           
            },
        methods:{
    //        methods: {
    //     elevation() {
    //         this.window.width = window.innerWidth;
    //         console.log("PB-check =>  : elevation -> window.innerWidth", window.innerWidth)
    //     }
    // }
    //der : console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd")
        }
    };
</script>

<style lang="scss" scoped>
    /***************************************************************
     * Place your scss here and keep this comment.
     * It will ensure webpack to generate a css file even if empty
     ***************************************************************/
    .panel__layout--central-square {
        margin: auto;
        min-height: 50vh;
        min-width: 50vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .nice-sky {
        background-color: aqua;
    }
    //=================
    .sheet--sizing {
        margin: 2rem;
        //position : absolute
    }

</style>