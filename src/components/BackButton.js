import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default BackButton;