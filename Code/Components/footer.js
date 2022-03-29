class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() { 
      this.innerHTML = `


      <div class="">    

      <!-- Footer -->
      <footer class="bg-dark text-center text-white" >
        <!-- Grid container -->
        <div class="container">
          <!-- Section: Links -->
          <section class="mt-5">
            <!-- Grid row-->
            <div class="row text-center d-flex justify-content-center pt-5">
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-capitalize font-weight-bold">
                  <a href="/Podcast/index.html" class="text-white">Home</a>
                </h6>
              </div>
              <!-- Grid column -->
    
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-capitalize font-weight-bold">
                  <a href="/Podcast/Code/AboutUs.html" class="text-white">About Us</a>
                </h6>
              </div>
              <!-- Grid column -->
    
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-capitalize font-weight-bold">
                  <a href="/Podcast/Code/PodcastEpisodes.html" class="text-white">Podcast Episodes</a>
                </h6>
              </div>
              <!-- Grid column -->
    
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-capitalize font-weight-bold">
                  <a href="/Podcast/Code/subservices/BooksGalore.html" class="text-white">Books</a>
                </h6>
              </div>
              <!-- Grid column -->
    
              <!-- Grid column -->
              <div class="col-md-2">
                <h6 class="text-capitalize font-weight-bold">
                  <a href="/Podcast/Code/subservices/OtherResources.html" class="text-white">Other Resources</a>
                </h6>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row-->
          </section>
          <!-- Section: Links -->
    
          <hr class="my-5" />
    
          <!-- Section: Text -->
          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  Bringing light to women of all backgrounds about how our overall health encompasses more than conception.
                </p>
              </div>
            </div>
          </section>
          <!-- Section: Text -->
    
          <!-- Section: Social -->
          <!-- Update Links when Podcast is running -->
          <section class="text-center mb-5">
            <a href="https://www.spotify.com/us/" class="text-white me-4" target="_blank">
              <i class="fab fa-spotify"></i>
            </a>
            <!-- Apple Podcast -->
            <a href="https://www.apple.com/apple-podcasts/" class="text-white me-4" target="_blank">
              <i class="fa fa-podcast"></i>
            </a>
            <a href="instragram.com/" class="text-white me-4" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:womengalore@womengalore.com" class="text-white me-4">
              <i class="fa fa-envelope"></i>
            </a>
          </section>
        </div>
        <!-- Grid container -->
    
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
          © 2022 Copyright: <strong>Shavone Taylor</strong>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
    </div>
    `;
}
}

customElements.define('footer-component', Footer);