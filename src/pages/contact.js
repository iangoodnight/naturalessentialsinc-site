import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import contactStyles from './contact.module.scss';

const Contact = () => {
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
            >
              <input type="hidden" name="form-name" value="Contact" />
              <label htmlFor="name">Name:</label>
              <br />
              <input type="text" id="name" name="name" />
              <br />
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" id="email" name="email" />
              <br />
              <label htmlFor="subject">Subject:</label>
              <br />
              <input type="text" id="subject" name="subject" />
              <br />
              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message" rows="20" />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
