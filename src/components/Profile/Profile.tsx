import classes from "./Profile.module.scss";

const Profile = (fName, lName, imgUrl) => {
  const userObj = {
    firstName: fName,
    lastName: lName,
    imageUrl: imgUrl,
  };
  return (
    <>
      <div className={classes.frame}>
        <img className={classes.pic} src={userObj.imageUrl} alt="" />
        <div className={classes.name}>
          {userObj.firstName + " " + userObj.lastName}
        </div>
      </div>
    </>
  );
};

export { Profile };