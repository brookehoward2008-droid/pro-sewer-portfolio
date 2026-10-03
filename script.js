(function () {
  "use strict";
  document.querySelectorAll(".view-switch").forEach(function (group) {
    group.addEventListener("click", function (event) {
      var button = event.target.closest(".view-button");
      if (!button) return;
      var card = group.closest(".review-card");
      var image = card.querySelector(".mockup-image");
      image.src = button.getAttribute("data-src");
      image.alt = button.getAttribute("data-alt");
      group.querySelectorAll(".view-button").forEach(function (candidate) {
        var active = candidate === button;
        candidate.classList.toggle("active", active);
        candidate.setAttribute("aria-pressed", active ? "true" : "false");
      });
    });
  });

  var dialog = document.getElementById("imageDialog");
  var dialogImage = document.getElementById("dialogImage");
  var dialogCaption = document.getElementById("dialogCaption");
  document.querySelectorAll(".enlarge-button").forEach(function (button) {
    button.addEventListener("click", function () {
      if (!dialog || !dialogImage) return;
      var image = button.closest(".review-card").querySelector(".mockup-image");
      dialogImage.src = image.src;
      dialogImage.alt = image.alt;
      if (dialogCaption) dialogCaption.textContent = image.alt;
      dialog.showModal();
    });
  });
  var closeButton = document.querySelector(".dialog-close");
  if (closeButton && dialog) closeButton.addEventListener("click", function () { dialog.close(); });
  if (dialog) dialog.addEventListener("click", function (event) { if (event.target === dialog) dialog.close(); });

}());
