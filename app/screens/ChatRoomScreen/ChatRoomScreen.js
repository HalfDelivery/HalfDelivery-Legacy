import React, { useState, useEffect, useLayoutEffect } from "react"
import {
  Button,
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ActivityIndicator,
  Modal,
  ScrollView,
  Platform,
} from "react-native"
// import { useNavigation, useRoute } from "@react-navigation/core"
// import { Auth, DataStore, SortDirection } from "aws-amplify"
import Message from "./Message"
import MessageInput from "./MessageInput"
// import {
//   Message as MessageModel,
//   ChatRoom,
//   Order,
// } from "./AWS/src/models";
import { Entypo } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import styled from "styled-components"
import colors from "./colors"
import { useRoute } from "@react-navigation/native"
import { users } from "../../../assets/sampleData/users"

// import { MaterialIcons } from "@expo/vector-icons"
// import {
//   MatchingCancelled,
//   EjectPartner,
//   CancelMatching,
// } from "./modals";
// import {
//   InputOrderPrice,
//   RequestAdditionalTime,
//   AddAdditionalTime,
//   ViewProfilePartner,
//   FinalCheck,
//   EnterMatching,
// } from "./components/Matrching/modals/";

// const images = [
//   {
//     uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
//   },
//   {
//     uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
//   },
//   {
//     uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
//   },
// ]

// const BottomTab = (props) => {
//   return (
//     <BottomTabView>
//       <Image source={props} style={{ width: "110%", height: "110%" }} />
//     </BottomTabView>
//   )
// }

const _messages = [
  {
    message: "안녕하세요!",
    isMe: false,
    userInfo: users[1],
  },
]

export const ChatRoomScreen = (props) => {
  const { params: users } = useRoute()
  console.log(users)

  const [messages, setMessages] = useState(_messages)
  // const [chatRoom, setChatRoom] = useState(null)
  const [is3dots, setIs3dots] = useState(false)
  const [isDetail, setIsDetail] = useState(false)
  // const [authUser, setAuthUser] = useState([])
  // const route = useRoute()
  // const [selectedDropdown, setSelectedDropdown] = useState(undefined)
  // const [visible, setIsVisible] = useState(false)

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage])
  }

  //- 헤더바, 점3개 버튼누르면 작동
  const navigation = props.navigation
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{ marginRight: 20, marginVertical: 10, flexDirection: "row" }}
          onPress={() => {
            is3dots ? setIs3dots(false) : setIs3dots(true)
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </Pressable>
      ),

      // tabBarBackground: () => {
      //   return BottomTab(onMatching)
      // },
    })
  }, [navigation, is3dots])

  /*   // ? 첫 렌더링에만 호출. ChatRoom 가져오기.
  useEffect(() => {
    fetchChatRoom();
    // updateOrder();
  }, []);

  // ? chatRoom 에 변화가 있을때마다 호출. MessageModel 가져오기.
  useEffect(() => {
    if (!chatRoom) {
      return;
    } else {
      fetchMessages();
    }
  }, [chatRoom]);

  // ? Listening to new messages. https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/
  // ? In Real Time!
  // ? 새 메시지가 생길때마다 렌더링 하기위해서, messages state를 수정하자.
  useEffect(() => {
    // ? 그러기 위해서 우선, Message 모델을 구독, subscription 해야 한다.
    const subscription = DataStore.observe(MessageModel).subscribe((msg) => {
      // console.log(msg.model, msg.opType, msg.element);
      // ? 새 메시지 추가!
      if (msg.model === MessageModel && msg.opType === "INSERT") {
        // * setState 에 함수를 넣으면, 그 함수의 첫번쨰 인자는 현재 state를 갖는다.
        setMessages((existingMessage) => [msg.element, ...existingMessage]);
      }
    });
    // ? 죽을땐 unsubscribe
    return () => subscription.unsubscribe();
  }, []);

  // ? 채팅방 가져오기.
  const fetchChatRoom = async () => {
    if (!route.params.id) {
      console.warn("No chatroom id provided");
    }
    const chatRoom = await DataStore.query(ChatRoom, route.params.id);
    if (!chatRoom) {
      console.error("Couldn't find a chat room with this id");
    } else {
      // console.log("chatRoom이다", chatRoom);
      setChatRoom(chatRoom);
    }
  };

  // ? 메시지 가져오기.
  const fetchMessages = async () => {
    if (!chatRoom) {
      return;
    }
    const fechedMessages = await DataStore.query(
      MessageModel,
      (message) => message.chatroomID("eq", chatRoom?.id),
      {
        sort: (message) => message.createdAt(SortDirection.DESCENDING),
      } // ? ("eq", chatRoom?.id) 는 Amplify 내장 함수다.
    );
    console.log("펫치드메시지스", fechedMessages);
    setMessages(fechedMessages);
  };

  useEffect(() => {
    const fetchAuthUser = async () => {
      const _authUser = await Auth.currentAuthenticatedUser();
      setAuthUser(_authUser);
    };
    fetchAuthUser();
  }, []); */
  // console.log("authUser", authUser);

  // ? chatRoom 이 null 이면...
  // if (!chatRoom) {
  //   return <ActivityIndicator />;
  // }

  return (
    //! View 대신 SafeAreaView 를 쓰면, 노치 같은 곳에 데이터가 표출되지 않는다. 굳!
    <SafeAreaView style={styles.page}>
      {is3dots && (
        <TopBox>
          <Pressable
            style={{
              marginLeft: 20,
              marginVertical: 10,
              flexDirection: "row",
            }}
            onPress={() => {
              console.log("Im pressed")
              alert("신고해")
            }}
          >
            <Image source={require("./alert4x.png")} style={{ width: 18, height: 18.5 }} />

            <TextBox>신고하기</TextBox>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={24}
              color="black"
              style={{ marginRight: 24 }}
            />
          </Pressable>
          <Pressable
            style={{
              marginLeft: 20,
              marginVertical: 10,
              flexDirection: "row",
            }}
            onPress={() => {}}
          >
            <Image source={require("./ban4x.png")} style={{ width: 18, height: 18 }} />
            <TextBox>차단하기</TextBox>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={24}
              color="black"
              style={{ marginRight: 24 }}
            />
          </Pressable>
          <Pressable
            style={{
              marginLeft: 20,
              marginVertical: 10,
              flexDirection: "row",
            }}
            onPress={() => {}}
          >
            <Image source={require("./leave4x.png")} style={{ width: 15.95, height: 22.37 }} />
            <TextBox>채팅방 나가기</TextBox>
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={24}
              color="black"
              style={{ marginRight: 24 }}
            />
          </Pressable>
        </TopBox>
      )}
      {/* //TODO: 어떠 컴포넌트로 위치시켜야 할까.. */}
      {/* <EjectModal /> */}
      {/* <ProcessBox>
        <ProcessImg source={require("./process_menuChecked.png")} />
      </ProcessBox> */}
      {isDetail && <InfoDetail />}

      {/* 채팅메시지 */}
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Message message={item.message} isMe={item.isMe} user={item.userInfo} />
        )}
        // inverted // ? 렌더링 순서 역전 - 왜 이렇게 하는지는, fechedMessages() 함수 속 "sort" 문장 확인해볼 것.
      />
      {/* 채팅메시지 입력 */}
      <MessageInput
        // chatRoom={chatRoom}
        // me={authUser.attributes}
        addMessage={addMessage}
        users={users}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F5F6F6",
    // backgroundColor: "red",
    flex: 1,
  },
  // chatMenuList: {
  //   marginTop: 5,
  //   padding: 10,
  //   backgroundColor: "lightgrey",
  //   borderBottomRightRadius: 10,
  //   borderBottomLeftRadius: 10,
  // },
})

const TopBox = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  background-color: white;
  /* opacity: 0.8; */
  width: 100%;
  height: 144px;
  position: absolute;
  z-index: 3;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
`

const ProcessBox = styled.View`
  margin-top: 12px;
  border-radius: 16px;
  align-self: center;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
`

const ProcessImg = styled.Image`
  width: 364px;
  height: 50px;
  border-radius: 16px;
  /* border-width: 1px; */
`

const RoomInfoBox = styled.View`
  /* flex: 1; */
  /* padding: 10px; */
  align-items: center;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 48px;
  z-index: 1;
`

const InfoDetail = styled.View`
  width: 100%;
  height: 257px;
  background-color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
`

const RoomText = styled.Text`
  /* font-family: "gothic-regular"; */
  font-size: 17px;
  text-decoration: underline;
  color: ${colors.primaryBlue};
  margin-left: 14px;
`

const PrfImgView = styled.View`
  flex-direction: row;
  /* //! 안드로이드는 margin-left: 33% 가 맞음 */
  /* margin-left: 33%; */
  margin-left: 25%;
  margin-right: auto;
  /* border-width: 1px; */
  justify-content: space-evenly;
`

const ProfileImg = styled.Image`
  height: 22px;
  width: 22px;
  border-radius: 22px;
  margin-left: 2%;
  margin-right: 3px;
  border-width: 1px;
`

const TextBox = styled.Text`
  /* //! noto로 폰트바꾸면 이상하게 줄맞춤이 깨진다.. */
  /* font-family: "gothic-regular"; */
  font-size: 17px;
  line-height: 19px;
  margin-left: 12px;
  margin-right: auto;
`