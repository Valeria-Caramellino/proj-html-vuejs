<script>

export default {
    name: "AppTopHeader",
    data() {
        return {
            ArrayTitoli: [
                { titolo: "Home" },
                { titolo: "Shop" },
                { titolo: "Blog" },
                { titolo: "Media" },
                { titolo: "ShortCode" },
                { titolo: "Features" },
            ],
            ArrayIcone: [
                { icon: "fa-solid fa-magnifying-glass" },
                { icon: "fa-regular fa-user" },
                { icon: "fa-solid fa-bag-shopping" },
            ]
        }

    }

}

</script>
<template>
    <section class="container text-secondary">
        <div class="row">
            <div class="col-11 d-flex justify-content-between mx-auto">
                <div class="col-4 d-flex ">
                    <p class="mx-2">Wishlist(0)</p>
                    <p class="mx-2">Need Help? &#9660</p>
                </div>
                <div class="col-4 d-flex justify-content-end">
                    <p>Call 24/7 .800-8754-987</p>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <section class="container">
        <div class="row">
            <div class="col-11 d-flex mx-auto justify-content-between">
                <div col-3>
                    <img class="my-2" src="../assets/mob-logo.png" alt="">
                </div>
                <div class="col-6 d-flex justify-content-between align-items-center">
                    <div v-for="oggetto in ArrayTitoli">
                        <p>{{ oggetto.titolo }}</p>
                    </div>
                </div>
                <div class="col-2 d-flex align-items-center justify-content-end">
                    <template v-for="oggetto in ArrayIcone">
                        <i class="mx-2" :class="oggetto.icon"></i>
                    </template>
                    <p class="mx-2 text-warning">(0) €0.00</p>
                </div>

            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

section {

    hr,
    p {
        margin: 0;

        &:hover {
            color: $orange;
            cursor: pointer;
        }
    }

    i,
    img {
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
}
</style>