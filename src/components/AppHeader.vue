<script>
import AppTopHeader from './AppTopHeader.vue';
import AppBottonHeader from './AppBottonHeader.vue';
export default {
    name: "AppHeader",
    components: {
        AppTopHeader,
        AppBottonHeader,
    }
}

</script>

<template>
    <header>
        <!--sezione tesata parte alta-->
        <AppTopHeader />

        <!--sezione testata con img 100vh-->
        <AppBottonHeader />

    </header>
</template>

<style lang="scss" scoped></style>