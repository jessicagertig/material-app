import styled from '@emotion/styled';
import { Typography } from '@mui/material';

const StyledTypography = styled(Typography)`
  font-family: 'Garamond', serif; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <StyledTypography variant="h1">
      I love Old Dresses!
    </StyledTypography>
  );
};

export default App;

