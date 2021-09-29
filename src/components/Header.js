import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuQHVyS_HZyaxwCK4sNN8eT-YKi35uq4tcDA&usqp=CAU" className="header-img"/>
      <div className="header-title">Spend Jeff Bezos's Money</div>
    </div>
  )
}

export default React.memo(Header);
