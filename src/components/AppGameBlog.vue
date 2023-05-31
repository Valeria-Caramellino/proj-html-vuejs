<script>
export default {
    name: "AppGameBlog",
    data() {
        return {
            ArrayCard: [
                {
                    date: "Jan 18,2021",
                    description: "anyway REPS is a NYC agency repres enting photographers",
                    img: "src/assets/Nisi-ut-aliquid-ex-ea-com-1400x878_t.jpg",
                },
                {
                    date: "May 30,2021",
                    description: "Nasual risus suscipit Lorem Ipsum is simply text",
                    img: "src/assets/Architecto-beatae-vitae-dicta-1400x878_t.jpg",
                },
                {
                    date: "Apr 13,2021",
                    description: "Nostrum lesum Christum Lorem Ipsum is simply text",
                    img: "src/assets/At-vero-eos-et-accusamus-1400x878_t.jpg",
                },
            ]
        }
    }
}

</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-11 mx-auto my-4">

                <h2 class="text-center">New Game Blog</h2>
                <div class="col-1 mx-auto">
                    <hr>
                </div>
            </div>
            <div class="col-11 d-flex justify-content-between mx-auto my-2">
                <template v-for="oggetto in ArrayCard">
                    <div class="col-3 ">
                        <div class=" position-relative">
                            <img :src="oggetto.img" alt="">
                            <div class="position-absolute top-50 start-50 translate-middle my-class">
                                <i class="fa-sharp fa-solid fa-plus"></i>
                                <i class="fa-brands fa-playstation"></i>
                            </div>
                        </div>

                        <div>
                            <span class="text-secondary">
                                <i class="fa-regular fa-calendar-days mx-2"></i>
                                {{ oggetto.date }}</span>
                            <span class="text-secondary">
                                <i class="fa-solid fa-comments mx-2"></i>
                                0 Comment
                            </span>
                            <p>{{ oggetto.description }}</p>
                        </div>

                    </div>
                </template>


            </div>
            <hr class="text-secondary">
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

div.col-3 {
    &:hover {
        div.my-class {
            display: block;

            i {
                color: white;
            }
        }
    }

    div.my-class {
        display: none;
    }

    img {
        width: 100%;
    }

    i {
        color: $orange;
    }
}

hr {
    color: $orange;
    width: 100%;
    border: 3px solid;
    opacity: 1;
}
</style>