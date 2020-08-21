<template>
    <div width=800 height=400 class="red-border">
        <button @click="catchUp">Test me</button>
        <div :style="{height: size.height + 'px', width: size.width + 'px' }" class="nice-sky">
            <h3>
                {{name}}
            </h3>
            <p>{{id}} </p>
        </div>
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
        props: ["data"],

        data: function () {
            return {
                id:  this.data.id ||`${this.tags.index}-${Math.floor(Math.random()*1000)}`,
                name: this.data.name || "placeholder tag",
                anchor: this.data.anchor|| {top : 50, left : 50},
                size : this.data.size || {width: 100, height: 100}
            }
        },
        computed:{
            
        },
       
        methods:{
            catchUp : function (e) {
                console.log("PB-check =>  : event", e.target.innerHTML);
                this.$emit("test-hook", e.target); //, e.target.innerHTML
                
            }
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

    button {
        background-color: rgb(228, 201, 201);
        margin: 5px;
        padding: 0.5em;
        border-radius: 0.5em;
        &:hover {
            font-weight: bold;
            background-color: sandybrown;
            border: solid 1px rgb(110, 109, 109);
        }
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

    .red-border {
        border : solid 5px red;
    }

    .nice-sun {
        background-color: yellow;
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