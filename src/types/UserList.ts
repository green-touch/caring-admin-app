export type UserStatusMeta = {
  bgcolor: string
  boxtextcolor: string
  batterytext: string
  boxbatteryicon: string
  boxtimeicon: string
  screenOffDuration: string
  ringFill: string
  ringBg: string
  ringText: string
}

export type UserDetailStatusBoxProps = {
  connected: boolean
  status: UserStatusMeta
  batteryLevel: number
  shadowStyle?: object
}