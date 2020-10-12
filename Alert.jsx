import React from 'react';

function Alert(){
    return<>
    <div className="alert alert-success alert-dismissible fade show d-none" id="alrt" role="alert">
  <strong>Message!</strong> Your Form has been submitted.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
    </>
}

export default Alert;