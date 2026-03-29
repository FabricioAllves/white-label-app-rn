export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  change?: number;
  changeLabel?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  onPress?: () => void;
}
