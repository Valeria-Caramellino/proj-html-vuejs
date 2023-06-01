<script >

export default {
    name: "AppBottonHeader"
}

</script>
<template>
    <section class="container-fluid">
        <div class="container">
            <div class="row position-relative">
                <div class="col-11 mx-auto d-flex align-items-center ">
                    <div>
                        <div class="skewed">
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

                <div class=" my-width position-absolute d-flex justify-content-center align-items-center">
                    <div class="trasform">
                        <a href="#su"><i class="fa-solid fa-angles-up"></i></a>
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

    div.skewed {
        transform: skew(-20deg);
        background-color: $orange;

        h3 {
            font-weight: 600;
        }
    }

    div.my-width {
        width: 30px;
        height: 30px;
        bottom: 2rem;
        right: 6rem;
        background-color: $orange;
        transform: rotate(45deg);

        div.trasform {
            transform: rotate(-45deg);
        }
    }

    a {
        color: black;
        text-decoration: none;
    }

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