document.addEventListener('DOMContentLoaded', function () {
    const button_element = document.getElementById('done');

    button_element.addEventListener('click', () =>{

        const data = [document.getElementById('name').value, document.getElementById('phone').value, document.getElementById('email').value, document.getElementById('portfolio').value, document.getElementById('summary').value];

        let url="file:///home/mishpa/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B/cv-generator/src/cv.html?name=" + data[0] + "&con1=" + data[1] + "&con2=" + data[2] + "&con3=" + data[3] + "&sum=" + data[4];
        const link = document.getElementById('link');
        link.href = url;
    });

});
