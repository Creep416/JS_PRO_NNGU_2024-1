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
        <img className={classes.pic} src={imgUrl} alt="" />
        <div className={classes.name}>{fName + " " + lName[0]}</div>
        {(script = move((up = 0), (right = 5)))}
      </div>
    </>
  );
};

export { Profile };
