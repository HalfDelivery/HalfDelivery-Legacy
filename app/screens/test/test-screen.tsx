import { Platform, Dimensions } from "react-native"
import React from "react"
import { Box, Text, View, Image, Center } from "native-base"
import { HEIGHT, WIDTH } from "../../theme/device-size-constant"

export const TestScreen = () => {
  console.log(Platform.OS)
  console.log(WIDTH)
  console.log(HEIGHT)
  return (
    <View bgColor="blue.800" flex={1}>
      <Box bg="yellow.400" p="12">
        <Text fontSize="xl" fontFamily={"body"}>
          HalfDelivery: Order Together, Pay Less
        </Text>

        <Image
          // source={require("halfdelivery/assets/common-images/small_logo.png")}
          source={require("../../../assets/common-images/small_logo.png")}
          alt="Alternate Text"
          size="xl"
          rounded={30}
          borderWidth={2}
        />
      </Box>
      <Text fontSize="xl" color="white" fontFamily="eng">
        Here I am, {Platform.OS}
      </Text>

      <Text fontSize="xl" color="white">
        Here I am, {Platform.OS}
      </Text>

      <Text fontSize={["xl", "xl", "2xl"]} color="white" fontFamily="kor" fontWeight={900}>
        width: {Dimensions.get("window").width} {"\n"}
        height: {Dimensions.get("screen").height} {"\n"}
        {WIDTH} {"\n"}
        {HEIGHT}
      </Text>

      <Center flex={1}>
        <Center
          bg="amber.600"
          // _text={{
          //   color: "white",
          // }}
          rounded="xl"
          w={[24, 48, 72]}
          h={24}
        >
          This is a box
        </Center>
      </Center>
    </View>
  )
}
