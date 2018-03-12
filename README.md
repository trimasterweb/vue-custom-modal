# vue-custom-modal
Component for Custom modal

### install:
link in your page or js file "vue-custom-modal.js" and a css file "vue-custom-modal.css";

### sample:
```
<custom-modal ref="modal" :width="300" :height="170" title="Hello World!">
  <div class="content">Hello world!</div>
</custom-modal>
```

### or sample with iframe html:
```
<custom-modal ref="modal" :width="820" :height="600" title="Helllo World!">
  <iframe :src="getIframeUrl()" frameborder="0" scrolling="no" width="100%" height="540" />
</custom-modal>
```
