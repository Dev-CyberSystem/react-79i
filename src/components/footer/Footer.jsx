import React, { Fragment } from "react"

export function Footer () {
  return(
    <>
<footer className="bg-secondary page-footer font-small blue pt-4 mt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <a href="https://web.rollingcodeschool.com/"><img src="https://web.rollingcodeschool.com/wp-content/uploads/2023/10/RollingCode-Logo-3.svg" alt="logo_rolling" /></a>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="bg-dark text-center p-2">© 2024 Copyright:
        <a href="https://web.rollingcodeschool.com/"> RollingCordeSchool</a>
    </div>
</footer>
</>
  );
};