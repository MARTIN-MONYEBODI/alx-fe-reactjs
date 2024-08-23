const UserProfile (props){

    const UserProfile = { name: Martin, age: 23, bio: Developer}
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

export default UserProfile