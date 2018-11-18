'use strict'
const reversed = "moc.liamg@leseirf.ailuj"
const actual = reversed.split("").reverse().join("")
Array.from(document.getElementsByClassName('email'))
  .forEach(el => {
    el.setAttribute('href', `mailto:${actual}`)
    if (!el.innerHTML) el.innerHTML = actual
  })
