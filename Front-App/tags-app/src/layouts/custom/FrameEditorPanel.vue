<template>
    <div class="panel__layout--central-square nice-sky" width="80%" height="80%">
        <p> der {{isOutlined}} : width {{windowWidth}} : {{elevation}} ,   ; dd  </p> <br/><br/>
        <v-sheet v-bind=" isOutlined ? sozi : sizing">
            Hello ! {{sizing.elevation}} :: {{sizing.elevation}}
        </v-sheet>
        <v-sheet   :class=depht> {{depht}} DODO</v-sheet>
        
      </div>
</template>
<script>
    import Vue from 'vue' ;
    import VueWindowsize from 'vue-window-size';
 
    Vue.use(VueWindowsize);
    export default {
        name: '',
        //extends: '', ''
        // components: {
            
        // }, //
        props: {
            spanStep: String,
        },

        data: function () {
            return {
                sheetWidth: "40%",
                sheetHeight: "300px",
                indx: "9",
                depht : `elevation-${this.data.indx}`,
                //level: 12,
                sizing : {
                    rounded : "lg",
                    width: "40%",
                    height: "200px",
                    elevation: 8, // or outlined : true
                },
                sozi : {
                    width: "80%",
                    height: "300px",
                    outlined: true,
                    
                }
               
            }
        },
        computed:{
            elevation () {
                let leveler = Math.ceil(this.windowWidth/100);
                console.log("PB-check =>  : elevation -> leveler", leveler)
                let elev = this.sizing.elevation;
                //console.log("PB-check =>  : elevation -> evel", evel)

                let level = leveler <21 ? leveler : 20;
                console.log("PB-check =>  : elevation -> level", level);

                if(level > elev + 4 || level < elev - 3){
                    console.log("level change______________________________: ", level);
                    console.log("level = ", level);
                    console.log(" modulo 4  = ", level % 4);
                    console.log("level - modulo = ",level - (level % 4));
                     this.sizing.elevation = level - (level % 4);
                     }
                // let keep = this.spanStep || 4;
                // console.log("PB-check =>  : elevation -> keep", keep);
                // if ( Number.isInteger(elev/keep) ) this.$set(this.sizing, "elevation", elev);
                return level
 
            },
            isOutlined () {
                let elev = this.elevation;
                let know=false;
                if (elev < 4)  know = true;
                console.log("PB-check =>  : isOutlined -> know", know)
                return know ;
           },
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