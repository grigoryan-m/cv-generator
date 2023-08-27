# Free CV generator!

Written in pure javascript.

Used libraries:
<ul>
  <li><a href="https://github.com/eKoopmans/html2pdf.js">html2pdf.js</a></li>
</ul>

No design for index page, bad design for CV itself. That's not a serious project, i'm just practising my frontend skills.

All the data is transfered through GET parameters.

Output pdf looks low-quality if zoomed in. That's because html2pdf converts html to canvas, then to image and only then to pdf.
