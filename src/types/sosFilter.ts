export type SortType = 'time' | 'status';
export type SortValue = {
  type: string;
  value: string | number;
};

export type SortOptionType = {
  type: SortType;
  value: SortValue;
};

export const sortOptions = [
  {
    type: 'time',
    value: [
      {
        type: '일주일',
        value: 7,
      },
      {
        type: '1개월',
        value: 30,
      },
      {
        type: '3개월',
        value: 90,
      },
    ],
  },
  {
    type: 'status',
    value: [
      {
        type: '전체',
        value: '전체',
      },
      {
        type: '진행중',
        value: '진행중',
      },
      {
        type: '처리 완료',
        value: '처리 완료',
      },
    ],
  },
];

export const defaultSortOption: SortOptionType[] = [
  {
    type: 'time',
    value: {
      type: '일주일',
      value: 7,
    },
  },
  {
    type: 'status',
    value: {
      type: '전체',
      value: '전체',
    },
  },
];

export type StatusType = '진행중' | '처리 완료';

export interface SosListType {
  id: number;
  name: string;
  status: StatusType;
  requestDate: string;
  image: any;
}

export const sosListData: SosListType[] = [
  {
    id: 1,
    name: '김철수',
    status: '진행중',
    requestDate: '2025.01.01',
    image: require('@_assets/images/img_user_ex_01.png'),
  },
  {
    id: 2,
    name: '김철수',
    status: '진행중',
    requestDate: '2025.01.01',
    image: require('@_assets/images/img_user_ex_01.png'),
  },
  {
    id: 3,
    name: '김철수',
    status: '처리 완료',
    requestDate: '2025.01.01',
    image: require('@_assets/images/img_user_ex_01.png'),
  },
];

export const statusStyle: Record<StatusType, { text: string }> = {
  진행중: {
    text: 'text-main600',
  },
  '처리 완료': {
    text: 'text-green800',
  },
};
