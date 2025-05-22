import type { TimelineParams } from '@_types/timeline';

export type RootStackParamList = {
  Login: undefined;
  Demo: undefined;
  Main: undefined;
  Sidebar: undefined;
  ResetPassword: undefined;
  HelpResult: undefined;
  User :undefined;
  ElderList:undefined;
  Elder:undefined;
  SosDetail:undefined;
  SosEmergency:undefined;
  timeline: TimelineParams | undefined;
  'timeline/select/target': undefined;
  'timeline/select/date': undefined;
  'timeline/select/location': undefined;
};

export type MainTabParamList = {
  SosList: undefined;
  ElderList: undefined;
  Main: undefined;
};
