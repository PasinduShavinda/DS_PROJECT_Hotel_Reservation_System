import React ,{Component} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

export default class AllEventReservations extends Component{
    constructor(props){
        super(props);

        this.state={
            EventReservations:[]
        };

    }

    componentDidMount(){
        this.retriveEventReservations();
    }

    retriveEventReservations(){
        axios.get("http://localhost:8280/event/getEvent").then(res=>{
            if(res.data.success){
                this.setState({
                    EventReservations:res.data.existingEvent
                });

                console.log(this.state.EventReservations)

            }
        });

    }

    onDelete= (id) =>{
    
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
    
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                axios.delete(`http://localhost:8280/event/deleteEvent/${id}`).then((res)=>{;
                    this.retriveEventReservations();
                })

            } else if (
            /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
            }
        })

    }



    filterData(EventReservations,searchKey){

        const result = EventReservations.filter((EventReservations)=>
            EventReservations.fullName.toLowerCase().includes(searchKey)||
            EventReservations.email.toLowerCase().includes(searchKey)||
            EventReservations.nic.toLowerCase().includes(searchKey)||
            EventReservations.mobileNumber.toLowerCase().includes(searchKey)||
            EventReservations.bookingDate.toLowerCase().includes(searchKey)
        )
        this.setState({EventReservations:result})       
    }
    
    handleserchArea=(e)=>{
        const searchKey=e.currentTarget.value;
        axios.get("http://localhost:8280/event/getEvent").then(res=>{
            if(res.data.success){
                this.filterData(res.data.existingEvent,searchKey)
            }
        });
    }
    

    render(){
        return(
        
            <div className="container">
                <div className="col-lg-3 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="search"
                        onChange={this.handleserchArea}>
                    </input>

                </div>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2">
                        <h2>All Event Reservations</h2>
                        <br/>
                    </div>

                    <div className="col-lg-3 mt-2 mb-2"></div>

                    <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">NIC Number</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Booking Time</th>
                        <th scope="col">No of Guests</th>
                        <th scope="col">Event Type</th>
                        <th scope="col">Event Hall</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.EventReservations.map((EventReservations,index)=>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th> 
                            <td>{EventReservations.fullName}</td>
                            <td>{EventReservations.email}</td>
                            <td>{EventReservations.nic}</td>
                            <td>{EventReservations.mobileNumber}</td>
                            <td>{EventReservations.bookingDate}</td>
                            <td>{EventReservations.bookingTime}</td>
                            <td>{EventReservations.numberOfGuests}</td>
                            <td>{EventReservations.eventType}</td>
                            <td>{EventReservations.eventHall}</td>


                            <td>
                                <a className="btn btn-warning" href={`/EditEventBook/${EventReservations._id}`}>
                                    <i className="fas fa-edit"></i>&nbsp;Edit
                                </a>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <a className="btn btn-danger" onClick={()=>this.onDelete(EventReservations._id)}>
                                    <i className="fas fa-edit"></i>&nbsp;Delete
                                </a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>

                <button className="btn btn-dark"><a href="/EventBook" > Reserve </a></button>
            </div>
        )

    }

}