import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import styles from '../styles/Home.module.css'
import { Button, ButtonGroup } from 'react-bootstrap'

import React from 'react';
import Obfuscate from 'react-obfuscate';

function ObfuscateData() {
  return (
    <Button>


      <Obfuscate style={{ color: "white" }}
        email="brijbuilders108@gmail.com"
        headers={{
          subject: 'Hello from the Brij Builders Website',
          body: 'Thanks for contacting us! Write your message here.',
        }}
      > Email Us
      </Obfuscate>


    </Button>
  )
};


export default function Footer() {
  return (
    <footer className={styles.footer}>



      <a
        href="/"
        rel="noopener noreferrer"
      >
        <div className="my-4">
          Powered by{' '}
          <img src="logo/brij-logo-1500.png" alt="Brij Builders Logo" className={styles.logo} />
        </div>
      </a>


      <ObfuscateData />

    </footer>
  )
}


