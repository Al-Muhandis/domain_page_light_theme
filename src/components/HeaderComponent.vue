<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../assets/logo.svg" />
      </a>
    </div>
    <div class="btn-lang_container">
      <button
        id="showLangList"
        class="btn btn-lang_selection"
        @click="show = !show"
      >
        {{ $i18n.locale }}
      </button>

      <transition name="slide-fade">
        <div class="language-list" v-if="show">
          <div class="language-list_container">
            <button
              v-for="lang in languages"
              :key="lang.code"
              :id="lang.code.toUpperCase()"
              class="btn btn-lang"
              @click="changeLocale(lang.code)"
            >
              {{ lang.label }}
            </button>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      show: false,
      languages: [
        { code: "ar", label: "AR - اَلْعَرَبِيَّةُ" },
        { code: "cn", label: "CN - 中文" },
        { code: "de", label: "DE - Deutsch" },
        { code: "en", label: "EN - English" },
        { code: "es", label: "ES - Español" },
        { code: "fr", label: "FR - Français" },
        { code: "it", label: "IT - Italian" },
        { code: "pl", label: "PL - Polski" },
        { code: "pt", label: "PT - Português" },
        { code: "ru", label: "RU - Русский" },
        { code: "tr", label: "TR - Türkiye" },
        { code: "ua", label: "UA - Українська" },
        { code: "vn", label: "VN - Tiếng Việt" },
      ],
    };
  },
  methods: {
    changeLocale(code) {
      this.$i18n.locale = code;
      this.show = false;
      this.currentLocale();
      this.reloadPage();
    },
    currentLocale() {
      localStorage.setItem("locale", this.$i18n.locale);
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .logo img {
    width: 100%;

    @media (max-width: 900px) {
      width: calc(180px + (250 - 180) * ((100vw - 375px) / (900 - 375)));
    }
  }
}

.btn-lang_container {
  position: relative;

  .btn-lang_selection {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: #29d1a9;
    font-size: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

    @media (max-width: 900px) {
      width: 40px;
      height: 40px;
      font-size: 14px;
    }
  }
}

.language-list {
  position: absolute;
  top: 100%;
  right: -30%;
  margin-top: 10px;

  .language-list_container {
    display: grid;
    grid-auto-flow: row;
    grid-gap: 10px;
    padding: 12px;
    background: #29d1a9;
    border-radius: 10px;

    .btn-lang {
      font-size: 14px;
      text-wrap: nowrap;
      padding: 5px;
      background: #62e5c6;
      min-width: 140px;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.4s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
