# DOBRO — премиальная смокерная

Сайт-витрина DOBRO: мясо из смокера (low & slow), доставка по Минску.
https://ng-vladimir.github.io/DOBRO1/

## Что внутри

- Одна страница: герой, «О нас», «Как готовим», галерея, меню (название + цена), кнопка «Позвонить».
- SEO: мета-теги, Open Graph, JSON-LD (Restaurant + меню), sitemap.xml, robots.txt.
- Адаптивная вёрстка под мобильные.

## Запуск локально

Откройте в браузере файл `index.html` или поднимите локальный сервер:

```bash
# например, с помощью npx
npx serve .
```

Сайт откроется по адресу http://localhost:3000 (или другому порту, который покажет serve).

## Деплой на GitHub Pages

1. Создайте репозиторий на GitHub (например, `bbq-so-smogom` или `bbq-website`).
2. Заливайте в него содержимое папки `bbq-website` (корень репо = папка с `index.html`).
3. В настройках репозитория: **Settings → Pages → Source**: выберите ветку (например, `main`) и папку **/ (root)**.
4. После сохранения сайт будет доступен по адресу:  
   `https://<ваш-логин>.github.io/<имя-репо>/`

5. Сайт настроен на домен **dobro.by** (файл `CNAME`). После привязки домена в настройках репо (Settings → Pages → Custom domain) и настройки DNS у регистратора сайт откроется по https://dobro.by

## Поиск (Google, Яндекс и др.)

Сайт подготовлен для индексации:

- **Мета-теги:** title, description, keywords, canonical, Open Graph, Twitter Card.
- **Структурированные данные (JSON-LD):** тип Restaurant, название, телефон, город, меню с ценами — помогают поисковикам показывать расширенные сниппеты (телефон, адрес, пункты меню).
- **sitemap.xml** и **robots.txt** — подсказывают роботам, что индексировать.

После публикации отправьте сайт вручную:

- **Google:** [Google Search Console](https://search.google.com/search-console) → добавьте свойство (URL сайта) → «Проверка URL» или загрузка sitemap.
- **Яндекс:** [Яндекс.Вебмастер](https://webmaster.yandex.ru/) → добавьте сайт → укажите sitemap.

Позиции в топе зависят от конкуренции, ссылок и времени; мы сделали всё необходимое со стороны сайта для удобной индексации.

## Домен dobro.by

Сайт уже настроен на домен **dobro.by** (в репозитории есть файл `CNAME`). Чтобы сайт открывался по https://dobro.by:

**1. Зарегистрируйте домен dobro.by** (если ещё не куплен):
- Реестр .by: [cctld.by](https://cctld.by/)
- Регистраторы: [active.by](https://active.by), [hosting.by](https://hosting.by) и др.

**2. В GitHub:** репозиторий [DOBRO1](https://github.com/NG-Vladimir/DOBRO1) → **Settings → Pages** → в поле **Custom domain** введите `dobro.by` → **Save**. При необходимости включите **Enforce HTTPS**.

**3. У регистратора домена** настройте DNS:
- **A-записи** (для корня dobro.by) на IP GitHub:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Либо, если регистратор даёт возможность указать CNAME для корня (ALIAS/ANAME), укажите: `NG-Vladimir.github.io`.

Через несколько минут — до 48 часов — сайт начнёт открываться по https://dobro.by. Подробнее: [GitHub Pages — Custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Фото

Сейчас у товаров заглушка «Фото скоро». Чтобы добавить фото:

1. Положите изображения в папку `images/` (например, `images/ribs.jpg`, `images/chicken.jpg`).
2. В `js/data.js` в каждом товаре укажите поле `image`:  
   `image: 'images/ribs.jpg'`.

## Структура

```
bbq-website/
├── index.html      # + SEO: meta, og, JSON-LD
├── sitemap.xml     # карта для поисковиков (dobro.by)
├── robots.txt      # правила для роботов
├── CNAME           # домен dobro.by для GitHub Pages
├── css/style.css
├── js/data.js
├── js/main.js
├── images/
└── README.md
```

Лицензия: по вашему усмотрению (можно оставить без лицензии или добавить MIT).
