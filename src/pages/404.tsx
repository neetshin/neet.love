import * as React from 'react';
import Page from '../components/page';

const NotFoundPage: React.SFC = () => (
  <Page title='お探しのページは虚無'>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Page>
);

export default NotFoundPage;
