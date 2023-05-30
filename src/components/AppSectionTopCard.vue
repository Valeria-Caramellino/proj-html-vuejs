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
    <div class="col-11 d-flex justify-content-between">
        <template v-for="oggetto in ArrayCards">
            <div class="col-5 ">
                <div class="position-relative">
                    <img :src="oggetto.img" alt="">
                    <div class="position-absolute top-0 start-50 my-misure">
                        <p>{{ oggetto.description }}</p>
                        <p>{{ oggetto.title }}</p>
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
    width: 60%;
    height: 60%;
}
</style>
