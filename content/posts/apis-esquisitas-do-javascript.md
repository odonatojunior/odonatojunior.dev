---
title: APIs esquisitas do Javascript
tags:
  - Javascript
description: A web é uma terra sem lei comandada com mãos de ferro pelo Javascript, conheça aqui algumas das APIs diferenciadas que podemos usar no browser
date: 11/07/2021
---

A web é uma terra sem lei comandada com mãos de ferro pelo Javascript, conheça aqui algumas das APIs diferenciadas que podemos usar no browser

```html
<!-- index.html -->
<form>
  <label for="textInput">API da web de Text 2 Speech</label>
  <input type="text" id="textInput" />
  <button id="ttsButton">Clique para o TTS</button>
</form>
```

```javascript
//index.js
document.querySelector('#ttsButton').addEventListener('click', (e) => {
  e.preventDefault()
  textToSpeech()
})

function textToSpeech() {
  const textValue = document.querySelector('#textInput').value
  const voice = new SpeechSynthesisUtterance(textValue, {
    volume: 1,
    rate: 1,
    pitch: 1
  })
  window.speechSynthesis.speak(voice)
  return 'IT WORKS'
}
```
