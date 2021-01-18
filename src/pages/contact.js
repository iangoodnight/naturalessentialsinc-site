import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import Modal from '../components/modalAlert.js';
import contactStyles from './contact.module.scss';

const endpoints = {
  contact: '/.netlify/functions/sendEmail',
};
const axios = require('axios');

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const statesToUpdate = {};
    statesToUpdate[name] = value;
    this.setState(statesToUpdate);
  };

  handleSubmit = e => {
    let { name, email, subject, message } = this.state;
    let data = { name, email, subject, message };
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        this.handleError();
      } else {
        this.handleSuccess();
      }
    });
    e.preventDefault();
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
      loading: false,
      error: false,
    });

    this.showModal();
  };

  handleError = msg => {
    console.log('handle error');
    this.setState({
      error: true,
      msg,
    });
  };

  render() {
    return (
      <Layout>
        <Metadata title="Contact" description="Contact us" />
        <div>
          <h1 className={contactStyles.contact}>Contact us</h1>
          <div className={contactStyles.addressCard}>
            <div className={contactStyles.addressHead}>
              <h2>Primary distribution/sales</h2>
            </div>
            <div className={contactStyles.addressBody}>
              <p>
                <span>115 Lena Drive, Aurora, OH 44202</span>
              </p>
              <p>Phone: +1.3305628022</p>
              <p>
                Sales email:{' '}
                <a
                  href="mailto:bryan@naturalessentialsinc.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  bryan@naturalessentialsinc.com
                </a>
              </p>
            </div>
          </div>
          <div className={contactStyles.addressCard}>
            <div className={contactStyles.addressHead}>
              <h2>Primary manufacturing</h2>
            </div>
            <div className={contactStyles.addressBody}>
              <p>
                <span>1800 Miller Parkway, Streetsboro, OH 44241</span>
              </p>
              <p>Phone: +1.3305628022</p>
            </div>
          </div>
          <div className={contactStyles.addressCard}>
            <div className={contactStyles.addressHead}>
              <h2>Get in touch</h2>
            </div>
            <div className={contactStyles.addressBody}>
              <form
                name="Contact"
                method="POST"
                data-netlify="true"
                onSubmit={this.handleSubmit}
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="Contact" />
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label htmlFor="subject">Subject:</label>
                <br />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={this.state.subject}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <label htmlFor="message">Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="20"
                  value={this.state.message}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>
              {this.state.error
                ? this.state.msg
                : 'Thank you for your submission!'}
            </p>
          </Modal>
        </div>
      </Layout>
    );
  }
}

export default Contact;
