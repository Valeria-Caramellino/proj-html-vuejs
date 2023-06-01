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
});
