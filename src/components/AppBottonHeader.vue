<script >

export default {
    name: "AppBottonHeader"
}

</script>
<template>
    <section class="container-fluid">
        <div class="container">
            <div class="row ">
                <div class="col-11 mx-auto d-flex align-items-center">
                    <div>
                        <div class="bg-warning">
                            <h3 class="p-2 text-center text-dark">Upcoming Stock</h3>
                        </div>
                        <div>
                            <h1>Resident Evil 3 <br>
                                Remake</h1>
                        </div>
                        <div>
                            <button class="my-4 py-2 px-4">Shop Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

section {
    height: 100vh;
    background-image: url(../assets/main-banner-01.jpg);

    div.row {
        height: 100vh;

        button {
            &:hover {
                background-color: $orange;
                color: #ffffff;
            }
        }
    }
}
</style>