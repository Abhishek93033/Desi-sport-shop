document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (name === "" || email === "" || phone === "") {
    alert("Please fill all required fields.");
    e.preventDefault(); // form submit रोकता है
  } else {
    alert("Thank you! Your form has been submitted.");
    // Form will proceed to submit.html
  }
});
