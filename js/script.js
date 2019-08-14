function loadMenu(){
  document.querySelector('#nav-bar').innerHTML = `<nav class="colorlib-nav" role="navigation">
  <div class="top-menu">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <div id="colorlib-logo"><a href="index.html">| Livre</a></div>
        </div>
        <div class="col-md-10 text-right menu-1">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="work-grid.html">Um pouco do nosso trabalho</a></li>
            <li><a href="services.html">Serviços</a></li>
            <li><a href="about.html">Sobre</a></li>
            <li><a href="shop.html">Loja</a></li>
            <li><a href="contact.html">Contato</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>`
}
loadMenu()

function loadHeader(title) {
  document.querySelector('#header-section').innerHTML = `
  <section id="home" class="video-hero" style="height: 500px; background-image: url(images/cover_img_1.jpg);  background-size:cover; background-position: center center;background-attachment:fixed;" data-section="home">
    <div class="overlay"></div>
    <div class="display-t display-t2 text-center">
      <div class="display-tc display-tc2">
        <div class="container">
          <div class="col-md-12 col-md-offset-0">
            <div class="animate-box">
              <h2>${title}</h2>
              <p class="breadcrumbs"><span><a href="index.html">Home</a></span> <span>${title}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
} 

function loadFooter() {
  document.querySelector('#footer-section').innerHTML = `
  <footer id="colorlib-footer">
    <div class="container">
      <div class="row row-pb-md">
        <div class="col-md-3 colorlib-widget">
          <h4>Contatos</h4>
          <p>Gostamos de conversar, fale conosco</p>
          <p>
            <ul class="colorlib-social-icons">
              <li><a href="#"><i class="icon-twitter"></i></a></li>
              <li><a href="#"><i class="icon-facebook"></i></a></li>
              <li><a href="#"><i class="icon-linkedin"></i></a></li>
              <li><a href="#"><i class="icon-dribbble"></i></a></li>
            </ul>
          </p>
        </div>
        <div class="col-md-3 colorlib-widget">
          <h4>Information</h4>
          <p>
            <ul class="colorlib-footer-links">
              <li><a href="index.html"><i class="icon-check"></i> Home</a></li>
              <li><a href="services.html"><i class="icon-check"></i> Serviços</a></li>
              <li><a href="about.html"><i class="icon-check"></i> Sobre</a></li> 
              <li><a href="contact.html"><i class="icon-check"></i> Contato</a></li> 
            </ul>
          </p>
        </div>

        <div class="col-md-3 colorlib-widget"> 
        </div>

        <div class="col-md-3 colorlib-widget">
          <h4>Informações de contato</h4>
          <ul class="colorlib-footer-links"> 
            <li><a href="tel://19996899840"><i class="icon-phone"></i> +55 (19) 99689-9840</a></li>
            <li><a href="mailto:contato@pipelivre.com"><i class="icon-envelope"></i> contato@pipelivre.com</a></li>
            <li><a href="http://github.com/luisaugustomoggi"><i class="icon-location4"></i> github.com/luisaugustomoggi</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copy" style="height: 25px;">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p> 
              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              <br> 
              Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a>, <a href="http://pexels.com/" target="_blank">Pexels</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>`
}
loadFooter()