import { reactive } from "vue";

export const store = reactive({
  ArrayObjetcProducts: [
    {
      img: "src/assets/01-327x327.jpg",
      voto: "4",
      title: "Labyriths of the world",
      prezzo: "€ 50.00",
    },
    {
      img: "src/assets/02-327x327.jpg",
      voto: "3",
      title: "Cuffie",
      prezzo: "€ 40.00",
    },
    {
      img: "src/assets/03-327x327.jpg",
      voto: "2",
      title: "Copri Sedia",
      prezzo: "€ 45.00",
    },
    {
      img: "src/assets/04-327x327.jpg",
      voto: "3",
      title: "Joystick",
      prezzo: "€ 10.00",
    },
    {
      img: "src/assets/05-327x327.jpg",
      voto: "5",
      title: "VR",
      prezzo: "€ 22.00",
    },
    {
      img: "src/assets/06-327x327.jpg",
      voto: "1",
      title: "Cuffie con filo",
      prezzo: "€ 50.00",
    },
    {
      img: "src/assets/07-327x327.jpg",
      voto: "2",
      title: "Joystick Red",
      prezzo: "€ 46.00",
    },
    {
      img: "src/assets/08-327x327.jpg",
      voto: "3",
      title: "Joystick Blue",
      prezzo: "€ 10.00",
    },
  ],
  ArrayObjetcOfDay: [
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
  ArrayCategory: [
    {
      title: "Featured",
    },
    {
      title: "New Arrival",
    },
    {
      title: "Best Sellers",
    },
  ],
  ArrayCategory1: [
    {
      title: "1026 day",
    },
    {
      title: "13 hours",
    },
    {
      title: "24 mins",
    },
    {
      title: "17 sec",
    },
  ],
  ArrayCards1: [
    {
      description: "Most Popular",
      title: "The BattleField 4",
      subTitle: "Naval Strike",
      img: "src/assets/cms-banner-01.jpg",
    },
    {
      description: "Lastest Game",
      title: "Assassin's Creed",
      subTitle: "Unity Game",
      img: "src/assets/cms-banner-02.jpg",
    },
  ],
  ArrayCards2: [
    {
      description: "20% Discount",
      title: "Dragon's Dogma",
      subTitle: "Video Game",
      img: "src/assets/cms-banner-03.jpg",
    },
    {
      description: "30% Discount",
      title: "World Of Tanks",
      subTitle: "New Game",
      img: "src/assets/cms-banner-04.jpg",
    },
  ],
});
