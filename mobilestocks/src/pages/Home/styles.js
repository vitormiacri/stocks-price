import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f5f5f5;
  padding: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  align-self: center;
  justify-content: center;

  font-size: 24px;
  font-weight: bold;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  flex: 6;
  height: 44px;
  border: 1px solid #999;
  border-radius: 4px;
  margin-right: 10px;
  padding: 0 10px;

  background: #fff;
  font-size: 16px;
  line-height: 18px;
`;

export const Button = styled.TouchableOpacity`
  height: 44px;
  width: 44px;
  background: #3d5afe;
  border-radius: 4px;
  padding-top: 6px;
`;

export const BText = styled.Text`
  color: #fff;
  justify-content: center;
  align-self: center;
`;

export const EmptyText = styled.Text`
  align-self: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;

  color: #000;
`;

export const LatestPrice = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Price = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

export const TPrice = styled.Text`
  font-size: 24px;
  color: #000;
  margin-right: 10px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Company = styled.View`
  margin-top: 10px;
`;

export const CTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
export const CSymbol = styled.Text`
  margin: 5px 0;
  font-size: 18px;
`;
export const CCeo = styled.Text`
  margin: 5px 0;
  font-size: 18px;
`;
export const CDescription = styled.Text`
  font-size: 14px;
  color: #000;
  text-align: justify;
  margin-top: 10px;
`;

export const Description = styled.View`
  font-size: 1rem;
  color: #000;
  text-align: justify;
  margin-top: 10px;
`;
