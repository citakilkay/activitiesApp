import React, { useState } from 'react';
import { Menu, Button, Icon, Accordion, List } from 'semantic-ui-react';

const Navbar = () => {
    const [isAccordionActive, setIsAccordion] = useState<boolean>(false);
    const [isMenuActive, setIsMenuActive] = useState<boolean>();
    const handleAccordion = () => {
        setIsAccordion(!isAccordionActive);
    }
    return (
        <div className='navbar'>
            <Menu pointing fixed='left' vertical className='navbar__menu'>
                <Menu.Item header>
                    <img className="ui image" src="/assets/logo_transparent.png" />
                </Menu.Item>
                <Menu.Item header name='Profile'/>
                <Menu.Item header name='Notifications'/>
                <Menu.Item>
                    <Accordion>
                        <Accordion.Title className='ui navbar__item -header' onClick={handleAccordion}><Icon name={isAccordionActive ? 'angle down' : 'angle right'} className='navbar__icon' />Categories</Accordion.Title>
                        <Accordion.Content active={isAccordionActive}>
                            <List>
                                <List.Item className='navbar__subitem'> Culture</List.Item>
                                <List.Item className='navbar__subitem'> Drinks</List.Item>
                                <List.Item className='navbar__subitem'> Film</List.Item>
                                <List.Item className='navbar__subitem'> Food</List.Item>
                            </List>
                        </Accordion.Content>
                    </Accordion>
                </Menu.Item>
                <Menu.Item header name='Followers' />
                <Menu.Item active header name='Following' />
                <Menu.Item header name='Settings' />
                <Menu.Item name='Sing-out' className='navbar__item -align-bottom' />
                <Menu.Item header className='navbar__item -center'><Button ui={1} color='teal' className='navbar__button' content='Create an Activity' /></Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar;
