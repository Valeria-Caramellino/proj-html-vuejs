<script>
export default {
    name: "AppTopFooter",
    data() {
        return {
            ArrayInfo: [
                {
                    title: "Information",
                    opzioni: [
                        "Bookmark",
                        "Features",
                        "Sitemap",
                        "Lists",
                        "Contact Us"
                    ]
                },
                {
                    title: "Extras",
                    opzioni: [
                        "Delivery",
                        "Cart",
                        "Terms conditions",
                        "My account",
                        "About us"
                    ]
                },

            ]
        }
    }
}
</script>
<template>
    <section class="container">
        <div class="row">
            <div class="col-11 mx-auto d-flex justify-content-around">
                <div class="col-3 my-4">
                    <h4>Address Info</h4>
                    <p class="text-secondary"><i class="fa-solid fa-location-dot mx-1" style="color: #f9aa01"></i>60 29th
                        Strett
                        San Francisco,America</p>
                    <p class="text-secondary"><i class="fa-solid fa-phone mx-1" style="color: #f9aa01;"></i>(+00)123-456-789
                    </p>
                    <p class="text-secondary"> <i class="fa-solid fa-envelope mx-1"
                            style="color: #f9aa01"></i>demo@example.com
                    </p>
                </div>
                <template v-for="(oggetto, i) in ArrayInfo">
                    <div class="col-3 my-4">
                        <h4>{{ oggetto.title }}</h4>
                        <template v-for="oggetto in oggetto.opzioni">
                            <p class="text-secondary">{{ oggetto }}</p>
                        </template>
                    </div>
                </template>
                <div class="col-3 my-4">
                    <h4>Our Newsletter</h4>
                    <p class="text-secondary">There are many variations of passages of form humour or randomised</p>
                    <input type="text">
                    <i class="fa-solid fa-paper-plane"></i>
                    <div>
                        <i class="fa-brands fa-facebook-f mx-1 my-2"></i>
                        <i class="fa-brands fa-twitter mx-1 my-2"></i>
                        <i class="fa-brands fa-google-plus-g mx-1 my-2"></i>
                        <i class="fa-brands fa-skype mx-1 my-2"></i>
                        <i class="fa-brands fa-instagram mx-1 my-2"></i>
                    </div>
                </div>
            </div>
        </div>
        <hr>
    </section>
</template>

<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

i {
    &:hover {
        color: $orange;
    }
}


p {
    margin: 0.25rem;

    &:hover {
        color: $orange !important;
    }
}
</style>
