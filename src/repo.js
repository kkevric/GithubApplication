import { API_BASE_URL } from "./constants";

const repo =  async(inputValue) => {
    const repo = [];
    const response = await fetch(`${API_BASE_URL}${inputValue}/repos`)
                    .then((response) => response.json())
                    .catch(error => console.error(error));
 
    for (const repository of response) {
        // const oneRepo = {
        //     id: '',
        //     name: ''
        // };
        // oneRepo.id = repository.id;
        // oneRepo.name = repository.name;
        // repo.push(oneRepo);

        repo.push({
            id: repository.id,
            name: repository.name
        })
    }

    return repo;

    

    
    
    }
    export default repo;