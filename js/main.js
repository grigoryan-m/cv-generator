document.addEventListener('DOMContentLoaded', function () {
    const button_element = document.getElementById('done');

    button_element.addEventListener('click', () =>{

        // First few sections data (GET parameters)
        const data = [document.getElementById('name').value, document.getElementById('phone').value, document.getElementById('email').value, document.getElementById('portfolio').value, document.getElementById('summary').value];
        // Generating link with first sections data
        let url="src/cv.html?name=" + data[0] + "&con1=" + data[1] + "&con2=" + data[2] + "&con3=" + data[3] + "&sum=" + data[4];    
        
        // Getting all the data from skills inputs
        let skills = document.getElementsByClassName('skill');
        
        for(let i = 0; i < skills.length; i++){
          url += "&skill" + (i+1).toString() + "=" + skills[i].value;  
        }
        // Adding career and expierence, languages to url
        url += "&exp=" + document.getElementById("career").value + "&lang=" + document.getElementById("languages").value;
        // Changing href of <a> to our generated link
        const link = document.getElementById('link');
        link.href = url;
    });

});
