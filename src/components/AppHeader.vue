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
        <AppTopHeader />
        <AppBottonHeader />
    </header>
</template>

<style lang="scss" scoped></style>