import Link from 'next/link';
import React from 'react';

// interface IFResultItem {
//   prop: any;
// }

function ResultItem() {
  return (
    <div className="result-item">
      <Link href="/item-detail" passHref>
        <div>* -- Result Item(s) (link)</div>
      </Link>
    </div>
  );
}

export default ResultItem;
