import React, { useState } from 'react';

function Contact() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    phone: ''
  });
  function inputEvent(e) {
    const { name, value } = e.target;
    setData((preVal) => {
      return ({
        ...preVal,
        [name]: value

      })
    })
  }

  function display(e) {
    e.preventDefault();
    let a = document.getElementById('alrt')
    a.classList.add('d-block');
    a.classList.remove('d-none');
    setData({
      fname: '',
      lname: '',
      email: '',
      address: '',
      city: '',
      state: '',
      phone: ''
    });
  }
  return (
    <>
      <div id="con">
        <div className="my-3 text-center">
          <h1>Contact Us</h1>
        </div>
        <div className="container mb-5 mx-auto">
          <div className="row">
            <form onSubmit={display}>
              <div className="row">
                <div className="form-group col-md-6 my-2">
                  <label for="Fname">First Name</label>
                  <input type="text" className="form-control" id="Fname" value={data.fname} name="fname" onChange={inputEvent} placeholder="Your First Name" required />
                </div>
                <div className="form-group col-md-6 my-2">
                  <label for="Lname">Last Name</label>
                  <input type="text" className="form-control" id="Lname" name="lname" value={data.lname} onChange={inputEvent} placeholder="Your Last Name" required />
                </div>

              </div>
              <div class="form-group my-2">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={data.email} onChange={inputEvent} placeholder="example@abc.com" required />
              </div>
              <div class="form-group my-2">
                <label for="Address">Address</label>
                <input type="text" className="form-control" id="Address" name="address" value={data.address} onChange={inputEvent} placeholder="Your Address" required />
              </div>
              <div class="row">
                <div class="form-group col-md-4 my-2">
                  <label for="City">City</label>
                  <input type="text" className="form-control" id="City" name="city" value={data.city} onChange={inputEvent} placeholder="Your City" required />
                </div>
                <div class="form-group col-md-3 my-2">
                  <label for="State">State</label>
                  <select id="State" className="form-control" name="state" value={data.state} onChange={inputEvent}>
                    <option selected value="punjab">Punjab</option>
                    <option value="sindh">Sindh</option>
                    <option value="balochistan">Balochistan</option>
                    <option value="kpk">KPK</option>
                  </select>
                </div>
                <div class="form-group col-md-5 my-2">
                  <label for="phone">Contact No</label>
                  <input type="text" className="form-control" id="phone" name="phone" value={data.phone} onChange={inputEvent} placeholder="Your Mobile No" required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary my-2 text-center" id="butn">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;