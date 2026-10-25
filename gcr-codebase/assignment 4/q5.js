// Q5: Movie Ticket Booking (Objects + RegExp)

const patterns = {
  name: { regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: "Name must contain only alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
  // 1 to 10 only: either "10" or a single digit 1-9
  seats: { regex: /^(10|[1-9])$/, message: "Seats must be a number from 1 to 10." },
};

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let allValid = true;

  // Validate each field and show its error message
  for (const field in patterns) {
    const value = document.getElementById(field).value.trim();
    const isValid = patterns[field].regex.test(value);
    document.getElementById(field + "Error").textContent = isValid ? "" : patterns[field].message;
    if (!isValid) allValid = false;
  }

  const ticketDiv = document.getElementById("ticket");
  if (!allValid) {
    ticketDiv.style.display = "none";
    return;
  }

  // Store booking info in an object and display the ticket
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };
  console.log("Booking:", booking);

  ticketDiv.innerHTML = `
    <h3>Ticket Confirmed</h3>
    <p><strong>Name:</strong> ${booking.name}</p>
    <p><strong>Email:</strong> ${booking.email}</p>
    <p><strong>Seats:</strong> ${booking.seats}</p>`;
  ticketDiv.style.display = "block";
});