import React from 'react';
import PropTypes from 'prop-types';



function Profile(props){
    
    const {
        FullName,
        bio,
        profession,
        handlName,
        children,
        
        } = props;

    return(
    <div>
        <h1 style={{color:'goldenrod'}} > {FullName}</h1>

        <div>
        <h2 style={{color:'pink'}}>Bio:</h2>
        <ul>
            {bio.map((el, i) => (
            <li key={i}>{el}</li>
            ))}
        </ul>
        </div>

        <h3 style={{color:'blue'}}>profession: {profession}</h3>

        <div>
        <button  style={{borderRadius:'12px',boxShadow:'0 5px 8px #000',backgroundColor:'white',border: '2px solid',padding:'14px 40px' ,color:'red'}} onClick={() => handlName(FullName)}>Click Here</button>
        </div>
        <br/>
        <div >{children}</div>
    </div>
    
    )

}


// default Props
Profile.defaultProps = {
    FullName: "Hend chaffar"
    };


  // PropTypes

    Profile.propTypes = {

    FullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.arrayOf(PropTypes.string),
    handlName: PropTypes.func.isRequired,

    };


export default Profile;