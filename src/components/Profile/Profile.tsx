const Profile = (fName, lName, imgUrl) => {
	let userObj = {
		firstName: fName,
		lastName: lName,
		imageUrl: imgUrl
	}
	return(
		<>
			<div className="name">
				{fName + " " + lName[0]}
			</div>
			<img className="pic" src={imgUrl} alt=""/>
		</>
		)
}

export {Profile}