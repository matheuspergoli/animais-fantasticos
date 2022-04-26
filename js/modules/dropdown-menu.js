export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  const userEvents = ['touchstart', 'click']

  dropdownMenus.forEach(menu => {
    userEvents.forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick)
    })
  })

  function handleClick(event) {
    event.preventDefault()
    this.classList.toggle('active')
  }
}