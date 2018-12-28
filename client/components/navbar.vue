<template>
  
  <div class="container-fluid">
        <div class="row row_padding-top">
            <div class="col-5">
                <nav class="navbar"> 
                    <ul class="navbar__list">
                        <li class="navbar__list-item"><LinkName history > History </LinkName></li>
                        <li class="navbar__list-item"><LinkName rightMargin > Timeline </LinkName></li>
                        <li class="navbar__list-item"><LinkName rightMargin > Events </LinkName></li>
                        <li class="navbar__list-item"><LinkName > About us </LinkName></li>
                    </ul>
                </nav>
            </div>
        </div>
  </div>
</template>

<script>
import link from './Link.vue'; 
import Title from './Title.vue';

export default {
    name: 'navbar',

    components: {
    LinkName: link,
    Title
    }
    
}
</script>

<style lang="scss">
@import "reset";
@import "main";
@import "../node_modules/bootstrap/scss/bootstrap-grid";

.navbar__list-item {
    display: inline-block;
}
.navbar__list-item:first-of-type {
    padding-left: 64px;
    padding-right: 130px;
}

.row_padding-top{
    padding-top: 46px; 
}

</style>
