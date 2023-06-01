<script>
import { store } from '../data/store'
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
            store,
        }
    },
    methods: {
        changeNext() {
            if (this.store.zero == 7) {
                this.store.zero = 0
            } else {
                this.store.zero++
            }
            if (this.store.primo == 7) {
                this.store.primo = 0
            } else {
                this.store.primo++
            }
            if (this.store.secondo == 7) {
                this.store.secondo = 0
            } else {
                this.store.secondo++
            }
            if (this.store.terzo == 7) {
                this.store.terzo = 0
            } else {
                this.store.terzo++
            }
        },
        changePrev() {
            if (this.store.zero == 0) {
                this.store.zero = 7
            } else {
                this.store.zero--
            }

            if (this.store.primo == 0) {
                this.store.primo = 7
            } else {
                this.store.primo--
            }

            if (this.store.secondo == 0) {
                this.store.secondo = 7
            } else {
                this.store.secondo--
            }
            if (this.store.terzo == 0) {
                this.store.terzo = 7
            } else {
                this.store.terzo--
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
            <img :src="store.ArrayObjetcOfDay[store.zero].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in store.stelline">
                    <template v-if="store.ArrayObjetcOfDay[store.zero].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #ef5d60;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ store.ArrayObjetcOfDay[store.zero].title }}</p>
                <div class="prezzo">
                    <p>{{ store.ArrayObjetcOfDay[store.zero].prezzo }}</p>

                </div>
                <div class="border-top border-light border-opacity-25 icone">
                    <template v-for="oggetto in store.ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>

        </div>
        <div class="my-width mx-1 my-2">
            <img :src="store.ArrayObjetcOfDay[store.primo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in store.stelline">
                    <template v-if="store.ArrayObjetcOfDay[store.primo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #ef5d60;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ store.ArrayObjetcOfDay[store.primo].title }}</p>
                <div class="prezzo">
                    <p>{{ store.ArrayObjetcOfDay[store.primo].prezzo }}</p>

                </div>
                <div class="border-top border-light border-opacity-25 icone">
                    <template v-for="oggetto in store.ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>

        </div>
        <div class="my-width mx-1 my-2">
            <img :src="store.ArrayObjetcOfDay[store.secondo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in store.stelline">
                    <template v-if="store.ArrayObjetcOfDay[store.secondo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #ef5d60;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ store.ArrayObjetcOfDay[store.secondo].title }}</p>
                <div class="prezzo">
                    <p>{{ store.ArrayObjetcOfDay[store.secondo].prezzo }}</p>

                </div>
                <div class="border-top border-light border-opacity-25 icone">
                    <template v-for="oggetto in store.ArrayIcone">
                        <div class="col-3 text-center">
                            <i class="mx-2" :class="oggetto.icon"></i>
                        </div>
                    </template>
                </div>

            </div>

        </div>
        <div class="my-width mx-1 my-2">
            <img :src="store.ArrayObjetcOfDay[store.terzo].img" alt="">
            <div class="my-bg-fascia">
                <span v-for="voto in store.stelline">
                    <template v-if="store.ArrayObjetcOfDay[store.terzo].voto >= voto">
                        <i class="fa-solid fa-star" style="color: #ef5d60;"></i>
                    </template>
                    <template v-else>
                        <i class="fa-solid fa-star"></i>
                    </template>
                </span>
                <p>{{ store.ArrayObjetcOfDay[store.terzo].title }}</p>
                <div class="prezzo">
                    <p>{{ store.ArrayObjetcOfDay[store.terzo].prezzo }}</p>

                </div>
                <div class="border-top border-light border-opacity-25 icone">
                    <template v-for="oggetto in store.ArrayIcone">
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
    color: $primary;
    width: 100%;
    border: 3px solid;
    opacity: 1;
}

p.titolo {
    margin: 0;

    &:hover {
        color: $primary;
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

        div.prezzo {
            color: $primary;
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