<template>
    <div class="nice-sun">
        <h1 >{{title}}</h1>
        <button @click="addTag">Add</button>
        <button @click="truncateTags">Clear All</button>
        <Tag
            v-on:test-hook="changeTitle($event)"
            v-for="tag in tags"
            :key="tag.id"
            :data="tag"
         />
    </div>
        
</template>
<script>
    import Vue from 'vue' ;
    import VueWindowsize from 'vue-window-size';
    //Components
    import Tag from "./Tag";
 
    Vue.use(VueWindowsize);
    export default {
        name: '',
        //extends: '', ''
        components: {
           Tag 
        }, //
        props: {
            // width : Number,
            // height : String,
        },

        data: function () {
            return {
                //Buttons Pad
                addOne: false,
                clearAll: false,
                //Tags
                tags : [],
                //rest 
                title : "To change"
            }
        },
        computed:{
            
        },
       
        methods:{
            //buttons Pad
            addTag () {
                let newTag = {
                    id: `${this.tags.length}-${Math.floor(Math.random()*1000)}`,
                    name: "new tag",
                    anchor: {top : 50, left : 50},
                    size : {width: 100, height: 100}
                }
                this.tags.push(newTag)
                return true
            },
            truncateTags () {
                this.tags = [];
            },
            //
            changeTitle (e) {
                console.log("event caught : ", e) ;
               return this.title = e.innerHTML + " Changed !";
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

    // .v-sheet[elevation='8'] {
    //     width : 600px; 
    // }

    // .panel__layout--central-square {
    //     margin: auto;
    //     min-height: 50vh;
    //     min-width: 50vw;
    //     box-sizing: border-box;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
        
    // }
    .nice-sun {
        background-color: yellow;
        width: 1000px;
        height: 500px;
    }
    // .nice-sky {
    //     background-color: aqua;
    // }
    // //=================
    // .sheet--sizing {
    //     margin: 2rem;
    //     //position : absolute
    // }
    // .sheety {
    //     width: 250px;
    //     height: 150px;
    //     background-color: red;
    // }


</style>