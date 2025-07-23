<template>
  <div class="wrapper">
    <HeaderComponent></HeaderComponent>
    <MainComponent :domain-name="domainName"></MainComponent>
    <FooterComponent
      year="2025"
      :copyright-text="$t(`footerText`)"
      company-name="SigmaParking"
      :domain-name="domainName"
    ></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
  },  
  mounted() {
    const metaTag = document.querySelector('meta[name=\'domain-name\']');
    if (metaTag) {
       const domainName = metaTag.getAttribute('content');
       if (domainName) {
           this.domainName = domainName;
       }
    }
  },
  data() {
    return {
      domainName: "",
    };
  },
};
</script>

<style>
#app {
  height: inherit;
}
</style>
