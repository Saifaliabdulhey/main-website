import React, { Component } from 'react'
import { connect } from 'react-redux';
import search from '../images/search.png'
import createHistory from 'history/createBrowserHistory';
import Slider from './Slider';
import { setTextFilter, setKindFilter, setClassifiedFilter, sortByAmount,sortByDate, setEndDate, setStartDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
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
        this.props.setKindFilter('desktop');
    }


    componentDidMount() {
        this.props.setKindFilter('desktop');
        this.props.setTextFilter('');
      }

    onSortChange = (e) => {
        if(e.target.value === 'date') {
            this.props.sortByDate(e.target.value);
            this.props.setKindFilter('desktop');
            this.props.setTextFilter('');
        }else if(e.target.value === 'intel') {
            this.props.setTextFilter('intel');
        }
        else if(e.target.value === 'amd') {
            this.props.setTextFilter('amd');
            this.props.setKindFilter('');
        } else if(e.target.value === 'm.b') {
            this.props.setTextFilter('m.b');
        } else if(e.target.value === 'ram') {
            this.props.setTextFilter('ram');
        } else if(e.target.value === 'graphics') {
            this.props.setTextFilter('graphics');
        } else if(e.target.value === 'storage') {
            this.props.setTextFilter('storage');
        } else if(e.target.value === 'keyboard') {
            this.props.setTextFilter('keyboard');
        }else if(e.target.value === 'mouse') {
            this.props.setTextFilter('mouse');
        }else if(e.target.value === 'case') {
            this.props.setTextFilter('case');
        }else if(e.target.value === 'cooler') {
            this.props.setTextFilter('cooler');
        }else if(e.target.value === 'cases') {
            this.props.setTextFilter('cases');
        }

    }
  render() {
    return (
        <div>
            <div className="content-container">
            <div className="input-group">
            <div className="input-group__item">
            <img className="search_img" src={search}/>
            <input 
            className="search-input" 
            placeholder="Search for Desktop" 
            type='text' 
            value={this.props.filters.text} 
            onChange={this.onTextChange}/>
            </div>

            <div className="input-group__item">
            <select className="select" onChange={this.onSortChange}>
            <option className="selected" value="date">All</option>
            <option value="intel">intel</option>
            <option value="amd">AMD</option>
            <option value="m.b">M.B</option>
            <option value="ram">Rams</option>
            <option value="graphics">Graphics Carts</option>
            <option value="storage">Hard Disk Storage</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="cooler">Liquid cooler</option>
            <option value="cases">Cases</option>
            </select>
            </div>

            <div className="input-group__item">
            </div>
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
            setClassifiedFilter: (classified) => dispatch(setClassifiedFilter(classified)),
            sortByDate: () => dispatch(sortByDate()),
            sortByAmount : () => dispatch(sortByAmount()),
            setStartDate: (startDate) => dispatch(setStartDate(startDate)),
            setEndDate: (endDate) => dispatch(setEndDate(endDate))
        })
        export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);