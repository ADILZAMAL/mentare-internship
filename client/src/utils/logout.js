export default function logout(props){
    localStorage.clear();
    props.history.push('/home')
}