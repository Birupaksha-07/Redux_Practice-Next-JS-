import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="heading">All Users</div>
      <div className="container-fluid main-container">
        <div className="row user-div-main">
          <div className="col-lg-3 col-6 user-container">
            <div className="row">
              <div className="col-4 u-img-div">
                <Image
                  src="/images/man.png"
                  // layout="fill"
                  width="100"
                  height="100"
                  alt="Description of the image"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 u-text-div">
                <p>Name : Birupaksha Dey</p>
                <p>Roll: 7</p>
                <p>Class: 12</p>
                <p>Section: A</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 user-container">
            <div className="row">
              <div className="col-4 u-img-div">
                <Image
                  src="/images/man.png"
                  width="100"
                  height="100"
                  alt="Description of the image"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 u-text-div">
                <p>Name : Birupaksha Dey</p>
                <p>Roll: 7</p>
                <p>Class: 12</p>
                <p>Section: A</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 user-container">
            <div className="row">
              <div className="col-4 u-img-div">
                <Image
                  src="/images/man.png"
                  width="100"
                  height="100"
                  alt="Description of the image"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 u-text-div">
                <p>Name : Birupaksha Dey</p>
                <p>Roll: 7</p>
                <p>Class: 12</p>
                <p>Section: A</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 user-container">
            <div className="row">
              <div className="col-4 u-img-div">
                <Image
                  src="/images/man.png"
                  width="100"
                  height="100"
                  alt="Description of the image"
                  className="img-fluid"
                />
              </div>
              <div className="col-8 u-text-div">
                <p>Name : Birupaksha Dey</p>
                <p>Roll: 7</p>
                <p>Class: 12</p>
                <p>Section: A</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row"> 
          <div className="col" style={{textAlign:'center', marginTop:"20px"}}>
              <Image
              src="https://media.istockphoto.com/id/912773402/photo/sunset-on-summer-evening-with-big-sun-over-water-of-sea-vertical.jpg?s=1024x1024&w=is&k=20&c=H_j_ZRPQaTiRIDEyIZMm7rCnIYA7xUS9AJFq244x-Wo="
              height="200"
              width="300"
              // className="img-fluid"
              alt="sunset "
              style={{borderRadius:'12px'}}
              />
          </div>
        </div>

      </div>
    </>
  )
}

export default page
