"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ListTodo,
  FileText,
  BookOpen,
  Clock,
  BarChart2,
  Bot,
  Users,
  Building2,
  Bell,
  HelpCircle,
  Moon,
  Sun,
  LogOut,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed?: boolean;
}

export default function Sidebar({ collapsed = false }: SidebarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(theme === "dark");
  }, [theme]);

  if (!mounted) {
    return (
      <aside
        className={cn(
          "h-full bg-white dark:bg-gray-900 border-r border-gray-200/50 dark:border-gray-800 transition-all duration-300 z-20",
          collapsed ? "w-[72px]" : "w-[240px] sm:w-[280px]"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 flex items-center justify-center h-16">
            <Link href="/" className="flex items-center">
              <div className="bg-blue-500 text-white p-1.5 rounded">
                <Zap className="h-5 w-5" />
              </div>
              {!collapsed && (
                <span className="ml-2 font-bold text-lg">営業自動君</span>
              )}
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  const menuItems = [
    { icon: LayoutDashboard, label: "ダッシュボード", active: true, href: "/" },
    { icon: ListTodo, label: "営業リスト", href: "/sales-list" },
    { icon: FileText, label: "テンプレート", href: "/templates" },
    { icon: BookOpen, label: "ナレッジ", href: "/knowledge" },
    { icon: Clock, label: "配信スケジュール", href: "/schedule" },
    { icon: BarChart2, label: "分析レポート", href: "/analytics" },
    { icon: Bot, label: "AI提案（β）", href: "/ai-suggestions" },
  ];

  const systemItems = [
    { icon: Users, label: "ユーザー管理", href: "/users" },
    { icon: Building2, label: "会社設定", href: "/company" },
    { icon: Bell, label: "通知 / ログ", href: "/notifications" },
    { icon: HelpCircle, label: "ヘルプ / サポート", href: "/help" },
  ];

  return (
    <aside
      className={cn(
        "h-full bg-white dark:bg-gray-900 border-r border-gray-200/50 dark:border-gray-800 transition-all duration-300 z-20",
        collapsed ? "w-[72px]" : "w-[240px] sm:w-[280px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex items-center justify-center h-16">
          <Link href="/" className="flex items-center">
            <div className="bg-blue-500 text-white p-1.5 rounded">
              <Zap className="h-5 w-5" />
            </div>
            {!collapsed && (
              <span className="ml-2 font-bold text-base sm:text-lg whitespace-nowrap">営業自動君</span>
            )}
          </Link>
        </div>

        <div className="flex flex-col flex-1 px-3 py-4">
          <div className="mb-2">
            {!collapsed && (
              <p className="px-3 text-xs font-medium text-gray-400 uppercase mb-4">
                営業業務
              </p>
            )}
            <nav className="space-y-1.5">
              {menuItems.map((item, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant={item.active ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-start",
                            item.active 
                              ? "bg-blue-500 text-white hover:bg-blue-600" 
                              : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          )}
                          size={collapsed ? "icon" : "default"}
                        >
                          <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed ? "" : "mr-2")} />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {!collapsed && (
              <p className="px-3 text-xs font-medium text-gray-400 uppercase mb-4">
                システム
              </p>
            )}
            <nav className="space-y-1.5">
              {systemItems.map((item, index) => (
                <TooltipProvider key={index} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                          size={collapsed ? "icon" : "default"}
                        >
                          <item.icon className={cn("h-5 w-5 flex-shrink-0", collapsed ? "" : "mr-2")} />
                          {!collapsed && <span className="truncate">{item.label}</span>}
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              ))}
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      "flex items-center px-3 py-2 rounded-md",
                      collapsed ? "justify-center" : "justify-between"
                    )}>
                      {!collapsed && (
                        <div className="flex items-center">
                          {isDark ? (
                            <Moon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <Sun className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                          )}
                          <span className="text-gray-500 dark:text-gray-400 truncate">ダークモード</span>
                        </div>
                      )}
                      {collapsed && (
                        <div>
                          {isDark ? (
                            <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          ) : (
                            <Sun className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                          )}
                        </div>
                      )}
                      <Switch
                        checked={isDark}
                        onCheckedChange={(checked) => {
                          setTheme(checked ? "dark" : "light");
                        }}
                        className={cn(collapsed ? "ml-0" : "ml-auto")}
                      />
                    </div>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right">
                      ダークモード
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </nav>
          </div>
        </div>

        <div className="p-3 border-t border-gray-200/50 dark:border-gray-800">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                  size={collapsed ? "icon" : "default"}
                >
                  <LogOut className={cn("h-5 w-5 flex-shrink-0", collapsed ? "" : "mr-2")} />
                  {!collapsed && <span className="truncate">ログアウト</span>}
                </Button>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="right">
                  ログアウト
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </aside>
  );
}