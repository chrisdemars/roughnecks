import React from 'react';

const PrimaryFooter = () => {
    return (
        <section className='primary-footer-wrapper'>
            <div className='wrapper'>
                <div className='primary-footer-section location-section'>
                    <h3>Location</h3>
                    <address>
                        19163 Merriman <br></br>Livonia, MI 48152
                    </address>
                </div>
                <div className='primary-footer-section connect-section'>
                    <h3>Connect</h3>
                    <ul>
                        <li>
                            <i className='fas fa-mobile-alt fa-1x'>
                                <span>
                                    <a href='tel:1-248-987-6961'>
                                        (248) 987-6961
                                    </a>
                                </span>
                            </i>
                        </li>
                        <li>
                            <i className='far fa-envelope'>
                                {' '}
                                <span>
                                    <a href='mailto:roughnecksbarbershop@gmail.com'>
                                        roughnecksbarbershop@gmail.com
                                    </a>
                                </span>
                            </i>
                        </li>
                        <li>
                            <i className='fab fa-facebook-square'>
                                <span>
                                    <a href='https://www.facebook.com/roughnecksbarbershop'>
                                        Facebook
                                    </a>
                                </span>
                            </i>
                        </li>
                        <li>
                            <i className='fab fa-instagram'>
                                <span>
                                    <a href='https://www.instagram.com/roughnecksbarbershop'>
                                        Instagram
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
