import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../index.css'
function Hi (){
return(
    <>
    <div className="container-fluid">


    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://cdn.create.vista.com/api/media/small/93315332/stock-photo-meditating-girl-on-sea-background" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80" class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</div>
    </>
)
}
export default Hi