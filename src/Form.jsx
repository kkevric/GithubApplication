const Form = ({handleSubmit}) => {
    return(
       <div className="container">

        <form onSubmit={handleSubmit}>
            <label htmlFor="text">GitHub Username:</label>
            <input type="text"  placeholder="e.g. facebook" className="form-control"/>
            <button className="btn btn-primary" >GOOOOOOOO</button>


        </form>
           
       </div>
    
    );
   
       
   }
   export default Form;