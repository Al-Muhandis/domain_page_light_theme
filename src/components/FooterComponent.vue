<template>
  <footer>
    <p>
      <strong>{{ year }}</strong>
       {{ fullFooterText }}
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    year: Number,
    copyrightText: String,
    companyName: String,
	domainName: String
  },
  data() {
    return {};
  },
	computed: {
    fullFooterText() {
      let firstPart = `${this.copyrightText} ${this.companyName}`;
     if (this.domainName && this.$t) {
        try {
          // Используем $t для перевода второй части с подстановкой домена
          const secondPart = this.$t('footerAdminInfo', { domainName: this.domainName });
          // Объединяем части через ' | '
          return `${firstPart} | ${secondPart}`;
        } catch (e) {
          console.warn('Translation key "footerAdminInfo" not found.');
          // Если перевод не найден, возвращаем только первую часть
          return firstPart;
        }
      } else {
         // Если доменное имя отсутствует, возвращаем только первую часть
         return firstPart;
      }
    }
  }
};
</script>

<style scoped lang="scss">
footer {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  margin-top: 40px;
  border-top: 1px solid #fff;

  p {
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    margin-top: 20px;
  }
}

.light footer {
  border-top: 1px solid #122432;

  p {
    color: #122432;
  }
}
</style>
