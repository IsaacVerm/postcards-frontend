# postcards-frontend

## Vue

[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) used to edit code in browser.

## How the app works

There are two type of files:

- `html` templates
- `javascript` vue instances (or components)

When loading the app there's a [lifecycle for each component](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks). Just before the app is created a hook is ran which fetches the data needed to display the cards.

## Gotchas

Use `methods` instead of `computed` properties in order to fetch data in the right order.

## Sources used

[Making HTTP requests with axios](https://www.sitepoint.com/fetching-data-third-party-api-vue-axios/)

[How to make table data not linked to template](https://www.developerdrive.com/2017/07/creating-a-data-table-in-vue-js/)

[How to chain axios requests](https://github.com/axios/axios/issues/708)

[Work with forms in Vue](https://logrocket.com/blog/an-imperative-guide-to-forms-in-vue-js-2/)
