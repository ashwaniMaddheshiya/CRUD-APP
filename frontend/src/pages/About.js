import React from 'react'

const About = () => {
  return (
    <div style={{
      backgroundColor:"#cf65cfd1",
      border:"1px solid blue",
      borderRadius:"4px",
      textAlign:"center",
      height:"200px",
      margin:"100px",
      fontSize:"25px"
    }}>
     <h3 style={{marginTop:"0px"}}> Basic CRUD web application.</h3>
      This is a simple User Managment System web app. In this you can store the users with their name, contact, and email.
      You can Modify also whenever you want by clicking on the edit button. The user can be deleted also by clicking on delete button.

    </div>
  )
}

export default About