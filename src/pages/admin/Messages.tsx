import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getMessages,
  updateMessageStatus,
  deleteMessage,
  Message as MessageType,
  PaginationData,
} from "@/services/message";
import { useToast } from "@/hooks/use-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Eye,
  Trash2,
  CheckCircle,
  Archive,
  Search,
  RefreshCw,
  Filter,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Messages: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 10,
    pages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState<MessageType | null>(
    null
  );
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Fetch messages
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await getMessages(
        pagination.page,
        pagination.limit,
        statusFilter,
        searchTerm
      );
      setMessages(response.data);
      setPagination(response.pagination);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast({
        title: "Error",
        description: "Failed to fetch messages",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchMessages();
  }, [pagination.page, statusFilter]);

  // Handle search
  const handleSearch = () => {
    setPagination((prev) => ({ ...prev, page: 1 }));
    fetchMessages();
  };

  // Handle view message
  const handleViewMessage = async (message: MessageType) => {
    setSelectedMessage(message);
    setIsViewModalOpen(true);

    // If message is new, mark it as read
    if (message.status === "new") {
      try {
        const updatedMessage = await updateMessageStatus(message._id, "read");
        // Update message in the list
        setMessages((prev) =>
          prev.map((m) => (m._id === message._id ? updatedMessage.data : m))
        );
      } catch (error) {
        console.error("Error updating message status:", error);
      }
    }
  };

  // Handle delete message
  const handleDeleteMessage = async () => {
    if (!selectedMessage) return;

    try {
      await deleteMessage(selectedMessage._id);
      setIsDeleteModalOpen(false);

      // Remove message from the list
      setMessages((prev) => prev.filter((m) => m._id !== selectedMessage._id));

      toast({
        title: "Success",
        description: "Message deleted successfully",
        variant: "default",
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  // Handle status change
  const handleStatusChange = async (
    messageId: string,
    status: "new" | "read" | "replied" | "archived"
  ) => {
    try {
      const updatedMessage = await updateMessageStatus(messageId, status);

      // Update message in the list
      setMessages((prev) =>
        prev.map((m) => (m._id === messageId ? updatedMessage.data : m))
      );

      toast({
        title: "Success",
        description: `Message marked as ${status}`,
        variant: "default",
      });
    } catch (error) {
      console.error("Error updating message status:", error);
      toast({
        title: "Error",
        description: "Failed to update message status",
        variant: "destructive",
      });
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Get status badge
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>;
      case "read":
        return <Badge className="bg-green-500">Read</Badge>;
      case "replied":
        return <Badge className="bg-purple-500">Replied</Badge>;
      case "archived":
        return <Badge className="bg-gray-500">Archived</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Messages</h1>
          <Button
            variant="outline"
            onClick={loading ? undefined : fetchMessages}
            aria-disabled={loading}
            className={loading ? "opacity-50 cursor-not-allowed" : ""}
          >
            <RefreshCw
              size={16}
              className={`mr-2 ${loading ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10"
            />
          </div>
          <div className="w-full sm:w-48">
            <Select
              value={statusFilter}
              onValueChange={(value) => setStatusFilter(value)}
            >
              <SelectTrigger>
                <div className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Messages</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="read">Read</SelectItem>
                <SelectItem value="replied">Replied</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSearch} className="sm:w-auto">
            Search
          </Button>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center">
                        <RefreshCw size={20} className="animate-spin mr-2" />
                        <span>Loading messages...</span>
                      </div>
                    </td>
                  </tr>
                ) : messages.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No messages found
                    </td>
                  </tr>
                ) : (
                  messages.map((message) => (
                    <tr
                      key={message._id}
                      className={`hover:bg-gray-50 ${
                        message.status === "new"
                          ? "font-semibold bg-blue-50"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-900">
                            {message.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {message.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-900 line-clamp-1">
                          {message.subject || "(No subject)"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(message.createdAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {getStatusBadge(message.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleViewMessage(message)}
                            title="View Message"
                          >
                            <Eye size={16} />
                          </Button>

                          {message.status !== "replied" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(message._id, "replied")
                              }
                              title="Mark as Replied"
                            >
                              <CheckCircle size={16} />
                            </Button>
                          )}

                          {message.status !== "archived" && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleStatusChange(message._id, "archived")
                              }
                              title="Archive Message"
                            >
                              <Archive size={16} />
                            </Button>
                          )}

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setSelectedMessage(message);
                              setIsDeleteModalOpen(true);
                            }}
                            title="Delete Message"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={
                    pagination.page === 1
                      ? undefined
                      : () =>
                          setPagination((prev) => ({
                            ...prev,
                            page: Math.max(1, prev.page - 1),
                          }))
                  }
                  aria-disabled={pagination.page === 1}
                  className={
                    pagination.page === 1
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>

              {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                .filter((page) => {
                  // Show first page, last page, and pages around current page
                  return (
                    page === 1 ||
                    page === pagination.pages ||
                    Math.abs(page - pagination.page) <= 1
                  );
                })
                .map((page, index, array) => {
                  // Add ellipsis if there are gaps
                  const showEllipsisBefore =
                    index > 0 && array[index - 1] !== page - 1;

                  return (
                    <React.Fragment key={page}>
                      {showEllipsisBefore && (
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                      )}
                      <PaginationItem>
                        <PaginationLink
                          isActive={page === pagination.page}
                          onClick={() =>
                            setPagination((prev) => ({ ...prev, page }))
                          }
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    </React.Fragment>
                  );
                })}

              <PaginationItem>
                <PaginationNext
                  onClick={
                    pagination.page === pagination.pages
                      ? undefined
                      : () =>
                          setPagination((prev) => ({
                            ...prev,
                            page: Math.min(prev.pages, prev.page + 1),
                          }))
                  }
                  aria-disabled={pagination.page === pagination.pages}
                  className={
                    pagination.page === pagination.pages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      {/* View Message Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Message Details</DialogTitle>
            <DialogDescription>
              From {selectedMessage?.name} ({selectedMessage?.email})
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 my-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Subject</h3>
              <p className="mt-1">
                {selectedMessage?.subject || "(No subject)"}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Message</h3>
              <p className="mt-1 whitespace-pre-line">
                {selectedMessage?.message}
              </p>
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <span>
                Received:{" "}
                {selectedMessage && formatDate(selectedMessage.createdAt)}
              </span>
              <span>Status: {selectedMessage?.status}</span>
            </div>
          </div>

          <DialogFooter className="flex justify-between sm:justify-between">
            <div className="flex gap-2">
              {selectedMessage?.status !== "replied" && (
                <Button
                  variant="outline"
                  onClick={() => {
                    if (selectedMessage) {
                      handleStatusChange(selectedMessage._id, "replied");
                    }
                    setIsViewModalOpen(false);
                  }}
                >
                  <CheckCircle size={16} className="mr-2" />
                  Mark as Replied
                </Button>
              )}

              {selectedMessage?.status !== "archived" && (
                <Button
                  variant="outline"
                  onClick={() => {
                    if (selectedMessage) {
                      handleStatusChange(selectedMessage._id, "archived");
                    }
                    setIsViewModalOpen(false);
                  }}
                >
                  <Archive size={16} className="mr-2" />
                  Archive
                </Button>
              )}
            </div>

            <Button onClick={() => setIsViewModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this message? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-between">
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteMessage}>
              <Trash2 size={16} className="mr-2" />
              Delete Message
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
};

export default Messages;
