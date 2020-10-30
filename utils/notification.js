import * as Notifications from 'expo-notifications'
import { AsyncStorage } from 'react-native'

export const removeNotifications = () => {
  return AsyncStorage.removeItem('UdaciCardsNotification')
    .then(
      Notifications.cancelAllScheduledNotificationsAsync()
    )
    .catch(error => {
      console.log('Notification Error: ', error)
    })
}

export const setNotifications = () => {
  AsyncStorage.getItem('UdaciCardsNotification')
    .then(JSON.parse)
    .then((data) => {
      if (data == null) {
        Notifications.getPermissionsAsync()
          .then((permissions) => {
            if (permissions.granted) {
              Notifications.cancelAllScheduledNotificationsAsync()
              const nextNotification = new Date()
              nextNotification.setDate(nextNotification.getDate() + 1)
              nextNotification.setHours(17)
              nextNotification.setMinutes(30)
              nextNotification.setSeconds(0)

              Notifications.scheduleNotificationAsync({
                content: { title: 'Quiz Reminder!!', body: 'Take your daily quiz' },
                nextNotification
              })
              AsyncStorage.setItem('UdaciCardsNotification', JSON.stringify(true))
            }
          })
      }
    })
    .catch(error => {
      console.log('Notification Error: ', error)
    })
}
