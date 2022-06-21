import React, { useState } from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import facebook1 from '../images/facebook1.png'
import instagram1 from '../images/instagram1.png'
import star from '../images/star.png'
import {FacebookShareButton, WhatsappShareButton, FacebookMessengerShareButton} from 'react-share'
import {FacebookIcon, WhatsappIcon,  FacebookMessengerIcon} from 'react-share'

function EditExpensePage(props) {
  const [isActive, setIsActive] = useState(false);
  let expenses = props.expense.filter(item => item.id === props.match.params.id)[0];
  function copy() {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsActive(current => !current);
  }
  return (
      <div className="item-content">
        <div className='content1'>
          <div className='images-container'>
            <img className='main-img' src={expenses.img1} />

            <div className="review-div">
              <p>Review</p>
              <iframe src={expenses.youtube}>
              </iframe>
            </div>
          </div>

          <div className='product_desc-container'>
            <p className='product_brand_title'></p>
            <p className='product_title'>{expenses.note}</p>
            <div className="rate_div">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
            </div>
            <div className="share_icons">
              <span></span>
              <FacebookShareButton url={window.location.href}
              quote={"Naruto Center"}
              hashing="#NarutoCenter"
              >
              <FacebookIcon logoFillColor="white" size={35} round={true}></FacebookIcon>
              </FacebookShareButton>
              <WhatsappShareButton url={window.location.href}
              quote={"Naruto Center"}
              hashing="#NarutoCenter"
              >
                <WhatsappIcon logoFillColor="black" size={35} round={true}></WhatsappIcon>
               
              </WhatsappShareButton>

              <FacebookMessengerShareButton url={window.location.href}
              quote={"Naruto Center"}
              hashing="#NarutoCenter"
              >
               <FacebookMessengerIcon logoFillColor="white" size={35} round={true}></FacebookMessengerIcon>
              </FacebookMessengerShareButton>
            
            </div>
            <p className="availablity">Availablity: <strong>In Stock</strong></p>
            <hr></hr>
            <p className="price">Price: {numeral(expenses.amount / 100).format('$0,0.00')}</p><s>$800.00</s>
            <div className="modal-buttons">
              <button className="btn-2"> Add to Crad</button>
              <button className="btn-2"> By Now</button>
            </div>
            <h3>Specifications</h3>
            <hr></hr>
            <div className="specifications">
              <li className="li"><strong>CPU: </strong>{expenses.cpu}</li>
              <li className="li"><strong>RAM: </strong>{expenses.ram}</li>
              <li className="li"><strong>GHRAPHICS: </strong>{expenses.graphics}</li>
              <li className="li"><strong>DISPLAY: </strong>{expenses.display}</li>
              <li className="li"><strong>STORAGE: </strong>{expenses.storage}</li>
              <li className="li"><strong>OP: </strong>{expenses.op}</li>
            </div>
            <hr></hr>

          </div>
        </div>
    </div>
  )
}

const mapStateToPraps = (state) => ({
  expense: state.expenses
})
export default connect(mapStateToPraps)(EditExpensePage)