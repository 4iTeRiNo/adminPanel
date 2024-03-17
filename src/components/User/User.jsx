import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './User.scss';

export default class User extends Component {
  render() {
    const { name, surname, avatar, id } = this.props.user;
    const { togglePopup } = this.props;

    return (
      <div className="userPop">
        <div className="userFlex" key={id}>
          <div className="userInfoBlock">
            <button className="useBtn" onClick={() => togglePopup()}>
              <img width="50px" height="50px" src={avatar} />
            </button>
            <div className="userDetails">
              <span>User Account</span>
              <span>
                {name} {surname}
              </span>
            </div>
          </div>
          <button className="buttonShowPopup" onClick={() => togglePopup()}>
            <FontAwesomeIcon icon={'fa-sliders'} />
          </button>
        </div>
      </div>
    );
  }
}
