import React , { Component} from "react";
import "./Listings.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Card from "../../components/MyNichoShop/card/Card";
import Footer from "../../components/MyNichoShop/footer/Footer";
import Notification from "../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import PaginationComponent from "../../components/pagination/PaginationComponent";
import CountrySelector from "../../components/countryselector/CountrySelector";
import Layerednavigation from "../../components/layerednavigation/Layerednavigation";
import Rating from "../../components/rating/Rating";
import Select from 'react-select';
import Image from 'react-random-image'

class Listings extends Component {   
    state = {
        data: [],
        totalRecords:0,
        limit: 6,
        selectedOption:1,
        options : [
            { value: '1', label: 'Gallery' },
            { value: '2', label: 'View' },      
          ]
    } 
   // const [selectedOption, setSelectedOption] = useState([]); 

   handleChange = (selectedOption) => {
        //setSelectedOption(selectedOption);
        this.state.selectedOption = selectedOption.value;
        this.setState({
            selectedOption : this.state.selectedOption
        })
        console.log("selectedOption",this.state.selectedOption);
    };

    componentDidMount(){
        this.loadData(1);
    }
    loadData = (page) =>{
        console.log('page>>',page)
        axios
            .get(`https://reqres.in/api/users?page=`+page)
            .then(res => {
                const data = res.data;
                console.log('data>>>>',data)
                this.setState({
                    data: data.data,
                    totalRecords : data.total ? data.total : 0,
                    limit : data.per_page ? data.per_page : 6
                })
            });
    }
    getPaginatedData = page =>{
        this.loadData(page);
    }
    gridTemplate(props) {
        const src = props.EmployeeID + '.png';
        return (<div className='listing-image'>
           <Image className='img-fluid' width={400} height={400} />
        </ div>);
    }
    productName(props){
        return (<div className='test'>
            <h2 className="m-0 fs-5"><a className="e-link" htef="">Norton Security Deluxe 2016 - 300 Days/ 1 Device (Windows, Mac, Android or IOS)</a></h2>
            <div className="mb-2"><span className="text-black-50">Used</span></div>
        </div>);
    } 
    priceSection(props){
        return (<div className='pricesection'>
            <div className="price-remaining mb-2"><span className="font-weight-semibold">US $ 12,345.67</span> <span className="text-black-50 d-block">Buy it now</span></div>
            <div className="price-remaining"><span className="font-weight-semibold">US $ 12,345.67</span> <span className="text-black-50 d-block">0 bids</span></div>
            <div className="price-discount"><span className="text-black-50">+ $123.45 postage</span></div>
            <div><Rating /></div>
        </div>);
    }
    timeSection(props){
        return (<div className='timesection'>
            <div className="left-time">
                <span className="text-danger d-block">6d 10h left (Mon, 7:10 PM)</span>
                <span className="d-block text-black-50">From Germany</span>
            </div>             
        </div>);
    }
    render(){        
        const { data, totalRecords, limit ,selectedOption} = this.state;
        //{console.log("this.state.selectedOption",selectedOption);}
        return(
            <div className="my-nicho-shop">
                  {/* <Header /> */}
                  <Menu />
                  <div className="container-ns listing_bg bg-light py-5">
                    <div className="row">
                        <div className="col-3">
                        <Layerednavigation />  
                        </div>
                        <div className="col-9">
                            <div className="my-nicho-shop-container">
                                <div className="border rounded bg-white">
                                    <div className="d-flex p-3 border-bottom">
                                        <div className="btn-group me-auto" role="group" aria-label="First group">
                                            <button type="button" className="btn btn-outline-secondary">All listings</button>
                                            <button type="button" className="btn btn-outline-secondary">Action</button>
                                            <button type="button" className="btn btn-outline-secondary">Buy it Now</button>                            
                                        </div>
                                        <div className="dropdown small-text18 d-flex align-items-center">
                                            <div className="pe-2 text-black-50">Sort by:</div>
                                            <div className="btn btn-outline-secondary dropdown-toggle" type="button" id="best-match" data-bs-toggle="dropdown" aria-expanded="false">Best Match</div>
                                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="best-match">
                                                    <li><a className="dropdown-item" href="#">Time: ending soonest</a></li>
                                                    <li><a className="dropdown-item" href="#">Time: newly listed</a></li>
                                                    <li><a className="dropdown-item" href="#">Price: Low to High</a></li>
                                                    <li><a className="dropdown-item" href="#">Price: High to Low</a></li>
                                                    <li><a className="dropdown-item" href="#">Distance: nearest first</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown ms-4 small-text18 d-flex align-items-center">
                                            <div className="pe-2 text-black-50">View:</div> 
                                            <Select defaultValue={{ value: "1", label: "Gallery" }} options={this.state.options} onChange={this.handleChange} />
                                        </div>
                                        <div className="dropdown ms-4 small-text18 d-flex align-items-center">
                                            <div className="pe-2 text-black-50">Postage to:</div> 
                                            <CountrySelector />         
                                        </div>
                                    </div>  
                                    <div className="d-flex flex-wrap listview">
                                        {
                                            data && data.length > 0 ?
                                            data.map((item,index)=>(
                                                <div className={"border-bottom "+ (selectedOption=='1' ? 'col-12 d-flex' :'col-3 border-end')} key={item.id}>
                                                    <div className={(selectedOption=='1' ? 'p-3 col-6 col-md-4 col-lg-2' :'p-3 col-12')}>{this.gridTemplate(item)}</div>
                                                    <div className="p-3 col">
                                                        {this.productName(item)}
                                                        <div className="d-flex flex-wrap">
                                                            <div className={(selectedOption=='1' ? 'col-4' :'col-12')} >{this.priceSection(item)}</div>
                                                            <div className={(selectedOption=='1' ? 'col' :'col-12')}>{this.timeSection(item)}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) :
                                            <h4>No Data Found!!</h4>
                                        }
                                    </div>
                                    <div className="biddingNote border-bottom p-3 small-text18">*If you’ve been outbid, you can be again the high bidder in the case, if the seller cancels a bid or reduces the reserve price for example.</div> 
                                    <div className="px-3 py-4 d-flex justify-content-between align-items-center">
                                        <div className="page-result-total small-text18">Page 1 of 4</div>
                                        {totalRecords > 6 &&
                                            <PaginationComponent
                                                getAllData={this.data} 
                                                totalRecords={totalRecords}
                                                itemsCountPerPage = {limit} />
                                        }
                                        <div className="result-per-page d-flex align-items-center">
                                            <div className="pe-2 small-text18">Results per page</div>
                                            <div className="dropdown-toggle dropdown-blue px-2 small-text18" type="button" id="resultperpage" data-bs-toggle="dropdown" aria-expanded="false">20</div>
                                            <ul className="dropdown-menu dropdown-result-end" aria-labelledby="resultperpage">
                                                <li><a className="dropdown-item" href="#">30</a></li>
                                                <li><a className="dropdown-item" href="#">50</a></li>
                                            </ul>
                                        </div>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   
                <Footer />
            </div>
        );
    }
}

export default Listings;
