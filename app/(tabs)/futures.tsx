import { Stack } from "expo-router";
import { useRef, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { Modalize } from 'react-native-modalize';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface Trade {
  price: number;
  amount: number;
  total: number;
}

const availableTokens = [
  { symbol: "BTC", name: "Bitcoin", price: 63193.49 },
  { symbol: "ETH", name: "Ethereum", price: 4320.50 },
  { symbol: "SOL", name: "Solana", price: 124.15 },
  { symbol: "BNB", name: "Binance Coin", price: 298.85 },
];

const initialBuyOrders: Trade[] = [
  { price: 63193.50, amount: 1.234, total: 78025.00 },
  { price: 63193.40, amount: 0.567, total: 35850.60 },
  { price: 63193.30, amount: 0.200, total: 12638.66 },
  { price: 63193.10, amount: 0.354, total: 22396.20 },
];

const initialSellOrders: Trade[] = [
  { price: 63194.00, amount: 0.342, total: 21629.58 },
  { price: 63194.10, amount: 0.765, total: 48355.36 },
  { price: 63194.20, amount: 0.432, total: 27357.82 },
  { price: 63194.30, amount: 1.000, total: 63194.30 },
];

export default function Trade() {
  const [selectedToken, setSelectedToken] = useState<string>("BTC");
  const [price, setPrice] = useState<string>(availableTokens[0].price.toString());
  const [amount, setAmount] = useState<string>("0.01");
  const [total, setTotal] = useState<string>((parseFloat(price) * parseFloat(amount)).toFixed(2));
  const [isBuying, setIsBuying] = useState<boolean>(true);
  const [isLong, setIsLong] = useState<boolean>(true); // New state for long/short

  const modalizeRef = useRef<Modalize>(null);

  const backgroundColor = useSharedValue(isBuying ? 'green' : 'red');

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(isBuying ? 'green' : 'red', { duration: 300 }),
    };
  });

  const handleTokenChange = (tokenSymbol: string) => {
    const token = availableTokens.find(t => t.symbol === tokenSymbol);
    if (token) {
      setSelectedToken(token.symbol);
      setPrice(token.price.toString());
      setTotal((token.price * parseFloat(amount)).toFixed(2));
    }
    modalizeRef.current?.close();
  };

  const handleAmountChange = (newAmount: string) => {
    setAmount(newAmount);
    setTotal((parseFloat(price) * parseFloat(newAmount)).toFixed(2));
  };

  const handlePriceChange = (newPrice: string) => {
    setPrice(newPrice);
    setTotal((parseFloat(newPrice) * parseFloat(amount)).toFixed(2));
  };

  const handleTradeAction = () => {
    const action = isBuying ? (isLong ? "Long" : "Short") : (isLong ? "Closing Long" : "Closing Short");
    console.log(`${action} ${amount} ${selectedToken} at $${price}`);
  };

  const toggleBuySell = (buying: boolean) => {
    setIsBuying(buying);
  };

  const toggleLongShort = (long: boolean) => {
    setIsLong(long);
  };

  const openTokenSelector = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <Stack.Screen />
      <View className="flex-1 bg-slate-900 p-4">

        {/* Token Picker with Bottom Sheet */}
        <View className="mt-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={openTokenSelector}>
            <Text className="text-white text-xl font-bold">
              {selectedToken} / USDT ▼
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-400 text-sm mb-4">${price}</Text>

        {/* Buy/Sell Segmented Control with Animation */}
        <View className="flex-row justify-between mb-4">
          <TouchableOpacity
            onPress={() => toggleBuySell(true)}
            className={`flex-1 p-3 rounded-l-lg ${isBuying ? "bg-green-500" : "bg-gray-700"}`}
          >
            <Text className={`text-center ${isBuying ? "text-black font-bold" : "text-white"}`}>
              Buy
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleBuySell(false)}
            className={`flex-1 p-3 rounded-r-lg ${!isBuying ? "bg-red-500" : "bg-gray-700"}`}
          >
            <Text className={`text-center ${!isBuying ? "text-black font-bold" : "text-white"}`}>
              Sell
            </Text>
          </TouchableOpacity>
        </View>

        {/* Long/Short Segmented Control */}
        <View className="flex-row justify-between mb-4">
          <TouchableOpacity
            onPress={() => toggleLongShort(true)}
            className={`flex-1 p-3 rounded-l-lg ${isLong ? "bg-blue-500" : "bg-gray-700"}`}
          >
            <Text className={`text-center ${isLong ? "text-black font-bold" : "text-white"}`}>
              Long
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleLongShort(false)}
            className={`flex-1 p-3 rounded-r-lg ${!isLong ? "bg-orange-500" : "bg-gray-700"}`}
          >
            <Text className={`text-center ${!isLong ? "text-black font-bold" : "text-white"}`}>
              Short
            </Text>
          </TouchableOpacity>
        </View>

        {/* Price Input */}
        <View className="flex-row items-center mb-4">
          <TextInput
            value={price}
            onChangeText={handlePriceChange}
            keyboardType="numeric"
            placeholder="Price (USDT)"
            className="flex-1 p-3 bg-gray-800 text-white rounded-lg"
          />
        </View>

        {/* Amount Input */}
        <View className="flex-row items-center mb-4">
          <TextInput
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
            placeholder="Amount"
            className="flex-1 p-3 bg-gray-800 text-white rounded-lg"
          />
        </View>

        {/* Total Display */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-lg">Total (USDT):</Text>
          <Text className="text-white text-lg font-bold">$ {total}</Text>
        </View>

        {/* Animated Trade Action Button */}
        <Animated.View style={[{ borderRadius: 30, overflow: 'hidden' }]}>
          <TouchableOpacity
            onPress={handleTradeAction}
            className="p-4"
            style={{ backgroundColor: isBuying ? (isLong ? 'blue' : 'orange') : (isLong ? 'red' : 'darkred') }}
          >
            <Text className="text-center text-black font-semibold">
              {isBuying ? (isLong ? `Long ${selectedToken}` : `Short ${selectedToken}`) : (isLong ? `Close Long ${selectedToken}` : `Close Short ${selectedToken}`)}
            </Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Order Book */}
        <View className="mt-6">
          <Text className="text-white text-lg font-semibold mb-2">Order Book</Text>

          {/* Buy Orders (Bids) */}
          <Text className="text-green-400 text-base mb-1">Buy Orders (Bids)</Text>
          <ScrollView className="bg-gray-800 rounded-lg p-2 mb-4">
            {initialBuyOrders.map((order, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center p-2 bg-gray-900 rounded-lg mt-2"
              >
                <Text className="text-green-400">${order.price}</Text>
                <Text className="text-white">{order.amount}</Text>
                <Text className="text-white">{order.total}</Text>
              </View>
            ))}
          </ScrollView>

          {/* Sell Orders (Asks) */}
          <Text className="text-red-400 text-base mb-1">Sell Orders (Asks)</Text>
          <ScrollView className="bg-gray-800 rounded-lg p-2">
            {initialSellOrders.map((order, index) => (
              <View
                key={index}
                className="flex-row justify-between items-center p-2 bg-gray-900 rounded-lg mt-2"
              >
                <Text className="text-red-400">${order.price}</Text>
                <Text className="text-white">{order.amount}</Text>
                <Text className="text-white">{order.total}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Token Selector Modal */}
        <Modalize ref={modalizeRef}>
          <View className="p-4">
            <Text className="text-white text-lg font-semibold">Select a Token</Text>
            {availableTokens.map((token) => (
              <TouchableOpacity
                key={token.symbol}
                onPress={() => handleTokenChange(token.symbol)}
                className="flex-row justify-between items-center p-3 bg-gray-800 rounded-lg my-2"
              >
                <Text className="text-white">{token.name}</Text>
                <Text className="text-white">${token.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modalize>
      </View>
    </>
  );
}
