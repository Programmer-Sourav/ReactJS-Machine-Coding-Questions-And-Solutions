// UserPresenter.js
export default function UserPresenter({ user, handleUser }) {
  return (
    <>
      <h1>View Layer</h1>
      <h1>Username: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Profession: {user.profession}</h1>
      <h1>Bio: {user.saySomeThing}</h1>
      <button onClick={() => handleUser("Awesome Guy!")}>Update Bio</button>
    </>
  );
}
