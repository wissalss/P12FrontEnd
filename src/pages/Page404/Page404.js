import React from "react"
import "./Page404.css"

/**
 * Creation of the 404 error page with link back to home page 
 * @returns  Error Page
 */

function Page404() {
    return ( 
        <div className = "Page_404" >
            <div class="container">
                <div class="row">	
                    <div class="col-sm-12 ">
                        <div class="col-sm-10 col-sm-offset-1  text-center">
                            <div class="four_zero_four_bg">
                                <h1 class="text-center ">404</h1>
                            
                            
                            </div>
                        
                            <div class="contant_box_404">
                                <h3 >
                                Look like you're lost !
                                </h3>
                            
                                <p className="error-p">  the page you are looking for not avaible! </p>
                                
                                <a href="/" class="link_404"> Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page404;