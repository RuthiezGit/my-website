const hireBtn = document.getElementById("hireMeBtn");
const popup = document.getElementById("contactPopup");
const closeBtn = document.getElementById("closePopup");
const form = document.getElementById("contactForm");

// Open the popup
hireBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

// Close the popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Handle form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const response = await fetch("/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
    popup.classList.remove("active");
  } else {
    alert("Failed to send message. Try again later.");
  }
});
