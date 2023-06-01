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
            ],
            ArrayObjetc: [
                {
                    img: "src/assets/09-327x327.jpg",
                    voto: "4",
                    title: "Mouse Game",
                    prezzo: "€ 50.00",
                },
                {
                    img: "src/assets/10-327x327.jpg",
                    voto: "3",
                    title: "Joystic Orange",
                    prezzo: "€ 40.00",
                },
                {
                    img: "src/assets/11-327x327.jpg",
                    voto: "2",
                    title: "Joystic black",
                    prezzo: "€ 45.00",
                },
                {
                    img: "src/assets/12-327x327.jpg",
                    voto: "3",
                    title: "Cuffie",
                    prezzo: "€ 10.00",
                },
                {
                    img: "src/assets/13-327x327.jpg",
                    voto: "5",
                    title: "Joystic Color",
                    prezzo: "€ 22.00",
                },
                {
                    img: "src/assets/14-327x327.jpg",
                    voto: "1",
                    title: "Cuffie Green B",
                    prezzo: "€ 50.00",
                },
                {
                    img: "src/assets/15-327x327.jpg",
                    voto: "2",
                    title: "Cd",
                    prezzo: "€ 46.00",
                },
                {
                    img: "src/assets/16-327x327.jpg",
                    voto: "3",
                    title: "Mouse Color",
                    prezzo: "€ 10.00",
                },

            ],
            ArrayIcone: [
                { icon: "fa-solid fa-bag-shopping" },
                { icon: "fa-solid fa-heart" },
                { icon: "fa-solid fa-up-down-left-right" },
                { icon: "fa-solid fa-eye" },
            ],
            stelline: 5,
            zero: 0,
            primo: 1,
            secondo: 2,
            terzo: 3,
        }
    },
    methods: {
        changeNext() {
            if (this.zero == 7) {
                this.zero = 0
            } else {
                this.zero++
            }
            if (this.primo == 7) {
                this.primo = 0
            } else {
                this.primo++
            }
            if (this.secondo == 7) {
                this.secondo = 0
            } else {
                this.secondo++
            }
            if (this.terzo == 7) {
                this.terzo = 0
            } else {
                this.terzo++
            }
        },
        changePrev() {
            if (this.zero == 0) {
                this.zero = 7
            } else {
                this.zero--
            }

            if (this.primo == 0) {
                this.primo = 7
            } else {
                this.primo--
            }

            if (this.secondo == 0) {
                this.secondo = 7
            } else {
                this.secondo--
            }
            if (this.terzo == 0) {
                this.terzo = 7
            } else {
                this.terzo--
            }
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
                <p class="titolo">{{ oggetto.title }}</p>
            </div>
        </template>
    </div>
    <div class="col-11 mx-auto my-4 d-flex justify-content-between align-items-center position-relative">


        <div class="my-width mx-1 my-2">
            <img :src="ArrayObjetc[zero].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in stelline">
                    <template v-if="ArrayObjetc[zero].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #f9aa01;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ ArrayObjetc[zero].title }}</p>
                <div class="prezzo">
                    <p>{{ ArrayObjetc[zero].prezzo }}</p>

                </div>
                <div class="border border-light icone">
                    <template v-for="oggetto in ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>

        </div>

        <div class="my-width mx-1 my-2">
            <img :src="ArrayObjetc[primo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in stelline">
                    <template v-if="ArrayObjetc[primo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #f9aa01;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ ArrayObjetc[primo].title }}</p>
                <div class="prezzo">
                    <p>{{ ArrayObjetc[primo].prezzo }}</p>

                </div>
                <div class="border border-light icone">
                    <template v-for="oggetto in ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>
        </div>

        <div class="my-width mx-1 my-2">
            <img :src="ArrayObjetc[secondo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in stelline">
                    <template v-if="ArrayObjetc[secondo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #f9aa01;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ ArrayObjetc[secondo].title }}</p>
                <div class="prezzo">
                    <p>{{ ArrayObjetc[secondo].prezzo }}</p>
                </div>
                <div class="border border-light icone">
                    <template v-for="oggetto in ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>
        </div>

        <div class="my-width mx-1 my-2">
            <img :src="ArrayObjetc[terzo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in stelline">
                    <template v-if="ArrayObjetc[terzo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #f9aa01;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ ArrayObjetc[terzo].title }}</p>
                <div class="prezzo">
                    <p>{{ ArrayObjetc[terzo].prezzo }}</p>
                </div>
                <div class="border border-light icone">
                    <template v-for="oggetto in ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>
        </div>

        <button
            class="position-absolute top-50 start-0 translate-middle-y py-2 px-3 rounded-circle bg-transparent text-light border-light"
            @click="changeNext()">
            &#60 </button>
        <button
            class="position-absolute top-50 end-0 translate-middle-y py-2 px-3 rounded-circle bg-transparent text-light border-light"
            @click="changePrev()">
            &#62</button>


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

p.titolo {
    margin: 0;

    &:hover {
        color: $orange;
    }
}

div.my-width {
    width: calc(100% / 4);

    img {
        width: 100%;
    }

    div.my-bg-fascia {
        background-color: $blue;

        &:hover {
            div.prezzo {
                display: none;
            }

            div.icone {
                display: flex !important;
                height: 32px;
            }
        }

        div.icone {
            display: none !important;
        }

        p,
        span {
            margin: 0;
            padding: 0.25rem 0.50rem;
        }
    }
}
</style>