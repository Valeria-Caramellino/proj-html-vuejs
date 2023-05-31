<script>
export default {
    name: "AppProducts",
    data() {
        return {
            ArrayCategory: [
                {
                    title: "Featured"
                },
                {
                    title: "New Arrival"
                },
                {
                    title: "Best Sellers"
                },
            ]
        }
    }
}
</script>
<template>
    <div class="col-11 mx-auto my-4">

        <h2 class="text-center">Our Products</h2>
        <div class="col-1 mx-auto">
            <hr>
        </div>
    </div>
    <div class="col-11 mx-auto d-flex justify-content-center">
        <template v-for="oggetto in ArrayCategory">
            <div class="col-2 py-1 px-3 text-center border border-light border-opacity-25">
                <p>{{ oggetto.title }}</p>
            </div>
        </template>
    </div>
    <!--carosello1---->
</template>
<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

hr {
    color: $orange;
    width: 100%;
    border: 3px solid;
    opacity: 1;
}

p {
    margin: 0;

    &:hover {
        color: $orange;
    }
}
</style>