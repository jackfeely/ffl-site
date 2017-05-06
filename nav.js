let pagesHtml =
  `<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="../index.html">FFL</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="../index.html">HOME</a></li>
        <li><a href="who-we-are.html">WHO WE ARE</a></li>
        <li><a href="what-we-do.html">WHAT WE DO</a></li>
        <li><a href="events-index.html">EVENTS</a></li>
        <li><a href="get-involved.html">GET INVOLVED</a></li>
        <li><a href="donate.html">DONATE</a></li>
        <li><a href="blog-index.html">BLOG</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" >
        <li>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
        <li>
          <form class="navbar-form navbar-left">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                 </button>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>
  </nav>`;

let homeHtml =
  `<nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.html">FFL</a>
      </div>
      <ul class="nav navbar-nav">
        <li><a href="index.html">HOME</a></li>
        <li><a href="pages/who-we-are.html">WHO WE ARE</a></li>
        <li><a href="pages/what-we-do.html">WHAT WE DO</a></li>
        <li><a href="pages/events-index.html">EVENTS</a></li>
        <li><a href="pages/get-involved.html">GET INVOLVED</a></li>
        <li><a href="pages/donate.html">DONATE</a></li>
        <li><a href="pages/blog-index.html">BLOG</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right" >
        <li>
          <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li>
          <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
        <li>
          <form class="navbar-form navbar-left">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search">
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                  <i class="glyphicon glyphicon-search"></i>
                 </button>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>
  </nav>`;

$(document).ready(function() {
  $('.pages-navbar').html(pagesHtml);
});


$(document).ready(function() {
  $('.home-navbar').html(homeHtml);
});
