import React from 'react';
import Announcements from './1';
import Admissions from './2';
import InternationalCooperation from './3';

function NewsSection() {
  return (
    <div className="p-3">
      <Announcements />
      <Admissions />
      <InternationalCooperation />
    </div>
  );
}

export default NewsSection;
