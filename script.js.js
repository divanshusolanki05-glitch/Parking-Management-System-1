const slotContainer = document.getElementById("slotContainer");
const slotSelect = document.getElementById("slot");
const bookingForm = document.getElementById("bookingForm");

let slots = Array(10).fill(false); // 10 slots, false = available

function renderSlots() {
  slotContainer.innerHTML = "";
  slotSelect.innerHTML = "";

  slots.forEach((booked, index) => {
    const slotDiv = document.createElement("div");
    slotDiv.classList.add("slot");
    if (booked) {
      slotDiv.classList.add("booked");
      slotDiv.textContent = `Slot ${index + 1} (Booked)`;
    } else {
      slotDiv.textContent = `Slot ${index + 1} (Available)`;
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `Slot ${index + 1}`;
      slotSelect.appendChild(option);
    }
    slotContainer.appendChild(slotDiv);
  });
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const slotIndex = slotSelect.value;
  if (slotIndex !== "") {
    slots[slotIndex] = true;
    renderSlots();
    alert("Slot booked successfully!");
  }
});

renderSlots();
