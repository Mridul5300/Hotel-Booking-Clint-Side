

const Table = ({booking,handleCancel}) => {
     const {_id, room_images,email,date,name} = booking;


     

     const handleupdate = (event) => {
          
          event.preventDefault();
          // console.log('Updated Date:', date);
          // const currentDate = event.target.date.check;
          const form = event.target.closest('tr');
    const updatedDate = form.querySelector('input[name="date"]').value;
          console.log(updatedDate);
          
               // const form = event.target; // Get the form element from the event
               // const date = form.date.value; // Access form input named 'date'
               // console.log('Date:', date); // Log the date value
          
          // send data in server 
          fetch(`http://localhost:5000/bookings/${_id}`, {
               method: 'PUT',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({ date:updatedDate}), 
             })
          .then(res=> res.json())
          .then(data => {
               console.log(data);
               if(data.modifiedCount > 0) {
                    // updatestate
                    console.log('Date updated successfully');
               }
          })
     }
     return (       
          
     
                    <tr>
                         <th>
                                   </th>
                                   <td>
                                        <div className="flex items-center gap-3">
                                             <div className="avatar">
                                                  <div className="rounded-md w-24 h-24">
                                                       <img src={room_images} />
                                                  </div>
                                             </div>
                                             <div>
                                                  {name}
                                             </div>
                                        </div>
                                   </td>
                                   <td>
                                        {email}
                                   </td>
                                   <td><input className="border-2 p-2" name="date" type="date" defaultValue={date} /></td>
                                   <th>
                                        <button onClick={() => handleCancel (_id)} className="btn btn-ghost btn-xs">Cancel</button>
                                        <button onClick={(event) => handleupdate (event,_id)} className="btn btn-ghost btn-xs">Update Date</button>
                                   </th>
                    </tr>
               
                    
                    
     );
};

export default Table;