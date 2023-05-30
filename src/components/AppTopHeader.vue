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
                    <i class="fa-solid fa-magnifying-glass mx-2"></i>
                    <i class="fa-regular fa-user mx-2"></i>
                    <i class="fa-solid fa-bag-shopping mx-2"></i>(0)
                    <p class="mx-2 text-warning">€ 0.00</p>
                </div>

            </div>
        </div>

    </section>
</template>


<style lang="scss" scoped>
section {

    hr,
    p {
        margin: 0;

        &:hover {
            color: #F9aa01;
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