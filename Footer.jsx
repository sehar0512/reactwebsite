import React from 'react';

function Footer(){
    const year = new Date().getFullYear();
    return(
        <>
        <footer>
        <p className="pt-1">
            copyright &copy; {year}. All right reserved | Terms and condition
            </p>
        </footer>
        </>
    );
}
export default Footer;