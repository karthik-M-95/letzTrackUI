import React from "react";

function Footer(){


    return(
        <div className="footer row ">
            <div className="col-xs-5 col-md-6 textStyle" >
                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-xs-6 col-md-6">
            <h6 className="text-uppercase mb-4 font-weight-bold footerp">Contact</h6>
            <p className="footerp"> New York, NY 10012, US</p>
            <p className="footerp"><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p className="footerp"><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p className="footerp"><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
            
        </div>
    )
}

export default Footer;