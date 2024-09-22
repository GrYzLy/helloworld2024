const Profile = props =>
(
    <div>
      <div><h2>Name: {props.user.name}</h2></div>
      <div><img src={props.user.image} /></div>
      <div>Age: {props.user.age}</div>
    </div>
)

export default Profile