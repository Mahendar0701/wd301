// const Members = () => {
//   return <h2>Members</h2>;
// };
// export default Members;
import MemberList from "./MemberList";
import NewMember from "./NewMember";
const Members = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div>
        <h3 id="user-name" className="text-lg font-medium mb-2">
          Username: {userData.name}
        </h3>
        <h3 id="user-email" className="text-lg font-medium mb-2">
          Email-id: {userData.email}.
        </h3>
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium tracking-tight">Members</h2>
          <NewMember />
        </div>
      </div>

      <MemberList />
    </>
  );
};
export default Members;
