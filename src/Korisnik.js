
const korisnik =  async(inputValue) => {
const user = {
    avatar_url:'',
    name:'',
    location:'',
    bio:''
  }
const response = await fetch(`https://api.github.com/users/${inputValue}`)
                .then((response) => response.json())
                .catch(error => console.error(error));

user.avatar_url = response.avatar_url;
user.name = response.name;
user.location = response.location;
user.bio = response.bio;


return user;
}
export default korisnik;