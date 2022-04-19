const Avatar = (props) => {
  const avatar = props.src;
  if (avatar) {
    return (
      <>
        <img className="user-avatar" src={avatar} width="200" height="200" />
      </>
    );
  } else {
    return (
      <>
        <img
          className="user-avatar"
          src="https://pixabay.com/pt/vectors/foto-de-perfil-em-branco-973460/"
          width="200"
          height="200"
        />
      </>
    );
  }
};

export default Avatar;
