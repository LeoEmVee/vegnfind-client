import Link from 'next/link';
import React from 'react';

// interface IFResultItem {
//   prop: any;
// }

function ResultItem() {
  return (
    <div className="result-item">
      <div>* -- Result Item(s)</div>
      <Link href="/detail" passHref>
        <p>Item details (link)</p>
      </Link>
    </div>
  );
}

export default ResultItem;
