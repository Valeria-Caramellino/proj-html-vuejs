<script>
import AppSectionTopCard from './AppSectionTopCard.vue';
import AppSectionSpecialCategory from './AppSectionSpecialCategory.vue';
import AppProducts from './AppProducts.vue';
import AppSectionDiscount from './AppSectionDiscount.vue';
import AppDealOfDay from './AppDealOfDay.vue';
import AppCaroselPersonal from './AppCaroselPersonal.vue';
export default {
  name: "AppMain",
  components: {
    AppSectionTopCard,
    AppSectionSpecialCategory,
    AppProducts,
    AppSectionDiscount,
    AppDealOfDay,
    AppCaroselPersonal,
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
      ]
    }
  }

}


</script>

<template>
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
        <AppProducts /> <!--carosello1 da fare-->
        <AppSectionDiscount />
        <AppDealOfDay /><!--carosello2 da fare-->
        <AppCaroselPersonal /><!--carosello 3 da fare-->

      </div>
    </section>

    <!--
                                                                                        <h1>Main:</h1>
                                                                                        <ul>
                                                                                          <li>deal of the day carosello con oggetti scontati</li>
                                                                                          <li>fascia vh50 carosello con puntini</li>
                                                                                          <li>blog new game carosello</li>
                                                                                          <li>brend</li>
                                                                                        </ul>
                                                                                        -->
  </main>
</template>

<style lang="scss" scoped>
div {
  i {
    font-size: 2rem;
    margin-right: 1rem;

    &:hover {
      color: #f9aa01;
    }

  }

  p.titolo {
    &:hover {
      color: #f9aa01;
    }
  }

}



p {
  margin: 0;
}
</style>
