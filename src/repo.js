const repo =  async(inputValue) => {
    const repo = [];
    const response = await fetch(`https://api.github.com/users/${inputValue}/repos`)
                    .then((response) => response.json())
                    .catch(error => console.error(error));
 
    for (const repository of response) {
        const oneRepo = {
            id: '',
            name: ''
        };
        oneRepo.id = repository.id;
        oneRepo.name = repository.name;
        repo.push(oneRepo);
    }

    return repo;

    

    
    
    }
    export default repo;