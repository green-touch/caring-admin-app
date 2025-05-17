// 타임라인 관련 타입 정의

export type TimelineTarget = {
  name: string;
};

export type TimelineLocation = {
  name: string;
};

export type TimelineParams = {
  target?: TimelineTarget;
  date?: string;
  location?: TimelineLocation;
};
