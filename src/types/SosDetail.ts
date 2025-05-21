// types/sos.ts

export interface TimelineItem {
  title: string
  time: string
  location: string
}

export interface ContactItem {
  name: string
  relation: string
  phone: string
}

export const TimelineData: TimelineItem[] = [
  { title: '긴급 요청 확인', time: '2025.01.13(화) 오전 11:30', location: '노인 거주지' },
  { title: '119 이송 확인', time: '2025.01.13(화) 오후 12:20', location: '행복동 보람병원' },
  { title: '보호자 연결 완료', time: '2025.01.13(화) 오후 12:30', location: '행복동 보람병원' },
  { title: '병원 접수 확인', time: '2025.01.13(화) 오후 12:40', location: '행복동 보람병원' },
]

export const ContactList: ContactItem[] = [
  { name: '홍길순', relation: '자녀', phone: '010-1234-5678' },
  { name: '김철수', relation: '지인', phone: '010-1234-5678' },
  { name: '김영희', relation: '지인', phone: '010-1234-5678' },
]

export const MemoList: string[] = [
  '파킨슨병 초기 증상이 있다.',
  '자녀분이 멀리 거주하신다.',
  '올해 희망 복지관에서 행복 복지관으로 소속 이전하였다.',
]
