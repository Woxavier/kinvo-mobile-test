/* eslint-disable @typescript-eslint/no-explicit-any */
//Dependencies
import React from 'react'

//Styles
import { createStyles } from './styles'

//Components
import StatusLabel from '../../../../shared/components/StatusLabel'
import { View, Image, Text, TouchableOpacity } from 'react-native'

interface PropsCards {
  onPress: any
  title: string
  info: string
  img: any
  isNewBolder: boolean
}

export default function Presentational({
  onPress,
  title,
  info,
  img,
  isNewBolder
}: PropsCards) {
  const styles = createStyles

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.contentLeft}>
          <View style={styles.imgContainer}>
            <Image source={img}></Image>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.bold}>{title}</Text>
            <Text style={styles.info}>{info}</Text>
          </View>
        </View>

        {isNewBolder ? <StatusLabel status={1} /> : <></>}
      </View>
    </TouchableOpacity>
  )
}
