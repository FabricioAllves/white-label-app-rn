import type { DashboardStat, QuickAction } from "../types/dashboard.types";

export const mockStats: DashboardStat[] = [
  {
    id: "1",
    label: "Usuários ativos",
    value: "1.234",
    change: 12.5,
    changeLabel: "vs mês anterior",
  },
  {
    id: "2",
    label: "Receita mensal",
    value: "R$ 45.678",
    change: 8.3,
    changeLabel: "vs mês anterior",
  },
  {
    id: "3",
    label: "Pedidos",
    value: "567",
    change: -2.1,
    changeLabel: "vs mês anterior",
  },
  {
    id: "4",
    label: "Taxa de conversão",
    value: "3.2%",
    change: 0.5,
    changeLabel: "vs mês anterior",
  },
];

export const mockQuickActions: QuickAction[] = [
  { id: "1", label: "Novo Pedido", icon: "add-circle-outline" },
  { id: "2", label: "Relatórios", icon: "document-text-outline" },
  { id: "3", label: "Configurações", icon: "settings-outline" },
  { id: "4", label: "Suporte", icon: "chatbubble-outline" },
];
