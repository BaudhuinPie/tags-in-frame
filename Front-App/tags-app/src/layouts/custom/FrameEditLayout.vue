<template>
    <div class="panel__layout--central-square nice-sky" width=1000px height=1000px>
        
       <TagsEditPad width=1000px height=1000px />
    </div>
</template>
<script>
    // Vue system
    import Vue from 'vue' ;
    import VueWindowsize from 'vue-window-size';
    //Components
    import TagsEditPad from '../../components/TagsEditPad';
 
    Vue.use(VueWindowsize);
    export default {
        name: '',
        //extends: '', ''
         components: {
           TagsEditPad, 
         }, //
        props: {
            spanStep: String,
        },

        data: function () {
            return {
                // width : 1000,
                // height : "500px"

                // sheetWidth: "40%",
                // sheetHeight: "300px",
                // indx: "9",
                // depht : `elevation-${this.data.indx}`,
                // //level: 12,
                // sizing : {
                //     rounded : "lg",
                //     width: "40%",
                //     height: "200px",
                //     elevation: 8, // or outlined : true
                // },
                // sozi : {
                //     width: "80%",
                //     height: "300px",
                //     outlined: true,
                    
                // }
               
            }
        },
        computed:{
           
        },
       
        methods:{

        },
    };
</script>

<style lang="scss" scoped>
    /***************************************************************
     * Place your scss here and keep this comment.
     * It will ensure webpack to generate a css file even if empty
     ***************************************************************/
     html {
             --level: 8;
     }

    .v-sheet[elevation='8'] {
        width : 600px; 
    }

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
    .sheety {
        width: 250px;
        height: 150px;
        background-color: red;
    }


</style>