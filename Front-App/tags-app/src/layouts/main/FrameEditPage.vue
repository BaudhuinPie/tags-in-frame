<template>
    <div>
        <p>Helloooooooooo</p>
        <!-- <Header></Header>
        <TextPanel></TextPanel>
        <TagsMenu></TagsMenu> -->
        <!-- <EditToolsMenu></EditToolsMenu> -->
        <FrameEditLayout></FrameEditLayout>
        <!-- <EditToolsMenu></EditToolsMenu> -->
        <!-- <FramesMenu></FramesMenu>
        <ToolsLegend></ToolsLegend> -->
    </div>
</template>

<script>
// import from '../custom/Header';
// import from '../custom/TextPanel';
// import from '../custom/TagsMenu';
// import from '../custom/EditToolsMenu';
import FrameEditLayout from '../custom/FrameEditLayout';
// import from '../custom/FramesMenu';
// import from '../custom/ToolsLegend';
import EditToolsMenu from '../custom/EditToolsMenu';

    export default {
        name: 'FrameEditPanel',
        //extends: '',
         components: {
            //Header, TextPanel,
            //TagsMenu, EditToolsMenu,
            FrameEditLayout,
            //FramesMenu,
            //ToolsLegend,
            EditToolsMenu
         },
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