const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
const luck = document.querySelector("#luck")
const message = document.querySelector(".message p")

cookie.addEventListener('click', function() {
  toggleScreen()
})

let messageRandom = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Gente todo dia arruma os cabelos, por que não o coração?",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "A juventude não é uma época da vida, é um estado de espírito.",
]

function messageNew () {
  return messageRandom[Math.floor(Math.random() * messageRandom.length)]
}

luck.addEventListener('click', function() {
  toggleScreen()
})

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  message.textContent = messageNew()
}