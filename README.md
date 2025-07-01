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
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
