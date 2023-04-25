import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsX } from "react-icons/bs";

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
        <BsX className='xIcon'/>
      </LeaderBoard>
      <Headings>
        <h4>მოიპოვე 10 საგზურიდან ერთ-ერთი</h4>
        <h5>მოხვდი პოკერის ფესტივალზე მალტაში</h5>
      </Headings>
      <NavBar>
        <NavLink to="/">
          <p>28 ოქტ. - 7 ნოემ.</p>
          <p>Cash Games</p>
        </NavLink>
        <NavLink to="New-Year-Series">
          <p>10 - 29 დეკ.</p>
          <p>New Year Series</p>
        </NavLink>
        <NavLink to="final-stage">
          <p>28 ოქტ. - 7 ნოემ.</p>
          <p>Final Stage</p>
        </NavLink>
      </NavBar>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  color: #ffffff;
`;
const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 1024px) {
    display: none;
  }
  button {
    color: #ffffff;
  }
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
  @media (min-width: 1024px) {
    position: relative;
  }
  img {
    width: 100%;
  }
  .xIcon{
    display: none;
    @media (min-width: 1024px){
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: #25292B;
      width: 34px;
      height: 34px;
      border-radius: 50%;
    }
  }
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  @media (min-width: 1024px) {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #25292b;
    border-radius: 35px;
    padding: 7px 7px 7px 0;
  }
  p {
    :first-child {
      background-color: #25292b;
      padding: 5px 10px;
      border-radius: 15px;
      font-size: 12px;
      @media (min-width: 1024px) {
        margin-left: 5px;
        background-color: rgba(255, 255, 255, 0.5);
      }
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
  h4 {
    font-size: 16px;
    margin-bottom: 14px;
  }
  h5 {
    font-size: 14px;
    opacity: 90%;
  }
`;

const NavBar = styled.nav`
  margin: 20px 16px 24px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3234;
  border-radius: 8px;
  height: 77px;
  @media (min-width: 1024px) {
    margin: 35px 16px;
  }
  a {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    flex-direction: column;
    width: 33%;
    p {
      :first-child {
        font-size: 10px;
        margin-bottom: 9px;
      }
      :last-child {
        font-size: 12px;
        font-weight: 900;
      }
    }
  }
  .active {
    background-color: #ef5a21;
    /* width: 140px; */
    height: 90px;
    border-radius: 8px;
    p {
      :first-child {
        font-size: 11px;
        /* margin-bottom: 9px; */
      }
      :last-child {
        font-size: 14px;
        @media (min-width: 1024px) {
          font-size: 16px;
        }
      }
    }
  }
`;
