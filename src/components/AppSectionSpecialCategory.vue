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
    <div class="col-11 mx-auto position-relative">
        <h2 class="text-center mt-5">Special Category</h2>
        <div class="col-1 mx-auto">
            <hr>
        </div>
        <div class=" my-width position-absolute d-flex justify-content-center align-items-center">
            <a href="#su"><i class="fa-solid fa-angles-up"></i></a>
        </div>
    </div>
    <div class="col-11 mx-auto d-flex justify-content-between">
        <template v-for="oggetto in ArrayCardSpecial">
            <div class="col-3 position-relative my-4">
                <img :src="oggetto.img" alt="">
                <div class="position-absolute bottom-0 start-0 bg-black bg-opacity-50 w-100">
                    <h4 class="mx-1">{{ oggetto.title }}</h4>
                    <p class="shop mx-1">Shop Now</p>
                    <hr>
                </div>

                <button class="position-absolute top-50 start-50 translate-middle p-2 rounded">{{ oggetto.title }}</button>
            </div>
        </template>

    </div>
</template>

<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

div.col-11 {
    div.my-width {
        width: 30px;
        height: 30px;
        bottom: 2rem;
        right: 2rem;
        background-color: $orange;
    }

    a {
        color: black;
        text-decoration: none;
    }
}

div.col-1 {
    hr {
        color: $orange;
        width: 100%;
        border: 3px solid;
        opacity: 1;
    }
}


div.col-3 {


    img {
        width: 100%;

    }

    &:hover {
        button {
            display: block;
        }

        div.bg-black {
            --bs-bg-opacity: 0.8;
        }
    }

    button {
        display: none;

    }

    div.position-absolute {
        hr {
            width: 30%;
            margin: 0.5rem;
            color: $orange;
            border: 1px solid;
            opacity: 1;
        }
    }


    p.shop {
        color: $orange;
        margin-bottom: 0;

    }
}
</style>