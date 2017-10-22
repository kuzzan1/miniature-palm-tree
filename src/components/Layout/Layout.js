/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';
import Header from '../Header';
import Footer from '../Footer';
import DatePicker from '../DatePicker';
import Featured from '../Featured';
import LeagueMenu from '../LeagueMenu';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.coverStrip}></div>
        <div className={s.topNav}>
          <Header />
        </div>
        <div className={s.container3}>
          <div className={s.container2}>
            <div className={s.container1}>
              <div className={s.left}>
                <LeagueMenu />
              </div>
              <div className={s.middle} id="panel-top">
                <div className={s.parentPanel}>
                  <div className={s.row}>
                    <div className={s.col8}>
                      <DatePicker />
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.right}>
                <Featured />
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default withStyles(normalizeCss, s)(Layout);
