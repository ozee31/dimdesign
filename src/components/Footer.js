import React from 'react'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        Copyright © {new Date().getFullYear()}
      </footer>
    )
  }
}

export default Footer
