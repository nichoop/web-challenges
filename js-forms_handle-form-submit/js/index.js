console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted");

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  event.target.firstName.focus();
  form.reset();
});

// console.log("form");
