/* store.js */
import { writable, readable } from 'svelte/store';

export const sidebarOpen = writable(false);


// #region Routes
export const mainNav = readable({
  title: "Home",
  url: '/',
  routes: [
    { name: "Svelte", url: "/svelte" },
    { name: "Demo", url: "/demo" },
    { name: "About", url: "/about" },
  ]
});

export const demoNav = readable({
  title: "Demo",
  url: '/demo',
  routes: [
    { name: "headings", url: "/demo/headings" },
    { name: "text", url: "/demo/text" },
    { name: "lists", url: "/demo/lists" },
    { name: "forms", url: "/demo/forms" },
    { name: "code", url: "/demo/code" },
    { name: "table", url: "/demo/table" },
    { name: "colors", url: "/demo/colors" },
  ]
});

export const svelteNav = readable({
  title: "Svelte",
  url: '/svelte',
  routes: [
    { name: "Stores", url: "/svelte/stores", routes: [] },
    // { name: "Routing", url: "/svelte/routing", routes: [] },
    { name: "Components", url: "/svelte/components", routes: [
      { name: "BtnMenu", url: "/svelte/components/btnMenu" },
      { name: "Number", url: "/svelte/components/number" },
      { name: "Range", url: "/svelte/components/range" },
      { name: "Phone", url: "/svelte/components/phone" },
      { name: "Outclick", url: "/svelte/components/outclick" },
    ] },
    { name: "MDSVEX", url: "/svelte/mdsvex" ,
    routes: [
      { name: "Tabs", url: "/svelte/mdsvex/tabs" },
    ]},
    { name: "Github", url: "/svelte/github", routes: [
      { name: "Github Pages", url: "/svelte/github/pages" },
      { name: "Deploy", url: "/svelte/github/deploy" },
    ] },
  ]
});

// #endregion Routes



const initialUserData = {
  name: {
    first: 'Horace', 
    last: 'Tabor'
  },
  userName: "Matchless",
  password: "BabyDoe",
  address: {
    street: "80401 E 7th Rd",
    city: "Leadville", 
    state: "CO",
    zip: "80461"
  },
  phone: "3031234567",
  email: "horace@tabor.com",
  birthday: "1830-11-26",
  deathday: "1899-04-10",
  time: {
    min: "09:00", 
    max: "18:00",
    val: "10:13"
  },
  dateTime: {
    min: "2018-06-07T00:00", 
    max: "2018-06-14T00:00",
    val: "2018-06-12T19:30"
  },
  url: "github.com",
  fruit: "banana",
  checked: true,
  count: 33,
  percent: 33,
  min: 0,
  max: 100,
  step: 1,
  
  stooges: [
    {name: "Larry", checked: false},
    {name: "Moe", checked: false},
    {name: "Curley", checked: true}
  ],

  descriptionlist: [
    {
      key: "Term to be described",
      value: "Description of the term"
    },
    {
      key: "Coffee",
      value: "Black hot drink"
    },
    {
      key: "Milk",
      value: "White cold drink"
    },
  ]
  
}

export const userData = writable(initialUserData);


