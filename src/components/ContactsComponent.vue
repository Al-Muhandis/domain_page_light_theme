<template>
  <div class="contacts-container">
    <h3 class="txt-center">{{ $t("contactsTitle") }}</h3>
    <div class="contacts-list">
      <!-- Telegram -->
      <div v-if="telegramContact" class="contact-item">
        <div class="contact-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-.38.02-1.13.36-.16.05-.3.04-.44-.04-.22-.12-.35-.18-.56-.29-.32-.16-.57-.25-.49-.53.04-.14.21-.28.48-.42.63-.32 4.2-1.7 4.2-1.7s.14-.02.33.02c.19.04.35.04.43.15.08.1.05.7-.02 1.01z" fill="currentColor"/>
          </svg>
        </div>
        <a :href="`https://t.me/${telegramContact.replace('@', '')}`" target="_blank" class="contact-link">
          {{ telegramContact }}
        </a>
      </div>

      <!-- WhatsApp -->
      <div v-if="whatsappContact" class="contact-item">
        <div class="contact-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" fill="currentColor"/>
          </svg>
        </div>
        <a :href="`https://wa.me/${whatsappContact.replace(/[^0-9]/g, '')}`" target="_blank" class="contact-link">
          +{{ whatsappContact }}
        </a>
      </div>

      <!-- Phone -->
      <div v-if="phoneContact" class="contact-item">
        <div class="contact-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
          </svg>
        </div>
        <a :href="`tel:${phoneContact}`" class="contact-link">
          +{{ phoneContact }}
        </a>
      </div>

      <!-- Email -->
      <div v-if="emailContact" class="contact-item">
        <div class="contact-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
          </svg>
        </div>
        <a :href="`mailto:${emailContact}`" class="contact-link">
          {{ emailContact }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactsComponent",
  mounted() {
    // Получаем контактные данные из мета-тегов
    const telegramMeta = document.head.querySelector('meta[name="telegramusername"]');
    const whatsappMeta = document.head.querySelector('meta[name="whatsapp"]');
    const phoneMeta = document.head.querySelector('meta[name="phone"]');
    const emailMeta = document.head.querySelector('meta[name="email"]');

    this.telegramContact = telegramMeta ? telegramMeta.getAttribute('content') : '';
    this.whatsappContact = whatsappMeta ? whatsappMeta.getAttribute('content') : '';
    this.phoneContact = phoneMeta ? phoneMeta.getAttribute('content') : '';
    this.emailContact = emailMeta ? emailMeta.getAttribute('content') : '';
  },
  data() {
    return {
      telegramContact: '',
      whatsappContact: '',
      phoneContact: '',
      emailContact: ''
    };
  }
};
</script>

<style scoped lang="scss">
.contacts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: calc(20px + (40 - 20) * ((100vw - 900px) / (1920 - 900)));
  border-radius: 20px;
  box-shadow: 2px 4px 5px 2px rgba(0, 0, 0, 0.25);
  background: linear-gradient(225deg, #29d1a9 0%, #0d4280 100%);

  @media (max-width: 900px) {
    padding: 20px 10px 10px;
  }

  h3 {
    color: #ffffff;
    margin-bottom: 10px;
  }
}

.contacts-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  @media (max-width: 900px) {
    gap: 12px;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    padding: 10px 14px;
    gap: 10px;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #29d1a9;
  border-radius: 50%;
  color: #ffffff;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 35px;
    height: 35px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.contact-link {
  flex: 1;
  color: #122432;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  word-break: break-word;

  @media (max-width: 900px) {
    font-size: 14px;
  }

  &:hover {
    color: #0d4280;
    text-decoration: underline;
  }
}
</style>