import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import NumberFormat from 'react-number-format';

import { addStocksRequest } from '../../store/modules/stocks/actions';
import Card from '../../components/Card';

import {
  Container,
  Title,
  Input,
  Button,
  BText,
  SearchBar,
  EmptyText,
  LatestPrice,
  Price,
  TPrice,
  Logo,
  Company,
  CTitle,
  CSymbol,
  CCeo,
  CDescription,
} from './styles';

export default function Home() {
  const [symbol, setSymbol] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.stocks.loading);
  const latestPrice = useSelector(state => state.stocks.latestPrice);
  const historicalPrices = useSelector(state => state.stocks.historicalPrices);
  const company = useSelector(state => state.stocks.company);
  const logo = useSelector(state => state.stocks.logo);

  function handleSubmit() {
    if (symbol) {
      dispatch(addStocksRequest(symbol, '5d'));
    } else {
      Alert.alert('Erro', 'Informe uma Ação!');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <ScrollView>
        <Container>
          <Title>Stock$ Price</Title>
          <SearchBar>
            <Input
              autoCapitalize="characters"
              autoCorrect={false}
              autoCompleteType="off"
              onChangeText={text => setSymbol(text)}
              value={symbol}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
            />
            <Button onPress={handleSubmit}>
              {loading ? (
                <ActivityIndicator size={28} color="#fff" />
              ) : (
                <BText>
                  <Icon name="search" size={28} color="#FFF"></Icon>
                </BText>
              )}
            </Button>
          </SearchBar>

          {historicalPrices.length > 0 &&
          latestPrice > 0 &&
          Object.keys(company).length > 0 ? (
            <>
              <Card loading={loading}>
                <>
                  <LatestPrice>
                    <Price>
                      <NumberFormat
                        value={latestPrice}
                        displayType="text"
                        thousandSeparator="."
                        decimalSeparator=","
                        renderText={value => <TPrice>{value}</TPrice>}
                        decimalScale={2}
                        prefix="$"
                      />
                    </Price>
                    <Logo
                      source={{ uri: logo }}
                      style={{ resizeMode: 'contain' }}
                    ></Logo>
                  </LatestPrice>
                  <Company>
                    <CTitle>{company.companyName}</CTitle>
                    <CSymbol>
                      {company.exchange}: {company.symbol}
                    </CSymbol>
                    <CCeo>CEO: {company.CEO}</CCeo>
                    <CDescription>{company.description}</CDescription>
                  </Company>
                </>
              </Card>
              <Card loading={loading}>
                <>
                  <CTitle>Últimos 5 dias</CTitle>
                  <View
                    style={{ height: 250, padding: 5, flexDirection: 'row' }}
                  >
                    <YAxis
                      data={historicalPrices.map(stock => stock.value)}
                      style={{
                        marginRight: 5,
                        marginBottom: 10,
                        marginTop: 10,
                      }}
                      contentInset={{ top: 10, bottom: 10 }}
                      numberOfTicks={5}
                    />
                    <View style={{ flex: 1, height: 250, marginLeft: 0 }}>
                      <AreaChart
                        data={historicalPrices.map(stock => stock.value)}
                        style={{ flex: 1 }}
                        svg={{
                          fill: 'rgba(136, 132, 216, 0.8)',
                          stroke: '#8884d8',
                        }}
                        contentInset={{ top: 10, bottom: 10 }}
                        numberOfTicks={5}
                      >
                        <Grid />
                      </AreaChart>
                      <XAxis
                        style={{ marginHorizontal: 5 }}
                        data={historicalPrices}
                        formatLabel={(_, index) =>
                          historicalPrices[index].label
                        }
                        svg={{ fontSize: 12, fill: 'black' }}
                        contentInset={{ left: 15, right: 15 }}
                      />
                    </View>
                  </View>
                </>
              </Card>
            </>
          ) : (
            <Card loading={loading}>
              <EmptyText>Nenhuma ação informada/encontrada</EmptyText>
            </Card>
          )}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
