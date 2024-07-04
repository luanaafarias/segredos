import React from 'react';
import {View, FlatList, Text} from 'react-native'
import BaseCard from '../components/BaseCard'
const segredos = [
  {
    id: 1,
    titulo: "um segredo muito secreto",
    segredo: "matei uma velha atropelada e não me arrependo",
    user: "paulo@gmail.com"
  },
  {
    id: 1,
    titulo: "um segredo muito secreto",
    segredo: "roubei a bengala de um cego e deixei ele no meio da avenida",
    user: "laura@gmail.com"
  },
  {
    id: 1,
    titulo: "um segredo muito secreto",
    segredo: "voltei para meu ex toxico e meus amigos não podem saber",
    user: "lizie@gmail.com"
  },
]
export default function Principal(){
  return(
    <View>
      <FlatList
      data={segredos}
      renderItem={item => (<BaseCard>{item.item.segredo}
      Text</BaseCard>)}
      keyExtractor={item => item.id}
      />
    </View>
  )
}