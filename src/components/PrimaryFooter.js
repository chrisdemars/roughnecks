import React from 'react';

const PrimaryFooter = () => {
  return (
    <section className="primary-footer-wrapper">
      <div className="wrapper">
        <div className="hours-section">
          <h3>Hours</h3>
          <table>
            <tr>
              <th>Sun</th>
              <td>Closed</td>
            </tr>
            <tr>
              <th>Mon</th>
              <td>Closed</td>
            </tr>
            <tr>
              <th>Tue</th>
              <td>10:00 AM - 7:00 PM</td>
            </tr>
            <tr>
              <th>Wed</th>
              <td>10:00 AM - 7:00 PM</td>
            </tr>
            <tr>
              <th>Thu</th>
              <td>10:00 AM - 7:00 PM</td>
            </tr>
            <tr>
              <th>Fri</th>
              <td>10:00 AM - 7:00 PM</td>
            </tr>
            <tr>
              <th>Sat</th>
              <td>8:00 AM - 2:00 PM</td>
            </tr>
          </table>
        </div>
        <div className="location-section">
          <h3>Location</h3>
          <address>
            19163 Merriman <br></br>Livonia, MI 48152
          </address>
        </div>
        <div className="connect-section">
          <h3>Connect</h3>
          <ul>
            <li>
              <i class="fas fa-mobile-alt fa-1x">
                <span>
                  <a href="tel:1-313-757-3731">(313) 757-3731</a>
                </span>
              </i>
            </li>
            <li>
              <i class="far fa-envelope">
                {' '}
                <span>roughnecksbarbershop@gmail.com</span>
              </i>
            </li>
            <li>
              <i class="fab fa-facebook-square">
                <span>
                  <a href="https://www.facebook.com/roughnecksbarbershop">
                    Facebook
                  </a>
                </span>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PrimaryFooter;

// Sun
//     Closed
// Mon
//     Closed
// Tue
//     10:00 AM - 7:00 PM
// Wed
//     10:00 AM - 7:00 PM
// Thu
//     10:00 AM - 7:00 PM
// Fri
//     10:00 AM - 7:00 PM
// Sat
//     8:00 AM - 2:00 PM
