<template>
    <div  height=200px >
       <p>{{state_r}} {{triggerSate}}</p>
      <button @click="setState_r" value="You clicked"> Clicker</button>
      <!-- <TagStoreDisplay></TagStoreDisplay>
      <FrameDisplay></FrameDisplay> -->
    </div>
</template>
<script>
    import setObjInContext from '../../../utils/ReactiveTools.js';
    export default {
        name: 'EditToolsMenu',
        //extends: '',
        // components: {
            
        // },
        data : function () {
            return {
              triggerSate : 0 ,
              state_r : { 
                po : "Pite",
                chi : "ert"
              }
            }
        },
        computed : {
          reactState_r : {
            get : function() { return state_r},
            set : function (properties) {
              setObjInContext(properties, this, "state_r") ;
          }
        }
        },
        // },
        methods : {
            setState_r (e) {
              alert("clikeckded");
              let tick = ["bee", "round"] ;
              //this.triggerSate += 1 ;
              let tack = { bob : "elo",
                           deux : "fini"}; 
              this.reactState_r = tack ;
              console.log("+ setState_r done : ", this.state_r)
              
              // this.rState[tick[0]] = tick[1];
              // console.log("PB-check =>  : setState_r -> e", e.target)
              // let state = {action : e.target} ;
              // this.setState = state;
            }
        }
      };
</script>

<style lang="scss" scoped>
    /***************************************************************
     * Place your scss here and keep this comment.
     * It will ensure webpack to generate a css file even if empty
     ***************************************************************/
     p {
       display: block;
       clear : right ;
     }
</style>