import React from 'react';

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="header">
      <div className="content">
        <div className="logo"></div>
        <div className="search-container">
          <form className="search-form">
            <input></input>
            <button>
              <span>search</span>
            </button>
          </form>
        </div>
        <div className="header-menu-container">
          <div>select</div>
          <div>
            <div>menu item</div>
            <div>menu item</div>
          </div>
          <div>
            <div>cart</div>
            <div className="dropdown-cart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
