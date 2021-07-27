function callUpcomingCard() {
  var card = `
  <div class="col-lg-6 col-md-6 col-sm-12 col-12">
  <div class="row m-2 shadow-lg rounded">
      <div class="col-5 m-auto"> <img
              src="https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?size=626&ext=jpg"
              class="card-img-top rounded-top" alt="..."></div>
      <div class="col-7 w-100">
          <div class="w-100 p-2">
              <h5 class="card-title mb-0 pb-0">Shirt</h5>
              <p class="card-text mt-0 mb-2"><small>Abc Shop</small></p>

              <!-- Price -->
              <div class="w-100 d-flex">
                  <p class="w-25 p-0 mr-3 text-grey"> <del>Rs 85000</del> </p>
                  <p class="w-50  p-0 m-0 text-price"> <b>Rs 75000</b> </p>
              </div>


              <!-- Offer timer -->
              <div class="d-flex w-100 align-items-center my-2">
                  <div class="flex-wrap mr-3">
                      <p class="my-auto"><small><b>offer ends in:</b> </small></p>
                  </div>
                  <div class="flex-wrap  px-1 default-color font-xs">
                      <p class="d-flex align-items-center justify-content-center p-0 m-0">
                          <small><b>5</b></small>
                      </p>
                      <p class="d-flex p-0 m-0"><small><b>Hour</b></small></p>
                  </div>
                  <div class="flex-wrap  px-1 default-color font-xs">
                      <p class="d-flex align-items-center justify-content-center p-0 m-0">
                          <small><b>15</b></small>
                      </p>
                      <p class="d-flex p-0 m-0"><small><b>Min</b></small></p>
                  </div>
                  <div class="flex-wrap px-1 default-color font-xs">
                      <p class="d-flex align-items-center justify-content-center p-0 m-0">
                          <small><b>8</b></small>
                      </p>
                      <p class="d-flex p-0 m-0"><small><b>Sec</b></small></p>
                  </div>
              </div>

              <!-- Cart -->
              <div class="row">
                  <div class="col-lg-7 col-md-12 col-sm-12 col-12 ">
                      <a href="#"
                          class="btn rounded-pill default-bg-color text-light d-flex  align-items-center justify-content-center w-100 m-0 px-2">
                          <small class="p-0 d-flex align-items-center ">Add to
                              cart</small>
                          <i class="fas fa-shopping-cart ml-1"></i></a>
                  </div>
                  <div class="col-lg-5 col-md-12 col-sm-12 col-12">
                      <p class="default-color text-center"><small>Left item: 10</small></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  `;

  return card;
}
