<script>
import AppTopFooter from './AppTopFooter.vue';
export default {
    name: "AppFooter",
    components: {
        AppTopFooter,
    }
}

</script>
<template>
    <footer class="mt-4">

        <!--sezione alta del footer-->
        <AppTopFooter />

        <!--sezione bassa del footer-->
        <section class="container">
            <div class="row">
                <div class="col-11 mx-auto d-flex justify-content-between">
                    <div class="col-3 text-secondary">
                        Copyright © 2023 Codezeel
                    </div>
                    <div class="col-3 text-end">
                        <i class="fa-brands fa-cc-visa mx-2"></i>
                        <i class="fa-brands fa-cc-mastercard mx-2"></i>
                    </div>

                </div>

            </div>

        </section>
    </footer>
</template>
<style lang="scss" scoped>
footer {
    background-image: url(../assets/footer-bg.png);
    background-position: top;
    background-size: cover;
    height: 50vh;

    i {
        font-size: 2rem;

    }

}
</style>