# domain_page

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### cli parameters
```
npm run build -- --publicpath=/templates/sale/ --issale=true
npm run build -- --publicpath=/templates/button/ --onlyform=false --onlybutton=true --issale=true
npm run build -- --publicpath=/templates/inquiry/ --onlyform=true --onlybutton=false --issale=false
npm run build -- --publicpath=/templates/saleinquiry/ --onlyform=true --onlybutton=false --issale=true
npm run build -- --publicpath=/templates/contacts/ --onlycontacts=true --onlybutton=false --issale=true
```

### Template variants

1. **Sale page** (`--issale=true`) - показывает кнопку "купить сейчас" и форму обратной связи
2. **Button only** (`--onlybutton=true`) - показывает только кнопку "купить сейчас"
3. **Inquiry form** (`--onlyform=true --issale=false`) - показывает только форму для запросов
4. **Sale inquiry** (`--onlyform=true --issale=true`) - показывает только форму для продажи
5. **Contacts** (`--onlycontacts=true`) - показывает кнопку и контактную информацию владельца

### Contact information setup

Для использования шаблона с контактами, в HTML должны быть переданы следующие переменные:
- `${telegramusername}` - Telegram аккаунт (например: @username)
- `${whatsapp}` - WhatsApp номер (например: +1234567890)
- `${phone}` - Номер телефона (например: +1234567890)
- `${email}` - Email адрес (например: contact@example.com)

Любое из этих полей может быть пустым, тогда соответствующий контакт не будет отображаться.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).