<template>
    <div class="smart-elevation" :style=css_level>
        <div class="content-size inline">

        </div>
    </div>
    
</template>
<script>
export default {
    props:{
        level: Number
    },
    data : {
        css_level : `--level : ${this.level}`
    }
    
}
</script>
<style lang="scss" scoped>
    //j'importe des données racines !
    $root-size : 2rem ;

    .smart-elevation {
        box-shadow: 0px calc(2px*var(--level)*var(--level)) 5px 10px ;
    }
    .content-size {
           font-size: calc($root-size * 2);
       }
    .inline {
        display: inline;
    }

    @media screen and (min-width : 6OOpx) {
       .content-size {
           font-size: $root-size;
       }
    }

</style>