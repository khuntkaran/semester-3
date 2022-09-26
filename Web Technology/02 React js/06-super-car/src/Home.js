import "./App.css"
const Home = ()=>{
    return(
        <div className="container-fluid text-white" style={{backgroundColor:"black"}}>
        <div class="container about pt-3">
          <h1>
            <b>
              <span style={{color:"red"}}>KKK</span>, a pre-owned luxury car dealer deals with 24 brands
            </b>
          </h1>
  
          <p class="bbtDetails">
            KKK started in 2009 as a benchmark model for the Pre-Used, or how we
            prefer to see it as, Pre-Loved Car Brand. The mission was simple,
            direct and drove effect - delivering a new dimension of luxury while
            standardising & raising platforms for the used car market in India.
          </p>
  
          <p class="bbtDetails">
            Since our inception our primary aim has been our passion for
            delivering excellence which became our mission. YOU (our patrons) are
            the driving force behind our company and making sure you get the best
            is what we thrive on.
          </p>
  
          <h1>
            <b>MISSION</b>
          </h1>
  
          <p class="bbtDetails">
            The journey began in 16-july-2004 when KKK was founded in Mahika, India.
            Since then our mission has been to provide quality exotic cars with
            highly personalized care at a competitive price. Creating a new
            benchmark for excellence in every aspect of our business.
          </p>
        </div>
  
        <div class="container pb-5">
          <div class="row">
            <div class="col-md-5 w-auto inner">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9GgpP11NiL7z4kPaKqjf6jT6BURBeFqd52A&usqp=CAU"
                alt="..."
              />
            </div>
            <div class="col-md-7 mt-5">
              <h1>
                <b><span style={{color:"red"}}>KKK</span> SHOWROOM'S</b>
              </h1>
  
              <p class="bbtDetails">
                At <span style={{color:"red"}}>Karan K. Khunt</span> the aim has always been to dream big and achieve
                great. Welcome to our showroom's tour. Hope that you will enjoy
                your time cruising through. A little warning before you scroll
                ahead "You can check out anytime you want but you can never leave"
              </p>
            </div>
          </div>
        </div>
      </div>
    
    )
}
export default Home;