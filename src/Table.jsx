

const Table =({user,repo,handleClick})=>{

    return(
        <div className="container" >

            <img
                src={user.avatar_url}
                alt=""
                width={30}
                height={30}
                className="d-inline-block align-top me-2"
                        />
            
        <p>{user.name}</p>
        <p>BIO:{user.bio}</p>
        <p>LOCATION:{user.location}</p>
        <p>REPOSITORIES:</p>
        <ul className="list-group">
            {repo.map((onerepo) => (

                 <li key={onerepo.id} className="list-group-item">{onerepo.name}</li>
            ))}
           
           
        </ul>
        <button className="btn btn-primary" onClick={handleClick}>Reset</button>


        </div>
    )


}
export default Table;