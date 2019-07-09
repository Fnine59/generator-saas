import React, { PureComponent } from 'react';
import KOS from 'kos-core';
import { object, func } from 'prop-types';
import { page } from '@alipay/kos-wrapper-pc';
import model from './model';
import spmConfig from './spm.config';
import './style.less';

@page({ model, spmConfig })
class Index extends PureComponent {
  static propTypes = {
    userInfo: object,
    dispatch: func,
  }

  render() {
    const { userInfo } = this.props;

    return (
      <div styleName="normal">
        {JSON.stringify(userInfo, null, 2)}
        <div styleName="nest">嵌套写法</div>
        <div styleName="mixin-a">MIXIN</div>   
        <div styleName="operator">运算</div>       
        <div styleName="function">function</div>
        <div styleName="animation">animation</div>

      </div>
    );
  }
}

export default KOS.Provider.bind(this, Index);
