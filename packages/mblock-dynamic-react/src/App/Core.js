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
  state = { activeItem: name }
  constructor(props) {
    super(props)
    this.props = props
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { visible, activeItem } = this.state
    const {children} = this.props
    return (
      <div>
        <Segment
          inverted
          textAlign='center'
          style={{  padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={this.handleItemClick} as={Link} to='/' name='Home' active={activeItem === 'Home'} active> Home </Menu.Item>
              <Menu.Item onClick={this.handleItemClick} as={Link} to='/about' name='About' active={activeItem === 'About'}> About </Menu.Item>
            </Menu>
          </Container>
        </Segment>
        <div>{children}</div>
      </div>
    )
  }
}
