// This is the main instance
const rootComponent = {
  template: `<div style="display: flex; flex-wrap: wrap">
   <mole></mole><mole></mole><mole></mole>
   <mole></mole><mole></mole><mole></mole>
  </div>`,
};
const moleComponent = {
  //TODO
  template: ` `
};
const app = Vue.createApp(rootComponent);
app.component('mole', moleComponent);
const vm = app.mount("#app");
