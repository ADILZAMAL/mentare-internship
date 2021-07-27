export default function(role){
    console.log(role)
    const user = JSON.parse(localStorage.getItem('user'))
    if(user && user.accessToken && user.role.name === role)
        return true;

    return false;
}