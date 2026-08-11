export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `
      <span class="inline-flex items-center gap-2">
        <svg class="w-5 h-5 text-cyan-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Contador: <strong class="text-cyan-300 text-lg">${counter}</strong></span>
      </span>
    `
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
