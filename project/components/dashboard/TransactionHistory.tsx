"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, ChevronDown, Calendar as CalendarIcon } from "lucide-react";
import { transactionsData } from "@/lib/data";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function TransactionHistory() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDate(new Date("2022-01-01"));
  }, []);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'on hold':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!mounted) {
    return (
      <Card className="w-full lg:w-[60%]">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
        </CardHeader>
        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full lg:w-[60%]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Transaction History</CardTitle>
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="border-gray-200 text-sm">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "MMM dd, yyyy") : "Select date"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View All</DropdownMenuItem>
              <DropdownMenuItem>Export to CSV</DropdownMenuItem>
              <DropdownMenuItem>Print Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Transactions</TableHead>
              <TableHead className="text-left">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactionsData.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="py-3">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-3 bg-gray-100">
                      <div className="bg-blue-100 rounded-full p-1.5">
                        <div className="h-full w-full bg-blue-500 rounded-full"></div>
                      </div>
                    </Avatar>
                    <span className="font-medium">{transaction.type}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-500">{transaction.date}</TableCell>
                <TableCell className="text-right font-medium">
                  ${transaction.amount.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end space-x-2">
                    <div className={cn("h-2 w-2 rounded-full", getStatusColor(transaction.status))} />
                    <span className={cn(
                      "text-sm",
                      transaction.status.toLowerCase() === 'completed' && "text-green-700",
                      transaction.status.toLowerCase() === 'pending' && "text-yellow-700",
                      transaction.status.toLowerCase() === 'on hold' && "text-red-700",
                    )}>
                      {transaction.status}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}