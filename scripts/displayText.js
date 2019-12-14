var top_text = document.getElementById("top-text")
var top_text_input = document.getElementById("top-text-input")
var top_text_logged_keys = []

var bottom_text = document.getElementById("bottom-text")
var bottom_text_input = document.getElementById("bottom-text-input")
var bottom_text_logged_keys = []


top_text_input.onkeydown = function(event) {
  if (event.key === "backspace") {
    top_text_logged_keys = []
    top_text.innerHTML = top_text_logged_keys.join("")
  } else {
    top_text_logged_keys.push(event.key)
    top_text.innerHTML = top_text_logged_keys.join("")
  }
}

bottom_text_input.onkeydown = function(event) {
  if (event.key == "backspace") {
    bottom_text_logged_keys.pop()
    bottom_text.innerHTML = bottom_text_logged_keys.join("")
  } else {
    bottom_text_logged_keys.push(event.key)
    bottom_text.innerHTML = bottom_text_logged_keys.join("")
  }
}

