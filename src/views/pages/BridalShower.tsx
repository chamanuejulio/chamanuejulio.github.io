import React from 'react';
import GiftList from '../../components/GiftList'
import gifts from '../../store/BridalShowerGifts.json'

import './BridalShower.css';

function BridalShower() {
  return (
    <div className="bridal-shower">
      <GiftList gifts={gifts} />
    </div>
  );
}

export default BridalShower;