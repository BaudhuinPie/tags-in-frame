<template>
    <div>
        <p>Helloooooooooo</p>
        <!-- <Header></Header>
        <TextPanel></TextPanel>
        <TagsMenu></TagsMenu> -->
        <!-- <EditToolsMenu></EditToolsMenu> -->
        <!-- <FrameEditorPanel></FrameEditorPanel> -->
        <EditToolsMenu></EditToolsMenu>
        <!-- <FramesMenu></FramesMenu>
        <ToolsLegend></ToolsLegend> -->
    </div>
</template>

<script>
// import from '../custom/Header';
// import from '../custom/TextPanel';
// import from '../custom/TagsMenu';
// import from '../custom/EditToolsMenu';
import FrameEditorPanel from '../custom/FrameEditorPanel';
// import from '../custom/FramesMenu';
// import from '../custom/ToolsLegend';
import EditToolsMenu from '../custom/EditToolsMenu';

    export default {
        name: 'FrameEditPanel',
        //extends: '',
         components: {
            //Header, TextPanel,
            //TagsMenu, EditToolsMenu,
            FrameEditorPanel,
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