const Footer = () => {
  let currentYear = new Date()
  currentYear = currentYear.getFullYear()
  return (
    <footer>
      <div className="container">
        <div id="copyright">
          { currentYear } Designed with <span className="heart">&hearts;</span> by <a href="./">agapox</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
