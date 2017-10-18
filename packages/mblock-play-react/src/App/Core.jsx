import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  List,
  Menu,
  Segment,
  Visibility, Sidebar, Image, Icon, Header
} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class HomepageLayout extends Component {
  state = { activeItem: 'home' }
  constructor(props) {
    super(props)
    this.props = props
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const {children} = this.props
    return (
      <div>
        <Menu inverted>
          <Menu.Item name='home' active={activeItem === 'home'} as={Link} to='/' onClick={this.handleItemClick} />
          <Menu.Item name='about' active={activeItem === 'about'} as={Link} to='/about' onClick={this.handleItemClick} />
        </Menu>

        <Segment>
          {children}
        </Segment>
      </div>
    )
  }
}
