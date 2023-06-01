<script>
export default {
    name: "AppCaroselPersonal",
    data() {
        return {
            active: 0,
            ArrayPersonal: [
                {
                    img: "src/assets/t5-1-100x100_left.jpg",
                    name: "Luies Charls",
                    ruolo: "(Web Designer)",
                    storia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam voluptas rem. Deleniti repellendus molestiae nostrum qui fugiat, fugit cumque iure! Quo, perferendis obcaecati!Iure cum cumque accusamus mollitia'"
                },
                {
                    img: "src/assets/t2-1-100x100_left.jpg",
                    name: "Marco Charls",
                    ruolo: "(Web Developer)",
                    storia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam voluptas rem. Deleniti repellendus molestiae nostrum qui fugiat, fugit cumque iure! Quo, perferendis obcaecati!Iure cum cumque accusamus mollitia'"
                },
                {
                    img: "src/assets/t4-1-100x100_left.jpg",
                    name: "Gigi Charls",
                    ruolo: "(Web)",
                    storia: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam voluptas rem. Deleniti repellendus molestiae nostrum qui fugiat, fugit cumque iure! Quo, perferendis obcaecati!Iure cum cumque accusamus mollitia'"
                },
            ]
        }
    },
    methods: {
        changeSlide(indice) {
            this.active = indice;
        }
    }
}
</script>
<template>
    <section class="container-fluid my-4">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-8 mx-auto  text-center d-flex flex-column mt-4">
                    <div class="col-2 mx-auto position-relative mt-4 text-center">
                        <img class=" rounded-circle border border-4 border-warning" :src="ArrayPersonal[active].img" alt="">
                        <div class="position-absolute">
                            <img src="../assets/quote.png" alt="">
                        </div>

                    </div>
                    <div class="my-3">
                        <span class="my-2 mx-2">{{ ArrayPersonal[active].name }}</span>
                        <span class="my-color">{{ ArrayPersonal[active].ruolo }}</span>
                        <p>{{ ArrayPersonal[active].storia }}</p>
                    </div>


                </div>
                <div class="d-flex justify-content-center ">
                    <button class=" p-2 rounded-circle " @click="changeSlide(0)"></button>
                    <button class=" p-2 rounded-circle " @click="changeSlide(1)"></button>
                    <button class=" p-2 rounded-circle " @click="changeSlide(2)"></button>
                </div>
            </div>

        </div>

    </section>
</template>
<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

section.container-fluid {
    background-image: url(../assets/parallax.jpg);
    background-position: center;
    height: 60vh;

    .position-absolute {
        position: absolute !important;
        top: 0;
        left: 10%;
    }

    span.my-color {
        color: $orange;
    }

    button {
        &:hover {
            background-color: $orange;
        }
    }
}
</style>