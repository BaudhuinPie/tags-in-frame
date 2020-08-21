<template>
    <div>
        {{this.listOfCards()}}
        <!-- <FlyCard corner-style rel-level></FlyCard> -->
    </div>
</template>
<script>
    
    export default {
     
        name : "EasyPad",
        props : {
            card_list : Array // d'objets avec content
        },
        components : {
            // FlyCard
        },
        data : {
            card_listing : this.card_list,
            //list_lenght : ,
            //
        },
        computed : {
            // getter : number of cards = length

            // getter : display the content
        },
        method : {
            // listing : function ()
        }

    }

</script>