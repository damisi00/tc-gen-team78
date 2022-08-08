
let businessName = document.querySelector('#business_name');
let address = document.querySelector('#address');
let registration_place = document.querySelector('#registration_place');
let registration_number = document.querySelector('#registration_number');
let registration_date = document.querySelector('#registration_date');
let country_name = document.querySelector('#country_name');
let t_c_date = document.querySelector('#t_c_date');
let previewBtn = document.querySelector('.previewBtn');

let preview = document.querySelector('.preview');

previewBtn.onclick = function(e) {
          e.preventDefault();
          let aside = document.createElement('aside');
          aside.innerHTML =`
                    <p> 
                         Welcome to our website.If you continue to browse and use this website,you are agreeing to comply
                         with and be bound by the following terms and conditions of use,which together with our privacy policy 
                         ,governs <span class = 'span_emp'>${businessName.value} </span>'s relationship with you in relation to this website. If you disagree with any
                         of these terms and conditions, please do not use our website.</p><br>
                         <p>
                         The term <span class = 'span_emp'> ${businessName.value} </span> or 'us' or 'we' refers to the owner of the website whose registered office 
                         is <span class = 'span_emp'> ${address.value} </span>.Our company registration number is <span class = 'span_emp'>${registration_number.value}</span>
                         issued at <span class = 'span_emp'>${registration_place.value}</span> on <span class = 'span_emp'>${registration_date.value}
                         </span>.The term 'you' refers to the user or viewer of our website.
                    </p><br/>
                    <p> 
                         The use of this website is subject to the following terms of use:
                    </p> <br/>
                    <ul class = 'terms'>
                         <li>
                              The content of the pages of this website is for your general information and use only.It is subject to
                              change without notice
                         </li>
                         <li>
                              This website uses cookies to monitor browsing performance.If you do allow cookies to be used,the following
                              personal information may be stored by us for use by third parties [insert_list-of-information]
                         </li>
                         <li>
                              Neither we nor any third parties provide any warranty or guarantee as to the accuracy,timeliness,performance,
                              completeness or suitability of the information and materials found or offered on this website for any
                              particular purpose.You acknowledge that such information is accurate and materials may contain inaccurrancies or
                              errors to the fullest extent permitted by law.
                         </li>
                         <li>
                              Your use of any information or materials found on this website is entirely at your own risk,for which
                              we shall not be lainle.It shall be your own responsibility to ensure that nay products,services or information  
                              available through this website meets your specific requirements.
                         </li>
                         <li>
                              The website contains materials which is owned by or licensed under to us.This material includes,but not limited to,
                              the design,layout and,look,appearance,and graphs.Reproduction is prohibited other than in accordance with 
                              the copyright notice,which forms part of this terms and conditions.
                         </li>
                         <li>
                              All trademarks reproduced in this we,which are the property of or licensed to the operator,are acknowledged on the website.
                         </li>
                         <li>
                              Unauthorized use of this we may give rise to a claim for damages and /or be a criminal offense.
                         </li>
                         <li>
                              From time to time,this website may also include links to other websites.These links are provided for your
                              convenience to provide further information.They do not  signify that we endorse the website(s). We have no responsibility   
                              for the content of the linked website(s).
                         </li>
                         <li>
                              Your use of this website and any disputes arising out of such use of this website is subject to the laws within the territory of <span class = 'span_emp'>${country_name.value}. </span>
                         </li>
                         </ul><br><br>
                         <p> Digitally Signed on : <span class = 'span_emp'> ${t_c_date.value} </span></p>
                         <p> Witnessed on : <span class = 'span_emp'>  ${t_c_date.value} </span></p>
                    `;
     preview.appendChild(aside);
      };

