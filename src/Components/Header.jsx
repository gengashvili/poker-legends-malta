import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Logo src="/assets/logo.png" alt="logo" />
        <div>
          <Button bg="#1C1D1E">Sign Up</Button>
          <Button bg="#EF602A">Sign In</Button>
        </div>
      </Wrapper>
      <LeaderBoard>
        <img src="/assets/leaderBoard.png" alt="leader Board" />
        <TextWrapper>
          <p>სლოტები</p>
          <p>10 სექტემბერი - 7 ნოემბერი</p>
        </TextWrapper>
      </LeaderBoard>
      <Headings>
        <h4>მოიპოვე 10 საგზურიდან ერთ-ერთი</h4>
        <h5>მოხვდი პოკერის ფესტივალზე მალტაში</h5>
      </Headings>
      <NavBar>

      </NavBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
`;
const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  width: 72px;
  height: 32px;
  background-color: ${(props) => props.bg};
  border: none;
  border-radius: 5px;
  margin-left: 3px;
  font-size: 15px;
`;
const LeaderBoard = styled.div`
  img {
    width: 100%;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  p {
    :first-child {
      background-color: #25292b;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 12px;
    }
    :last-child {
      margin-left: 8px;
      font-size: 14px;
      opacity: 90%;
    }
  }
`;

const Headings = styled.div`
margin: 20px 16px;
h4{
    font-size: 16px;
    margin-bottom: 14px;
}
h5{
    font-size: 14px;
    opacity: 90%;
}

`

const NavBar = styled.nav`

`;
