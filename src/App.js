import React from "react";

export const fetchData = () => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: ` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            background: #fff;
            font-family: "Helvetica Neue", sans-serif;
            min-height: 100vh;
            padding: 0;
            margin: 0;
          }
    
         
          h1 {
            color: #151515;
            text-align: center;
            font-size: 1.7rem;
            font-weight: 700;
            margin: 0 auto;
            margin-top: 3rem;
            width: 70%;
          }
    
          h3 {
            color: #4a69ff;
            text-align: center;
            font-size: 0.75rem;
            font-weight: 500;
            margin: 0 auto;
            margin-top: 3.3rem;
          }
    
          .social-icons {
            display: flex;
            gap: 1.5rem;
          }
    
          .social {
            display: flex;
            width: 100%;
            height: 11.5rem;
            align-items: center;
            justify-content: center;
            gap: 10rem;
          }
    
          .follow-us {
            color: var(--Navy-Blue, #293897);
            font-size: 0.75rem;
            font-weight: 400;
          }
    
          .contact {
            color: var(--Blue, #4a69ff);
            font-size: 0.75rem;
            font-weight: 400;
          }
    
          .contact-info {
            color: var(--black-text, #151515);
            font-size: 0.75rem;
            font-weight: 400;
            text-align:left;
          }
          
          .commit{
            margin-bottom: 2rem;
          }
          
    
    
          /* Responsive styles */
          @media (max-width: 768px) {
            h1 {
              font-size: 1rem;
            }
    
          
            h1 {
              font-size: 1.5rem;
              max-width: 90%;
              margin-top: 2rem;
            }
    
            h1 span {
              font-size: 1.5rem;
            }
    
            h3 {
              font-size: 1rem;
              margin-top: 2rem;
            }
    
            .social {
              display: flex;
              width: 100%;
              align-items: center;
              justify-content: center;
              gap: 4rem;
              background: rgba(74, 105, 255, 0.2);
            }
    
            .follow-us {
              color: var(--Navy-Blue, #293897);
              text-align: center;
              font-size: 0.75rem;
              font-weight: 400;
            }
    
            .social-icons {
              display: flex;
              gap: 1rem;
              margin-top: 1rem;
            }
    
            .contact {
              color: var(--Blue, #4a69ff);
              font-size: 0.75rem;
              font-weight: 400;
            }
    
            .contact-info {
              color: var(--black-text, #151515);
              font-size: 0.75rem;
              font-weight: 400;
              margin-top: 1rem;
            }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td align="center">
              <div class="container">
                <img src="https://server.testgrouple.com/wp-content/theme/assets/images/assets/images/commom/Logo.png" alt="" width="20%" />
              </div>
            </td>
          </tr>
          <tr>
            <td align="center">
              <div class="container2">
                <img src="https://server.testgrouple.com/wp-content/theme/assets/images/assets/images/kyc/laptop.png" alt="" width="30%" />
              </div>
            </td>
          </tr>
          <tr>
            <td align="center" style="color:black";>
              <h1>
                We received
                <span style="color:#4a69ff";>KYC</span> documents from (Merchant name, Company name).
              </h1>
            </td>
          </tr>
          <tr>
            <td align="center" >
              <h3 class="commit" style="color:#4a69ff";>Your Commitment to compliance is valued.</h3>
            </td>
          </tr>


       
          
              <tr  align="center"  width="100%" style="background: rgba(74, 105, 255, 0.2);">
                <td align="center" style="color:black;">
                <div  style="color:black; display: flex; width: 100%; height: 11.5rem; align-items: center; justify-content: center; gap: 5rem;">
                    <div style="text-align: center;">
                      <h4 class="follow-us" style="color: var(--Navy-Blue, #293897); font-size: 0.75rem; font-weight: 400;">Follow us on</h4>
                      <a href="https://www.linkedin.com/company/grouple/?originalSubdomain=in" target="_blank">
                        <img src="https://grouple-public-bucket.s3.ap-south-1.amazonaws.com/LinkedinLogo.png" alt="" />
                      </a>
                      <a href="https://www.instagram.com/grouple_in/?hl=en" target="_blank">
                        <img src="https://server.testgrouple.com/wp-content/theme/assets/images/assets/images/commom/instagram.png" alt="" />
                      </a>
                      <a href="https://twitter.com/Grouple_exp" target="_blank">
                        <img src="https://server.testgrouple.com/wp-content/theme/assets/images/assets/images/commom/twitter.png" alt="" />
                      </a>
                    </div>
                    <div class="contact-info" style="color:black; text-align: left;">
                      <h4 class="contact" style="color: var(--Blue, #4a69ff); font-size: 0.75rem; font-weight: 400;">For questions, reach us at</h4>
                      <p style="margin: 0;">help@grouple.in | +91 998**********</p>
                    </div>
                  </div>
                </td>
              </tr>
        
      </body>
    </html>  `,
  };

  return fetch("https://server.testgrouple.com/api/usr/testEmailTemplate", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

function App() {
  // const [entity, setEntity] = useState(null);

  const handleFetchClick = () => {
    fetchData();
  };

  return (
    <div>
      <button onClick={handleFetchClick}>Fetch Data</button>
    </div>
  );
}

export default App;