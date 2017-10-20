import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

class SubscribeForm extends Component {
  state = {
    status: null,
    msg: null,
    loading: false,
  };

  fetchAsync = async url => {
    let res;
    try {
      res = await fetch(url, {
        method: 'POST',
        param: 'c',
      });
      console.log(res.json());
      if (res.ok) return await res.json();
    } catch (e) {
      console.log(e);
    }
    return res;
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      !this.emailInput.value ||
      this.emailInput.value.length < 5 ||
      this.emailInput.value.indexOf('@') === -1
    ) {
      this.setState({
        status: 'error',
      });
      return;
    }

    const email = encodeURIComponent(this.emailInput.value);
    const url = `https://bsblog.us1.list-manage.com/subscribe/post-json?u=a4adb171c6058972873cef30b&id=71cbf16171&EMAIL=${email}`;

    this.fetchAsync(url);
  };

  render() {
    const { messages } = this.props;
    const { status } = this.state;
    return (
      <div className={styles.subscribe_form}>
        <form
          action="https://bsblog.us1.list-manage.com/subscribe/post?u=a4adb171c6058972873cef30b&amp;id=71cbf16171"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll" className={styles.subscribe_form_field}>
            <input
              ref={input => {
                this.emailInput = input;
              }}
              type="email"
              name="EMAIL"
              className={styles.subscribe_form_input}
              id="mce-EMAIL"
              placeholder="Ваш e-mail"
              required
            />
          </div>
          {status === 'error' && (
            <p style={styles.error} dangerouslySetInnerHTML={{ __html: messages.error }} />
          )}
          <div className={styles.inputhd} aria-hidden="true">
            <input
              type="text"
              name="b_a4adb171c6058972873cef30b_71cbf16171"
              tabIndex="-1"
              value=""
            />
          </div>
          <div>
            <input
              type="submit"
              value="Подписаться"
              name="subscribe"
              id="mc-embedded-subscribe"
              className={styles.subscribe_form_btn}
              onClick={this.onSubmit}
            />
          </div>
          {status === 'success' && (
            <p style={styles.success} dangerouslySetInnerHTML={{ __html: messages.success }} />
          )}
        </form>
      </div>
    );
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.string,
  }),
};

SubscribeForm.defaultProps = {
  messages: {
    success: 'Спасибо! Проверьте почту',
    error: 'Таких адресов не бывает',
  },
};

export default SubscribeForm;
