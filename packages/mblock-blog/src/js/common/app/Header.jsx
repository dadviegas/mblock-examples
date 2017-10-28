import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react'

class HeaderComponent extends PureComponent {
  render() {
    const { pathname } = this.props.location;

    return <Menu inverted>
      <Menu.Item name='home' active={pathname === '/'} as={Link} to='/' />
      <Menu.Item name='about' active={pathname === '/about'} as={Link} to='/about' />
    </Menu>
  }
}

export default withRouter(props => <HeaderComponent {...props} />)
