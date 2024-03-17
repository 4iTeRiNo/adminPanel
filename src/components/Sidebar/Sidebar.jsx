import './Sidebar.scss';
import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import Popup from '../Popup';
import User from '../User';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: true,
      isShowPopup: false,
      title: null,
      user: {
        id: 1,
        avatar: avatar,
        email: 'Ablent1990@teleworm.us',
        name: 'John',
        surname: 'Wick',
      },
    };
  }

  toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }));
  };

  activeLink = (title) => {
    this.setState({ title: title });
  };

  goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  togglePopup = () => {
    this.setState((state) => ({ isShowPopup: !state.isShowPopup }));
  };

  render() {
    const { isOpened, title, isShowPopup, user } = this.state;
    const width = 32;

    const containerClassnames = classnames('sidebar', { opened: isOpened });
    const logoFlex = 'logoFlex';
    const flexLinks = classnames('flexLinks');

    return (
      <>
        <div className={containerClassnames}>
          <div className={logoFlex}>
            <img width={`${width}px`} src={logo} alt="TensorFlow logo" />
            <span>TensorFlow</span>
            <button className="btn" onClick={this.toggleSidebar}>
              <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
            </button>
          </div>

          <div className={classnames('mainLinks', { flexLinks })}>
            {routes.map((route) => (
              <div
                className={classnames('link', {
                  ['active']: title === route.title,
                })}
                key={route.title}
                onClick={(e) => {
                  e.preventDefault();
                  this.activeLink(route.title);
                  this.goToRoute(route.path);
                }}
                role="button"
              >
                <FontAwesomeIcon icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))}
          </div>

          <div className={classnames('bottomLinks', { flexLinks })}>
            {bottomRoutes.map((route) => (
              <div
                key={route.title}
                className={classnames('link', {
                  ['active']: title === route.title,
                })}
                onClick={(e) => {
                  e.preventDefault();
                  this.activeLink(route.title);
                  this.goToRoute(route.path);
                }}
                role="button"
              >
                <FontAwesomeIcon icon={route.icon} />
                <span>{route.title}</span>
              </div>
            ))}
          </div>

          <User user={user} togglePopup={this.togglePopup} />
        </div>
        {isShowPopup ? <Popup user={user} /> : null}
      </>
    );
  }
}
