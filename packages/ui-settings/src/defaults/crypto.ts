// Copyright 2017-2020 @polkadot/ui-settings authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from '../types';

export const CRYPTOS: Option[] = [
  {
    info: 'sr25519',
    text: 'Schnorrkel (sr25519, recommended)',
    value: 'sr25519'
  },
  {
    info: 'ed25519',
    text: 'Edwards (ed25519, alternative)',
    value: 'ed25519'
  },
  {
    info: 'ecdsa',
    text: 'ECDSA (Non BTC/ETH compatible)',
    value: 'ecdsa'
  }
];

export const CRYPTOS_ETH: Option[] = [
  {
    info: 'ethereum',
    text: 'ECDSA (ETH compatible)',
    value: 'ethereum'
  }
];
