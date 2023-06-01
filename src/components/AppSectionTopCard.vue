<script>

export default {
    name: "AppSectionTopCard",
    data() {
        return {
            ArrayCards: [
                {
                    description: "Most Popular",
                    title: "The BattleField 4",
                    subTitle: "Naval Strike",
                    img: "src/assets/cms-banner-01.jpg"
                },
                {
                    description: "Lastest Game",
                    title: "Assassin's Creed",
                    subTitle: "Unity Game",
                    img: "src/assets/cms-banner-02.jpg"
                },
            ]
        }
    }
}

</script>

<template>
    <div class="col-11 mx-auto d-flex justify-content-between">
        <template v-for="oggetto in ArrayCards">
            <div class="col-5 ">
                <div class="position-relative">
                    <img :src="oggetto.img" alt="">
                    <div class="position-absolute top-0 start-50 my-misure text-center ">
                        <div class="skewed">
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
@use'../styles/-Variabili.scss' as*;

img {
    width: 100%;
}



div.my-misure {
    padding-top: 2rem;
    width: 40%;
    height: 60%;

    div.skewed {
        transform: skew(-20deg);
        background-color: $orange;

        h4 {
            font-weight: 600;
        }
    }
}
</style>
