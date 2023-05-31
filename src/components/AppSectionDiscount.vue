<script>

export default {
    name: "AppSectionDiscount",
    data() {
        return {
            ArrayCards: [
                {
                    description: "20% Discount",
                    title: "Dragon's Dogma",
                    subTitle: "Video Game",
                    img: "src/assets/cms-banner-03.jpg"
                },
                {
                    description: "30% Discount",
                    title: "World Of Tanks",
                    subTitle: "New Game",
                    img: "src/assets/cms-banner-04.jpg"
                },
            ]
        }
    }

}

</script>
<template>
    <div class="col-11 mx-auto d-flex justify-content-between">
        <template v-for="oggetto in ArrayCards">
            <div class="col-5 my-4">
                <div class="position-relative">
                    <img :src="oggetto.img" alt="">
                    <div class="position-absolute top-0 start-50 my-misure text-center ">
                        <div class="bg-warning">
                            <h4 class="text-black py-2">{{ oggetto.description }}</h4>
                        </div>

                        <h5>{{ oggetto.title }}</h5>
                        <p>{{ oggetto.subTitle }}</p>
                    </div>
                </div>

            </div>
        </template>

    </div>
</template>
<style lang="scss" scoped>
img {
    width: 100%;
}

div.my-misure {
    padding-top: 2rem;
    width: 40%;
    height: 60%;
}
</style>