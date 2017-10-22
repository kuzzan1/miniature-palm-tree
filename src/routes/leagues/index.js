/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import React from 'react';
import Leagues from './Leagues';
import Layout from '../../components/Layout';

async function action({ params, fetch }) {
  var date = params.date ? params.date : new Date().toISOString().slice(0,10);
  const json = await fetch('/data/fixtures/'+date);
    return {
      chunks: ['leagues'],
      title: 'Leagues',
      component: (
        <Layout>
          <Leagues leagues={json} date={date}/>          
        </Layout>
      ),
    };
}

export default action;
