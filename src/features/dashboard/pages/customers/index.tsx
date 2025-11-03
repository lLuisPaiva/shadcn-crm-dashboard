"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, MessageSquare } from "lucide-react";
import { useCustomers } from "./hooks/use-customers";
import { CustomersTable } from "./components/customers-table";
import { CustomersFilters } from "./components/customers-filters";
import { Button } from "@/components/ui/button";
import { DashboardChat } from "@/components/dashboard-chat";

export function CustomersPage() {
  const {
    customers,
    allCustomers,
    pageCount,
    filters,
    sorting,
    pagination,
    updateFilters,
    handleSortingChange,
    handlePaginationChange,
    handleClearFilters,
  } = useCustomers();

  const isEmpty = allCustomers.length === 0;
  const [chatOpen, setChatOpen] = useState(false);

  const handleChatAction = (action: string) => {
    console.log("Chat action:", action);
    
    if (action === "create_customer") {
      window.location.href = "/dashboard/customers/new";
    } else if (action.includes("filter") || action.includes("search")) {
      // Handle filter/search actions from chat
      // In real implementation, parse the chat input and update filters
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Instead of clicking buttons, chat with me to find, create, or manage customers
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/dashboard/customers/new">
            <Button>
              <Plus className="size-4" />
              New Customer
            </Button>
          </Link>
          <DashboardChat context="customers" onAction={handleChatAction} open={chatOpen} onOpenChange={setChatOpen} />
        </div>
      </div>

      <button
        onClick={() => setChatOpen(true)}
        className="bg-primary/5 hover:bg-primary/10 border-primary/20 hover:border-primary/30 rounded-lg border p-4 text-left transition-colors cursor-pointer"
      >
        <div className="flex items-start gap-3">
          <MessageSquare className="text-primary mt-0.5 h-5 w-5 shrink-0" />
          <div>
            <p className="text-sm font-medium">Try chatting instead of clicking!</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Say things like "Create a new customer" or "Show me customers from TechCorp" 
              Instead of clicking through forms and filters, just describe what you need. Click here to start chatting.
            </p>
          </div>
        </div>
      </button>

      <div className="rounded-lg border bg-card">
        <div className="border-b p-4">
          <CustomersFilters filters={filters} onFiltersChange={updateFilters} />
        </div>
        <div className="p-3">
          <CustomersTable
            customers={customers}
            totalRows={allCustomers.length}
            sorting={sorting}
            onSort={handleSortingChange}
            pagination={pagination}
            onPaginationChange={handlePaginationChange}
            pageCount={pageCount}
          />
        </div>
      </div>

      {isEmpty && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center animate-in fade-in-50">
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <h3 className="mt-4 text-lg font-semibold">No customers found</h3>
            <p className="mb-4 mt-2 text-sm text-muted-foreground">
              Try adjusting your search or filter to find what you are looking
              for.
            </p>
            <Button variant="outline" onClick={handleClearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 