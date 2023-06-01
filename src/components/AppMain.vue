<script>
import AppSectionTopCard from './AppSectionTopCard.vue';
import AppSectionSpecialCategory from './AppSectionSpecialCategory.vue';
import AppProducts from './AppProducts.vue';
import AppSectionDiscount from './AppSectionDiscount.vue';
import AppDealOfDay from './AppDealOfDay.vue';
import AppCaroselPersonal from './AppCaroselPersonal.vue';
import AppGameBlog from './AppGameBlog.vue';
export default {
  name: "AppMain",
  components: {
    AppSectionTopCard,
    AppSectionSpecialCategory,
    AppProducts,
    AppSectionDiscount,
    AppDealOfDay,
    AppCaroselPersonal,
    AppGameBlog,
  },
  data() {
    return {
      ArrayObjetTopMain: [
        {
          icon: "fa-solid fa-truck-fast",
          title: "Free Delivery",
          description: "Free Shipping On All Order",

        },
        {
          icon: "fa-solid fa-sack-dollar",
          title: "Money Return",
          description: "Back Guarantee in 7 day",

        },
        {
          icon: "fa-solid fa-percent",
          title: "Member Discount",
          description: "On every order over $130.00",

        },
        {
          icon: "fa-solid fa-hand-holding-dollar",
          title: "Return Policy",
          description: "Support 24 hours a day",

        },
      ],
      ArrayBrand: [
        {
          img: "src/assets/brand-01.png",
        },
        {
          img: "src/assets/brand-02.png",
        },
        {
          img: "src/assets/brand-03.png",
        },
        {
          img: "src/assets/brand-04.png",
        },
        {
          img: "src/assets/brand-05.png",
        },
      ]
    }
  }

}


</script>

<template>
  <!-----------------nel main troviamo sezione iniziale e finale il resto gestito dalle APP esterne------->
  <main>
    <!--sezione piccole icone-->
    <section class="container">
      <div class="row">
        <div class="col-11 mx-auto d-flex justify-content-center">

          <template v-for="oggetto in ArrayObjetTopMain">
            <div class="col-3 d-flex align-items-center my-5">
              <i :class="oggetto.icon"></i>
              <div>
                <p class="titolo">{{ oggetto.title }}</p>
                <p class="text-secondary">{{ oggetto.description }}</p>
              </div>
            </div>
          </template>

        </div>
        <AppSectionTopCard />
        <AppSectionSpecialCategory />
        <AppProducts />
        <AppSectionDiscount />
        <AppDealOfDay />
      </div>

    </section>
    <AppCaroselPersonal />
    <AppGameBlog />

    <!--sezione brand-->
    <section class="container">
      <div class="row">
        <div class="col-11 mx-auto my-4 d-flex justify-content-around">

          <template v-for="oggetto in ArrayBrand">
            <div class="col-2">
              <img :src="oggetto.img" alt="">
            </div>
          </template>

        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use'../styles/-Variabili.scss' as*;

div {
  i {
    font-size: 2rem;
    margin-right: 1rem;

    &:hover {
      color: $orange;
    }


  }

  div.col-2 {
    img {
      height: 3rem;
    }
  }

  p.titolo {
    &:hover {
      color: $orange;
    }
  }

}

p {
  margin: 0;
}
</style>
