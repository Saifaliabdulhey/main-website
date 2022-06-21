import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import Modal from 'react-modal'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'
import AOS from "aos";
import "aos/dist/aos.css";



export class ExpenseListItem extends Component {

  constructor(props) {
    super(props)

    this.state = ({ modal: false })

  }

  openModal = () => {
    this.setState({ modal: true })
  }

  closeModal = () => {
    this.setState({ modal: false })
  }

  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
    });
  }


  render() {
    return (
      <div>
      <Link className='card-link' to={`/edit/${this.props.id}`}>
        <div className="box-body" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="box">
            <div className="glass"></div>
            <div className="content">
              <div data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="1000"
              data-aos-duration="1000" className="main"><img className="main_img" src={this.props.img1}/></div>
              <strong data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="1800"
              data-aos-duration="1800" className="brand">{this.props.img}</strong>
               <h1 data-aos="fade-left"
               data-aos-anchor="#example-anchor"
               data-aos-offset="1000"
               data-aos-duration="1000" className="title">{this.props.description}</h1>
               <h3 data-aos="fade-left"
               data-aos-anchor="#example-anchor"
               data-aos-offset="1100"
               data-aos-duration="1100">{this.props.cpu}</h3>
              <div className="price-holder"> <h2>{numeral(this.props.amount / 100).format('$0,0.00')}</h2> <s>$1,800</s></div>
            <button class="quick_button">Quick view</button>
              </div>
          </div>
        </div>
        </Link>
        <Modal
          appElement={document.getElementById('root')}
          isOpen={this.state.modal}
          onRequestClose={this.closeModal}
          closeTimeoutMS={200}
          className='modal'
          backdropClassName="my-backdrop-style"
        >
          <div  className='modal_container'>
            <div className='content1'>
              <div  className='images-container'>
                <img className='main-img' src={this.props.img1} />
                <div className='img_links'>
                  <img src={this.props.img1} />
                  <img src={this.props.img2} />
                  <img src={this.props.img3} />
                </div>
                <div className="review-div">
                  <p>Review</p>
                  <iframe src={this.props.youtube}>
                  </iframe>
                </div>
              </div>

              <div className='product_desc-container'>
                <p className='product_brand_title'></p>
                <p className='product_title'>{this.props.note}</p>
                <div className="rate_div">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                </div>
                <div className="share_icons">
                  <button><img src={facebook1} /> share</button>
                  <button><img src={instagram1} />instagram</button>
                </div>
                <p className="availablity">Availablity: <strong>In Stock</strong></p>
                <hr></hr>
                <p className="price">Price: {numeral(this.props.amount / 100).format('$0,0.00')}</p><s>$800.00</s>
                <div className="modal-buttons">
                  <button className="btn-2"> Add to Crad</button>
                  <button className="btn-2"> By Now</button>
                </div>
                <h3>Specifications</h3>
                <hr></hr>
                <div className="specifications">
                  <li className="li">{this.props.cpu}</li>
                  <li className="li">{this.props.ram}</li>
                  <li className="li">{this.props.graphics}</li>
                  <li className="li">{this.props.display}</li>
                  <li className="li">{this.props.storage}</li>
                  <li className="li">{this.props.op}</li>
                </div>
                <hr></hr>

              </div>
            </div>
            <button onClick={this.closeModal} className='btn-close'></button>
          </div>

        </Modal>
      </div>
    )
  }
}

export default ExpenseListItem;
