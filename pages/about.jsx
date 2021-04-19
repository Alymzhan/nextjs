import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Head from 'next/head';
import { SITE_TITLE } from '../misc/constants.js';

class AboutPage extends Component {
  render() {
    return (
      <Fragment>
        <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CEWE9MYCHQ"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CEWE9MYCHQ');
          </script>
          <title> About - {SITE_TITLE}</title>
          <meta charSet='UTF-8' />
          <meta
            name='description'
            content={`Details and contact information about the ${SITE_TITLE}.`}
          />
          <meta
            name='keywords'
            content='travel plan,travel decision,thinking,roadmap,map-cy'
          />
        </Head>
        <Container fluid>
          <Row noGutters>
            <h1>About</h1>
          </Row>
          <Row noGutters>
            <h2>Overview</h2>
            <p>
              {SITE_TITLE} is a collection of cities and roadmaps. While there
              are a lot of great resources out there on city roadmaps, we've tried to maintain a
              focus on brief descriptions with usefull information and map.
            </p>
          </Row>
          <Row noGutters>
            <h2>Contact</h2>
            <p>
              If you'd like to contact us, feel free to shoot us a message on{' '}
              <a href='https://www.instagram.com/life2nomads/'>Instagram</a>. 
            </p>
          </Row>
          <Row noGutters>
            <h2>License</h2>
            <p>
              Text on this website is available under the{' '}
              <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
                Creative Commons Attribution-ShareAlike 4.0 License
              </a>. A lot of the model information has been sourced from{' '}
              <a href='https://en.wikipedia.org'>Wikipedia</a> and a link to the corresponding
              article is provided under each model when available.
            </p>
          </Row>

          <Row noGutters />
        </Container>
      </Fragment>
    );
  }
}

export default AboutPage;
