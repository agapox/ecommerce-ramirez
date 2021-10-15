const Footer = () => {
  let currentYear = new Date()
  currentYear = currentYear.getFullYear()
  return (
    <footer>
      <div id="copyright">
      { currentYear } Designed with <span className="heart">&hearts;</span> by <a href="./">agapox</a>
      </div>
    </footer>
  )
}

export default Footer
