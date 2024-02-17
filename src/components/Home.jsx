import React from 'react';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-09/29/thumb/featurecrop/1200X900/1696008957-6591.jpg" alt="First slide" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://5.imimg.com/data5/SELLER/Default/2023/4/299932104/SU/QF/HV/96177989/job-work-module-in-tally-500x500.webp" alt="Second slide" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://cdn-aphnm.nitrocdn.com/EvmPuNKlyDVRlEXiFehfNBKMWoksCHPM/assets/static/optimized/onlineretailhub.in/wp-content/uploads/2020/08/5e04b290811138f1933be561e61cc07c.tally-customisation-1-9.png" alt="Third slide" style={{ height: '500px' }} />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className='text-center p-3 '>
                <h1 className='font-weight-bold'> Product & Solutions<span className='text-primary '><br />When you want a solution. not another Software</span> </h1>
            </div>

            <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://softwareconnect.com/images/erp-350419?w=1500" className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Enterprise Resourse Planning(ERP) Software</h5>
              <p className="card-text">Run your entire business on one affordable and integrated software solution. Manage sales, accounts, CRM, operations, manufacturing & support on one software..</p>
              <div class="card-footer">
                            <small class="text-muted"><a href="https://dynamics.microsoft.com/en-in/erp/what-is-erp/" target='blank'>Know more</a></small>
                        </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://www.gtiaindia.org/images/blog/Tally-Prime.jpeg" className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Tally Prime Licenses & Services</h5>
              <p className="card-text">Software@Work is a 5-star Tally partner specialized in delivering Tally services for the past 27 years. Our offerings include Tally.ERP 9 Licenses, Add-Ons, Customisations, Tally Prime, Tally Mobile App, Tally on Cloud & much more.</p>
              <div class="card-footer">
                            <small class="text-muted"><a href="https://tallysolutions.com/#gref" target='blank'>Know more</a></small>
                        </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://themunim.com/wp-content/uploads/2023/11/22-11-Wed-Blog-Sub_img_3-1024x576.png" className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">GST Software Solutions</h5>
              <p className="card-text">Manage your GST compliance on cloud with our GST filing and reconciliation solutions including ClearTax & Tally.ERP 9. Generate E-invoices directly in Tally.ERP 9 and ensure a smooth transition to E-Invoicing.</p>
              <div class="card-footer">
                            <small class="text-muted"><a href="https://freetrial.mybillbook.in/Best-invoicing-software.html?utm_source=google&utm_term=gst%20invoice%20software&utm_creative=Responsive_Search_Ads&utm_campaign=MBB-Search-RestofIndia-Invoicing-Core-Mid-Dec23&utm_device=c&utm_content=gst%20invoice%20software&utm_adgroup=gst%20invoice%20software&utm_placement=&utm_medium=cpc&gad_source=1&gclid=Cj0KCQiAz8GuBhCxARIsAOpzk8zsbWGNvJXv1SsvucBL-cRsFAJ9wUyzrv1h1VDDDcdXsW1wqZrByBsaAuKUEALw_wcB" target='blank'>Know more</a></small>
                        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="container-parant">
            <div className="container mt-4">
                <h5 className="text-center mb-2" style={{ color: '#ffba00', fontWeight: 800 }}>SEE OURS</h5>
                <h1 className="text-center mb-2" style={{ fontWeight: 900 }}>Services</h1>

                <div className="row gx-4 gy-4 mt-3 mb-5 justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://www.investopedia.com/thmb/4-5pEEKsvx2z5ICcVKe29YurEyE=/6000x4000/filters:fill(auto,1)/investment-stock-market--entrepreneur-business-man-discussing-and-analysis-graph-stock-market-trading-stock-chart-concept-1131299321-58e0bfd588dd4998a03ec3d5acc60142.jpg" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Chart Assist</h3>
                                <p className="card-text fs-6"></p>
                                <h1 className="display-6">$40/hour</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://media.istockphoto.com/id/1462017933/photo/chatbot-assistant-on-smartphone-app-interface-with-artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=zwqCMvNU86dgJ0agKzUvqqZInavFSVmLVDqVTzTeayE=" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Stock Assist</h3>
                                <p className="card-text fs-6"></p>
                                <h1 className="display-6">$50/hour</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border card-third position-relative">
                            <img src="https://cdn-fglif.nitrocdn.com/pCfHVkXIvIdtNRdXYlgzPfhwTTgEnkbg/assets/static/optimized/rev-617649e/wp-content/uploads/2021/02/sip-service-assurance-as-a-service-700x408.png" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">SIP Assist</h3>
                                {/* <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.</p> */}
                                <h1 className="display-6">$70/hour</h1>
                            </div>
                            <div className="triangle"></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://th.bing.com/th/id/OIP.o1z-Kvwe6z24WO8_yHxNuAAAAA?rs=1&pid=ImgDetMain" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Fundamental<br /></h3>
                                {/* <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product .</p> */}
                                <h1 className="display-6">$80/hour</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </section>
        <div className='text-center p-3'>
      <h1 className='font-weight-bold'><span className='text-bold'>Some of our Clients</span></h1>
      <Carousel interval={1000} pause={false} wrap={true}>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://yt3.googleusercontent.com/4QU7LdZ5dmW1q_GjNslfbqhZWHBlL5fbShIdk4JTY3B0VY_VlaVe_o2Bux1VbBewo5qiTAur2H0=s900-c-k-c0x00ffffff-no-rj"
            alt="First slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.lifewire.com/thmb/yx5oJUJ4fA1TQ0h0pl9FM7Kc4Fo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/yahoo-logo-2019-879b7bed612d4bbc97065dce2a0f2d73.png"
            alt="Second slide"
            style={{ height: '300px', width: 'auto' }} // 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.livelaw.in/cms/wp-content/uploads/2017/08/Tatamotors-Customer-Care-Number.jpg"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} // 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncmuWMHpT_GcTGcGTBchBRRg-LJ3emnb4vUpXyj3YPp-SgybdSbXvgwEzztn5MPU92sU&usqp=CAU"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://www.shutterstock.com/image-vector/valencia-spain-march-29-2023-600nw-2282038799.jpg"
            alt="Third slide"
            style={{ height: '300px', width: 'auto' }} 
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="https://yt3.googleusercontent.com/4QU7LdZ5dmW1q_GjNslfbqhZWHBlL5fbShIdk4JTY3B0VY_VlaVe_o2Bux1VbBewo5qiTAur2H0=s900-c-k-c0x00ffffff-no-rj"
            alt="First slide"
            style={{ height: '300px', width: 'auto' }} // Adjust height as needed
          />
          </Carousel.Item>
      </Carousel>
    </div>
            
<hr/>
<Footer />
    </>
  );
}

export default Home;
