<script>
import AppSectionTopCard from './AppSectionTopCard.vue';

export default {
  name: "AppMain",
  components: {
    AppSectionTopCard,
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
                <p>{{ oggetto.title }}</p>
                <p class="text-secondary">{{ oggetto.description }}</p>
              </div>
            </div>
          </template>
        </div>
        <AppSectionTopCard />
      </div>
    </section>

    <!--
                                                <h1>Main:</h1>
                                                <ul>
                                                  <li>piccole icone</li>
                                                  <li>elemento 2 card uguale o simile ad altro elemento</li>
                                                  <li>categorie speciali</li>
                                                  <li>oup products carosello tutti oggetti</li>
                                                  <li>elemento 2 card uguale o simile al secondo punto</li>
                                                  <li>deal of the day carosello con oggetti scontati</li>
                                                  <li>fascia vh50 carosello con puntini</li>
                                                  <li>blog new game carosello</li>
                                                  <li>brend</li>
                                                </ul>
                                                -->
  </main>
</template>

<style lang="scss" scoped>
i {
  font-size: 2rem;
  margin-right: 1rem;

  &:hover {
    color: #f9aa01;
  }
}

p {
  margin: 0;
}
</style>
