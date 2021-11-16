import { NavDropdown} from 'react-bootstrap';
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            Rainbow TechMedia Services
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/'>
                Home
              </a>
            </li>
            <li>
              <a href='/about'>
                About
              </a>
            </li>
            <li>
            <a>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/web_development"><p>Web Development</p></NavDropdown.Item>
              <NavDropdown.Item href="/software_development"><p>Software Development</p></NavDropdown.Item>
              <NavDropdown.Item href="/mobile_app_development"><p>Mobile App Development</p></NavDropdown.Item>
              </NavDropdown>
              </a>
            </li>
            <li>
              <a href='/contact' >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}




