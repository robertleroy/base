/* store.js */
import { writable, readable } from 'svelte/store';

export const sidebarOpen = writable(false);


// #region Routes
export const mainNav = readable({
  title: "Base",
  url: '/',
  routes: [
    { name: "Demo", url: "/demo" },
    // { name: "Components", url: "/components" },
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

export const componentsNav = readable({
  title: "Components",
  url: '/components',
  routes: [
    // { name: "", url: "/components/" },
  ]
});

// #endregion Routes



const initialUserData = {
  name: {
    first: 'Horace', 
    last: 'Tabor'
  },
  userName: "robleroy",
  password: "1234",
  address: {
    street: "80401 E 7th Rd",
    city: "Leadville",
    state: "CO",
    zip: "80461"
  },
  phone: "3031234567",
  email: "horace@tabor.com",
  birthday: "1963-10-14",
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
  count: 7,
  percent: 33,
  min: 0,
  max: 10,
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


