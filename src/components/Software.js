import React, { Component } from 'react'
import { connect } from 'react-redux';
import search from '../images/search.png'
import createHistory from 'history/createBrowserHistory';
import { setTextFilter, setKindFilter, sortByAmount,sortByDate, setEndDate, setStartDate } from '../actions/filters';

export class AllProduct extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onKindChange = () => {
        this.props.setKindFilter('');
    }

    
    componentDidMount() {
        this.props.setKindFilter('software');
        this.props.setTextFilter('');
      }

    onSortChange = (e) => {
            if(e.target.value === 'amount') {
            this.props.sortByAmount(e.target.value)
            this.props.setTextFilter('');
            this.props.setKindFilter('');
        }else if(e.target.value === 'msi') {
            this.props.setTextFilter(e.target.value);
        }
        else if(e.target.value === 'hp') {
            this.props.setTextFilter(e.target.value);
            this.props.setKindFilter('');
        } else if(e.target.value === 'monitors') {
            this.props.setKindFilter('monitors');
            this.props.setTextFilter('');
        } else if(e.target.value === 'used') {
            this.props.setKindFilter('used');
            this.props.setTextFilter('');
        } else if(e.target.value === 'accessories') {
            this.props.setKindFilter('accessories');
            this.props.setTextFilter('');
        } else if(e.target.value === 'all in one') {
            this.props.setKindFilter('all in one');
            this.props.setTextFilter('');
        }
        else {
            if(e.target.value === 'desktop') {
                this.props.setKindFilter('desktop');
                this.props.setTextFilter('');
            }
            else {
                this.props.setKindFilter('laptop');
                this.props.setTextFilter('');
            }
        }


    }
  render() {
    return (
            <div className="content-container">
            
            <div className="input-group">
            <div className="input-group__item">
            <img className="search_img" src={search}/>
            <input 
            className="search-input" 
            placeholder="Search product" 
            type='text' 
            value={this.props.filters.text} 
            onChange={this.onTextChange}/>
            </div>

            <div className="input-group__item">
            <select className="select" onChange={this.onSortChange}>
            <option className="selected" value="date">All</option>
            <option value="amount">Sort by the price</option>
            <option value="msi">MSI</option>
            <option value="hp">HP</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="monitors">Monitors</option>
            <option value="used">Used</option>
            <option value="accessories">Accessories</option>
            <option value="all in one">All in one</option>
            </select>
            </div>

            <div className="input-group__item">
            </div>
            </div>
            </div>
        )
        }
    }
        const mapStateToProps = (state) => ({
            
                filters: state.filters,
                expenses: state.expenses
        })

        const mapDispatchToProps = (dispatch) => ({
            setTextFilter: (text) => dispatch(setTextFilter(text)),
            setKindFilter: (kind) => dispatch(setKindFilter(kind)),
            sortByDate: () => dispatch(sortByDate()),
            sortByAmount : () => dispatch(sortByAmount()),
            setStartDate: (startDate) => dispatch(setStartDate(startDate)),
            setEndDate: (endDate) => dispatch(setEndDate(endDate))
        })
        export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);


