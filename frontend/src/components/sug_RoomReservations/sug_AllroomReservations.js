import React ,{Component} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

export default class AllroomReservations extends Component{
constructor(props){
super(props);

this.state={
    Reservations:[]
};

}

componentDidMount(){
  this.retriveReservations();
}

retriveReservations(){
axios.get("http://localhost:8280/room/getRoom").then(res=>{
  if(res.data.success){
  this.setState({
    Reservations:res.data.existingReservation
  });
  console.log(this.state.Reservations)

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

       axios.delete(`http://localhost:8280/room/deleteRoom/${id}`).then((res)=>{
      // alert("Delete successfully");
        this.retriveReservations();
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



filterData(Reservations,searchKey){

  const result = Reservations.filter((Reservation)=>
  Reservation.Name.toLowerCase().includes(searchKey)||
  Reservation.email.toLowerCase().includes(searchKey)||
  Reservation.Checking.toLowerCase().includes(searchKey)||
  Reservation.Checkout.toLowerCase().includes(searchKey)
 
  
  )
  this.setState({Reservations:result})
  }
  
  handleserchArea=(e)=>{
  const searchKey=e.currentTarget.value;
  axios.get("http://localhost:8280/room/getRoom").then(res=>{
    if(res.data.success){
    this.filterData(res.data.existingReservation,searchKey)
      
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
  <h2>All Room Reservations</h2>
  <br/>
  </div>

<div className="col-lg-3 mt-2 mb-2">


</div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Checking</th>
      <th scope="col"> Checkout</th>
      <th scope="col">Double Room</th>
      <th scope="col">Family Room</th>
      <th scope="col">Suit Room</th>
      <th scope="col"> No of Adults</th>
      <th scope="col"> No of Childeren</th>
     
    </tr>
  </thead>
  <tbody>
{this.state.Reservations.map((Reservations,index)=>(

 <tr key={index}>
 <th scope="row">{index+1}</th> 
 <td> <a href={`/reservationdetails/${Reservations._id}`}>{Reservations.Name}</a></td>


 <td>{Reservations.email}</td>
 <td>{Reservations.Checking}</td>
 <td>{Reservations.Checkout}</td>
 <td>{Reservations.NoOfDoubleRooms}</td>
 <td>{Reservations.NoOfFamilyRooms}</td>
 <td>{Reservations.NoOfSuiteRooms}</td>
 <td>{Reservations.NoOfAdults}</td>
 <td>{Reservations.NoOfChilderen}</td>


 <td>
   &nbsp; &nbsp; &nbsp; &nbsp;
   <a className="btn btn-danger" onClick={()=>this.onDelete(Reservations._id)}>
     <i className="fas fa-edit"></i>&nbsp;Delete
   </a>
   
 </td>
</tr>

))}
  </tbody>
</table>
</div>

<button className="btn btn-dark"><a href="/reserveroom" > Reserve a room </a></button>
</div>
  )

}

}