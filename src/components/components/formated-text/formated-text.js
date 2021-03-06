import React from 'react';
import './formated-text.scss';
import {
  GitHub as GithubIcon,
  Calendar as CalendarIcon,
  Link as LinkIcon,
  Map as MapIcon,
  AtSign
} from 'react-feather';

export default class FormatedText extends React.PureComponent {
  render() {
    const prefix = this.props.prefix || '';
    const value = this.props.value;
    const icon = this.props.icon ? <this.props.icon size={20} /> : '';
    const secondary = this.props.secondary || '';
    const breakAll = this.props.breakAll;
    let classes = ['formated-text'];
    if (breakAll) classes.push('formated-text--word-break');

    return (
      <div className={classes.join(' ')}>
        <div className="formated-text__icon">{icon}</div>
        <div className="formated-text__text">
          <div className="formated-text__main">
            <span className="formated-text__prefix">{prefix}</span>
            <span className="formated-text__value">{value}</span>
          </div>
          <span className="formated-text__secondary"> {secondary}</span>
        </div>
      </div>
    );
  }
}

// shortcut wrapper for github links.
export class Github extends React.PureComponent {
  render() {
    const value = this.props.value;

    return <FormatedText value={value} icon={GithubIcon} breakAll />;
  }
}

// shortcut wrapper for links.
export class Link extends React.PureComponent {
  render() {
    const value = this.props.value;

    return <FormatedText value={value} icon={LinkIcon} breakAll />;
  }
}

// shortcut wrapper for plain text.
export class Text extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormatedText prefix="" value={value} />;
  }
}

// shortcut wrapper for events.
export class Event extends React.PureComponent {
  render() {
    const value = this.props.value;
    const secondary = this.props.secondary;

    return (
      <FormatedText value={value} secondary={secondary} icon={CalendarIcon} />
    );
  }
}

// shortcut wrapper for Map.
export class Map extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormatedText prefix="" value={value} icon={MapIcon} />;
  }
}

// shortcut wrapper for email.
export class Email extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormatedText prefix="" value={value} icon={AtSign} breakAll />;
  }
}
