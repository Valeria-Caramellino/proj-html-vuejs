<script>

export default {
    name: "AppSectionSpecialCategory",
    data() {
        return {
            ArrayCardSpecial: [
                {
                    title: "Batman",
                    img: "src/assets/category-image-01-446x550_t.jpg",
                },
                {
                    title: "Bayonetta",
                    img: "src/assets/category-image-02-446x550_t.jpg",
                },
                {
                    title: "Dark Souls",
                    img: "src/assets/category-image-03-446x550_t.jpg",
                },
            ]
        }
    }

}

</script>

<template>
    <div class="col-11 mx-auto">
        <h2 class="text-center mt-5">Special Category</h2>
        <div class="col-1 mx-auto">
            <hr>
        </div>
    </div>
    <div class="col-11 mx-auto d-flex justify-content-between">
        <template v-for="oggetto in ArrayCardSpecial">
            <div class="col-3 position-relative my-4">
                <img :src="oggetto.img" alt="">
                <div class="position-absolute bottom-0 start-0 mx-2">
                    <h4>{{ oggetto.title }}</h4>
                    <p class="shop">Shop Now</p>
                </div>

                <button class="position-absolute top-50 start-50 translate-middle p-2 rounded">{{ oggetto.title }}</button>
            </div>
        </template>

    </div>
</template>

<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

hr {
    color: $orange;
    width: 100%;
    border: 3px solid;
    opacity: 1;
}

div.col-3 {


    img {
        width: 100%;

    }

    &:hover {
        button {
            display: block;
        }
    }

    button {
        display: none;

    }

    p.shop {
        color: $orange;
        border-bottom: 2px solid $orange;
    }
}
</style>