const Form = (props) => {

    const [newMember, setnewMember] = useState({});
}
const changeHandler = event => {
    setnewMember({ ...newMember, [event.target.name]: event.target.value });
};
const submit = event => {
    event.preventDefault();
    prop.setMembers(newMember => [...members, newMember]);
    setnewMember({ name: "", email: "",password:"" });
};