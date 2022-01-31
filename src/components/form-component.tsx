import Link from 'next/link';
import React from 'react';

// interface IFFormComponent {
//   prop: any;
// }

function FormComponent() {
  return (
    <div className="form-component">
      <div>
        - Form Component (conditional inputs for Login/Register. See Figma)
      </div>
      <Link href="/user-dashboard" passHref>
        <button type="button">
          Submit register/login (link to user dashboard)
        </button>
      </Link>
    </div>
  );
}

export default FormComponent;
