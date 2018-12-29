<template>
    <div class="container-fluid">
        <div class="row row_padding-top">
            <div class="col">
                <nav class="navbar"> 
                    <ul class="navbar__list">
                        <li class="navbar__list-item"><Link history> History </Link></li>
                        <li class="navbar__list-item"><Link rightMargin> Timeline </Link></li>
                        <li class="navbar__list-item"><Link rightMargin> Events </Link></li>
                        <li class="navbar__list-item"><Link> About us </Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style lang="scss">
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
