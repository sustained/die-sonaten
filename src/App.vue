<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  background-color: black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: black;
  color: #2c3e50;
  background-image: url("/svg/background.svg");
  background-size: 100% 100%; /* If we make the X bigger on mobile this could work. */
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
  background-blend-mode: screen;
}
// #app::after {
//   background: rgba(0, 0, 0, 0.55);
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   position: absolute;
//   // z-index: -1;
//   content: "";
// }
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mb-4 {
  margin-bottom: 1rem;
}

.pt-4 {
  margin-top: 1rem;
}

.p-4 {
  padding: 1rem;
}

button {
  padding: 0.75rem;
  margin-right: 0.75rem;
  background-color: #191919;
  color: lightgray;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: hsla(0, 0%, 83%, 0.05);
}
button:focus {
  box-shadow: 0 0 0 3px #7396e4;
  outline: none;
}

a {
  font-weight: bold;
  color: #7396e4;
}

code {
  color: #7396e4;
}
</style>
