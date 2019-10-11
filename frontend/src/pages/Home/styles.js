import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: 100%;
  margin: 0 auto;
  padding: 50px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    font-size: 2.4rem;
    font-weight: bold;
  }

  overflow: hidden;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-shrink: 1;
  width: 100%;
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const LatestPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 2.5rem;
    color: #737373;
    margin-right: 10px;
  }

  span {
    color: #999;
    font-weight: bold;
    font-size: 1.3rem;
  }

  img {
    max-width: 100px;
    width: 100%;
  }
`;

export const Company = styled.div`
  margin-top: 10px;
`;

export const CompanyHeader = styled.div`
  strong {
    font-size: 1.8rem;
  }

  p {
    margin: 5px 0;
    font-size: 1.1rem;
  }
`;

export const Description = styled.div`
  font-size: 1rem;
  color: #000;
  text-align: justify;
  text-justify: inter-word;
  margin-top: 10px;
`;

const marquee = keyframes`
  0%   {
    transform: translateX(100%);
  }
 100% {
    transform: translateX(-100%);
  }
`;

export const Marquee = styled.div`
  width: 100%;
  margin: 0 auto;
  transform: translateX(100%);
  animation: ${marquee} 20s linear infinite;

  white-space: nowrap;
`;

export const ChartTitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-weight: bold;
`;
