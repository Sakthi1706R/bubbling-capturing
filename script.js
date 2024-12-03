// Selecting elements
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// Common event handler
function logEvent(event) {
  console.log(`${event.currentTarget.className} (phase: ${event.eventPhase})`);
  // Preventing the event from propagating further
  // event.stopPropagation(); // Uncomment to stop propagation
}

// Event phases:
// 1: Capturing phase
// 2: Target phase
// 3: Bubbling phase

// Adding event listeners
// Grandparent
grandparent.addEventListener('click', logEvent, true); // Capturing phase
grandparent.addEventListener('click', logEvent); // Bubbling phase

// Parent
parent.addEventListener('click', logEvent, true); // Capturing phase
parent.addEventListener('click', logEvent); // Bubbling phase

// Child
child.addEventListener('click', logEvent, true); // Capturing phase
child.addEventListener('click', logEvent); // Bubbling phase
