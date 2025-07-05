const confirmation = document.getElementById('confirmation');
const nextSlotsDiv = document.getElementById('next-slots');

document.getElementById('date-picker').addEventListener('change', showNextSlots);

function showNextSlots() {
  const date = document.getElementById('date-picker').value;
  const service = document.getElementById('service-select').value;
  nextSlotsDiv.innerHTML = ''; // reset
  if (date && service) {
    let slotClass = getServiceClass(service);
    nextSlotsDiv.innerHTML = `<strong>Next available slots:</strong> 
      <span class="${slotClass}">10:00 AM</span>
      <span class="${slotClass}">1:00 PM</span>
      <span class="${slotClass}">3:30 PM</span>`;
  }
}

function bookAppointment() {
  const service = document.getElementById('service-select').value;
  const date = document.getElementById('date-picker').value;
  const time = document.getElementById('time-picker').value;

  if (service && date && time) {
    confirmation.innerHTML = `🎉 Appointment booked for <strong>${service}</strong> on <strong>${date}</strong> at <strong>${time}</strong>!`;
    confirmation.style.color = 'green';
    confirmation.style.animation = 'pop 0.4s ease';
    setTimeout(() => confirmation.style.animation = '', 500);

    const ul = document.getElementById('appointments-list');
    const li = document.createElement('li');
    li.textContent = `${date} - ${time} (${service})`;
    li.classList.add(getServiceClass(service));
    ul.appendChild(li);
  } else {
    confirmation.textContent = '⚠️ Please select service, date and time.';
    confirmation.style.color = 'red';
  }
}

function getServiceClass(service) {
  switch(service) {
    case 'Web Design': return 'web-design';
    case 'Branding': return 'branding';
    case 'UI/UX': return 'ui-ux';
    default: return '';
  }
}

// Pop animation style
const style = document.createElement('style');
style.innerHTML = `
@keyframes pop {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}`;
document.head.appendChild(style);
