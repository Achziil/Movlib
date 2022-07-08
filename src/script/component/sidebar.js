class SideBar extends HTMLElement {
   connectedCallback() {
      this.render();
   }

   render() {
      this.innerHTML = `
         <div class="sidebar">
            <div class="logo-content">
               <div class="logo">
                  <a href="index.html"><i class="bx bxs-movie"></i></a>
                  <div class="logo-name"><a href="index.html">MOVLIB</a></div>
               </div>
            </div>
            <nav>
               <ul>
                  <li>
                     <form id="form">
                        <i class="bx bx-search-alt-2"><input type="search" name="search" id="search-area" placeholder="Search Your Film Here" /></i>
                     </form>
                  </li>
                  <li class="toprated">
                     <a href="#"><i class="bx bxs-trophy"></i><span>Top Rated Movies</span></a>
                  </li>
                  <li class="upcoming-movies">
                     <a href="#"><i class="bx bxs-meteor"></i><span>Upcoming Movies</span></a>
                  </li>
                  <li class="popular-movies">
                     <a href="#"><i class="bx bxs-hot"></i><span>Popular Movies</span></a>
                  </li>
               </ul>
            </nav>
         </div>`;
   }
}
customElements.define("side-bar", SideBar);
