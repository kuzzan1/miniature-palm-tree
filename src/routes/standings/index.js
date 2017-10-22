/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import Standings from './Standings';
import Layout from '../../components/Layout';

async function action({ params, fetch }) {
  const json = await fetch('/data/standings/'+params.seasonId);
    return {
      chunks: ['standings'],
      title: 'Standings',
      component: (
        <Layout>
          <Standings standings={json}/>
        </Layout>
      ),
    };
}

export default action;
