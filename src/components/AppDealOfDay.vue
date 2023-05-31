<script>
export default {
    name: "AppDealOfDay",
    data() {
        return {
            ArrayCategory: [
                {
                    title: "1026 day"
                },
                {
                    title: "13 hours"
                },
                {
                    title: "24 mins"
                },
                {
                    title: "17 sec"
                }
            ]
        }
    }
}
</script>
<template>
    <div class="col-11 mx-auto my-4">

        <h2 class="text-center">Deal of the Day </h2>
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
    <!--carosello2-->
</template>
<style lang="scss" scoped>
hr {
    color: #f9aa01;
    width: 100%;
    border: 3px solid;
    opacity: 1;
}

p {
    margin: 0;

    &:hover {
        color: #f9aa01;
    }
}
</style>