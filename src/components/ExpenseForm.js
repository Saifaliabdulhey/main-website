import React, { Component } from 'react'
import 'react-dates/initialize';
import moment from 'moment'


export class ExpenseForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description :'',
            kind: props.expense ? props.expense.kind :'',
            desktop: props.expense ? props.expense.desktop :'',
            img: props.expense ? props.expense.img :'',
            ram: props.expense ? props.expense.ram :'',
            graphics: props.expense ? props.expense.graphics :'',
            display: props.expense ? props.expense.display :'',
            storage: props.expense ? props.expense.storage :'',
            op: props.expense ? props.expense.op :'',
            motherboard: props.expense ? props.expense.motherboard :'',
            img1: props.expense ? props.expense.img1 :'',
            img2: props.expense ? props.expense.img2 :'',
            img3: props.expense ? props.expense.img3 :'',
            youtube: props.expense ? props.expense.youtube :'',
            note: props.expense ? props.expense.note :'',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            // createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: true,
            error: '',
        }
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    onKindChange = (e) => {
        const kind = e.target.value.toLowerCase();
        this.setState(() => ({kind}));
    }

    onDesktopChange = (e) => {
        const desktop = e.target.value.toLowerCase();
        this.setState(() => ({desktop}));
    }

    onImgChange = (e) => {
        const img = e.target.value;
        this.setState(() => ({img}));
    }

    onCpuChange = (e) => {
        const cpu = e.target.value;
        this.setState(() => ({cpu}));
    }

    onRamChange = (e) => {
        const ram = e.target.value;
        this.setState(() => ({ram}));
    }
    onGraphicsChange = (e) => {
        const graphics = e.target.value;
        this.setState(() => ({graphics}));
    }
    onDisplayChange = (e) => {
        const display = e.target.value;
        this.setState(() => ({display}));
    }
    onStorageChange = (e) => {
        const storage = e.target.value;
        this.setState(() => ({storage}));
    }
    onOpChange = (e) => {
        const op = e.target.value;
        this.setState(() => ({op}));
    }
    onMotherboardChange = (e) => {
        const motherboard = e.target.value;
        this.setState(() => ({motherboard}));
    }
    onImg1Change = (e) => {
        const img1 = e.target.value;
        this.setState(() => ({img1}));
    }
    onImg2Change = (e) => {
        const img2 = e.target.value;
        this.setState(() => ({img2}));
    }
    onImg3Change = (e) => {
        const img3 = e.target.value;
        this.setState(() => ({img3}));
    }
    onYoutubeChange = (e) => {
        const youtube = e.target.value;
        this.setState(() => ({youtube}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
         this.setState(() => ({amount})); 
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}));
        }
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calanderFocused: focused}));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please provide Name and Price'}));
        }else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                kind: this.state.kind,
                desktop: this.state.desktop,
                ram: this.state.ram,
                graphics: this.state.graphics,
                display: this.state.display,
                storage: this.state.storage,
                op: this.state.op,
                motherboard: this.state.motherboard,
                img1: this.state.img1,
                img2: this.state.img2,
                img3: this.state.img3,
                cpu: this.state.cpu,
                youtube: this.state.youtube,
                amount: parseFloat(this.state.amount, 10) * 100,
                // createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
  render() {
    return (
          
          <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
              <input
              type="text"
              placeholder="Name"
              className="text-input"
              autoFocus
              value= {this.state.description}
              onChange={this.onDescriptionChange}
              />

              <input
              type="text"
              placeholder="Type, Laptop, Desktop, Mobile ..."
              className="text-input"
              autoFocus
              value= {this.state.kind}
              onChange={this.onKindChange}
              />

              <input
              type="text"
              placeholder="Type of the Prodect"
              className="text-input"
              autoFocus
              value= {this.state.desktop}
              onChange={this.onDesktopChange}
              />


              <input
              type="text"
              placeholder="Brand Img URL"
              className="text-input"
              autoFocus
              value= {this.state.img}
              onChange={this.onImgChange}
              />

              <input
              type="text"
              placeholder="CPU"
              className="text-input"
              autoFocus
              value= {this.state.cpu}
              onChange={this.onCpuChange}
              />

              
              <input
              type="text"
              placeholder="RAM"
              className="text-input"
              autoFocus
              value= {this.state.ram}
              onChange={this.onRamChange}
              />
              
              <input
              type="text"
              placeholder="Graphics Cart"
              className="text-input"
              autoFocus
              value= {this.state.graphics}
              onChange={this.onGraphicsChange}
              />
              
              <input
              type="text"
              placeholder="Display"
              className="text-input"
              autoFocus
              value= {this.state.display}
              onChange={this.onDisplayChange}
              />
              
              <input
              type="text"
              placeholder="Storage"
              className="text-input"
              autoFocus
              value= {this.state.storage}
              onChange={this.onStorageChange}
              />
              
              <input
              type="text"
              placeholder="OP"
              className="text-input"
              autoFocus
              value= {this.state.op}
              onChange={this.onOpChange}
              />

              <input
              type="text"
              placeholder="Motherboard"
              className="text-input"
              autoFocus
              value= {this.state.motherboard}
              onChange={this.onMotherboardChange}
              />
              <input 
              type="text"
              placeholder="product image 1"
              className="text-input"
              autoFocus
              value= {this.state.img1}
              onChange={this.onImg1Change}
              />
              <input
              type="text"
              placeholder="product image 2"
              className="text-input"
              autoFocus
              value= {this.state.img2}
              onChange={this.onImg2Change}
              />
              <input
              type="text"
              placeholder="product image 3"
              className="text-input"
              autoFocus
              value= {this.state.img3}
              onChange={this.onImg3Change}
              />

              <input
              type="text"
              placeholder="Youtube URL"
              className="text-input"
              autoFocus
              value= {this.state.youtube}
              onChange={this.onYoutubeChange}
              />

              <input 
              type="text"
              className="text-input"
              placeholder="Price"
              value={this.state.amount}
              onChange={this.onAmountChange}
              />

    
              

              <textarea
              className="textarea"
              placeholder="Add specifecations to the product (Optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
              >    
              </textarea>

           <div className="extra-changes">
             <button className="button btn">Save Product</button>
             </div>
          </form>
    )
  }
}

export default ExpenseForm