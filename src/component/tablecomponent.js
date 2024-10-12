"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  IconButton,
  TablePagination,
  TableSortLabel,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PaidIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/HourglassEmpty";
import SentIcon from "@mui/icons-material/Send";

const TableComponent = ({ theme }) => {
  const tableStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };
  const [data, setData] = useState([
    {
      id: 5020,
      name: "Steven Myers",
      email: "lori06@morse.com",
      total: "$2029",
      issued: "10 Oct 2024",
      balance: "Paid",
      avatar: "SM",
      status: "paid",
    },
    {
      id: 5008,
      name: "Monica Fuller",
      email: "gdurham@lee.com",
      total: "$2032",
      issued: "22 Oct 2024",
      balance: "Pending",
      avatar: "MF",
      status: "pending",
    },
    {
      id: 5011,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Sent",
      avatar: "CD",
      status: "sent",
    },
    {
      id: 5012,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Sent",
      avatar: "CD",
      status: "sent",
    },
    {
      id: 5013,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Sent",
      avatar: "CD",
      status: "sent",
    },
    {
      id: 5014,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Sent",
      avatar: "CD",
      status: "sent",
    },
    {
      id: 5015,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Sent",
      avatar: "CD",
      status: "sent",
    },
    {
      id: 5016,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Paid",
      avatar: "CD",
      status: "paid",
    },
    {
      id: 5017,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Paid",
      avatar: "CD",
      status: "paid",
    },
    {
      id: 5018,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Paid",
      avatar: "CD",
      status: "paid",
    },
    {
      id: 5019,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Pending",
      avatar: "CD",
      status: "pending",
    },
    {
      id: 5021,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Pending",
      avatar: "CD",
      status: "pending",
    },
    {
      id: 5022,
      name: "Chad Davis",
      email: "jgutierrez@jackson.com",
      total: "$2060",
      issued: "06 Oct 2024",
      balance: "Pending",
      avatar: "CD",
      status: "pending",
    },
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [orderBy, setOrderBy] = useState("total");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Handle sorting request
  const handleSortRequest = (property) => {
    const isAscending = orderBy === property && orderDirection === "asc";
    setOrderDirection(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handle search input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  // Handle status filter change
  const handleStatusFilterChange = (event) => {
    setFilterStatus(event.target.value);
    setPage(0);
  };

  // Handle pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter and sort the data
  const filteredData = data
    .filter(
      (row) =>
        (row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterStatus === "" ||
          filterStatus === "all" ||
          row.status === filterStatus)
    )
    .sort((a, b) => {
      const isAsc = orderDirection === "asc";
      if (orderBy === "total") {
        const totalA = parseFloat(a.total.replace(/[^0-9.-]+/g, ""));
        const totalB = parseFloat(b.total.replace(/[^0-9.-]+/g, ""));
        return isAsc ? totalA - totalB : totalB - totalA;
      } else {
        return isAsc
          ? a[orderBy].localeCompare(b[orderBy])
          : b[orderBy].localeCompare(a[orderBy]);
      }
    });

  const renderStatusIcon = (status) => {
    switch (status) {
      case "paid":
        return <PaidIcon color="success" />;
      case "pending":
        return <PendingIcon color="warning" />;
      case "sent":
        return <SentIcon color="info" />;
      default:
        return null;
    }
  };

  return (
    <Paper sx={{ width: "100%", overflowX: "auto", ...tableStyles }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          ...tableStyles,
        }}
      >
        <TextField
          label="Search Invoice"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{
            input: {
              color: tableStyles.color,
              backgroundColor: tableStyles.backgroundColor,
            },
            label: {
              color: tableStyles.color,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: tableStyles.color,
              },
              "&:hover fieldset": {
                borderColor: tableStyles.color,
              },
              "&.Mui-focused fieldset": {
                borderColor: tableStyles.color,
              },
            },
          }}
        />

        <FormControl
          variant="outlined"
          sx={{
            minWidth: 200,
            color: tableStyles.color,
            backgroundColor: tableStyles.backgroundColor,
          }}
        >
          <InputLabel
            sx={{
              color: tableStyles.color,
              backgroundColor: tableStyles.backgroundColor,
            }}
          >
            Invoice Status
          </InputLabel>
          <Select
            label="Invoice Status"
            value={filterStatus}
            onChange={handleStatusFilterChange}
            sx={{
              backgroundColor: tableStyles.backgroundColor, // Dynamic background color based on theme
              color: tableStyles.color, // Dynamic text color based on theme
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: tableStyles.color,
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: tableStyles.color, // Border color when focused
              },
              ".MuiSvgIcon-root": {
                color: tableStyles.color, // Icon color adapts to theme
              },
              "&:hover": {
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: tableStyles.color, // Change border color on hover
                },
              },
            }}
          >
            <MenuItem
              value="all"
              sx={{
                color: tableStyles.color,
                backgroundColor: tableStyles.backgroundColor,
                "&:hover": {
                  backgroundColor: tableStyles.color, // Change background color on hover
                  color: tableStyles.backgroundColor, // Change text color on hover
                },
              }}
            >
              All
            </MenuItem>
            <MenuItem
              value="paid"
              sx={{
                color: tableStyles.color,
                backgroundColor: tableStyles.backgroundColor,
                "&:hover": {
                  backgroundColor: tableStyles.color, // Change background color on hover
                  color: tableStyles.backgroundColor, // Change text color on hover
                },
              }}
            >
              Paid
            </MenuItem>
            <MenuItem
              value="pending"
              sx={{
                color: tableStyles.color,
                backgroundColor: tableStyles.backgroundColor,
                "&:hover": {
                  backgroundColor: tableStyles.color, // Change background color on hover
                  color: tableStyles.backgroundColor, // Change text color on hover
                },
              }}
            >
              Pending
            </MenuItem>
            <MenuItem
              value="sent"
              sx={{
                color: tableStyles.color,
                backgroundColor: tableStyles.backgroundColor,
                "&:hover": {
                  backgroundColor: tableStyles.color, // Change background color on hover
                  color: tableStyles.backgroundColor, // Change text color on hover
                },
              }}
            >
              Sent
            </MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" color="primary">
          + Create Invoice
        </Button>
      </div>

      <TableContainer sx={{ maxHeight: 700, ...tableStyles }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ color: tableStyles.color }}
        >
          <TableHead sx={{ backgroundColor: tableStyles.backgroundColor }}>
            <TableRow sx={{ ...tableStyles }}>
              <TableCell>#</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "total"}
                  direction={orderDirection}
                  onClick={() => handleSortRequest("total")}
                >
                  Total
                </TableSortLabel>
              </TableCell>
              <TableCell>Issued Date</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ ...tableStyles }}>
            {filteredData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} sx={{ color: tableStyles.color }}>
                  <TableCell
                    sx={{ color: tableStyles.color }}
                  >{`#${row.id}`}</TableCell>
                  <TableCell sx={{ color: tableStyles.color }}>
                    {renderStatusIcon(row.status)}
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      flexWrap: "wrap",
                      overflow: "hidden",
                    }}
                    sx={{ color: tableStyles.color }}
                  >
                    <Avatar>{row.avatar}</Avatar>
                    {row.name}
                    <br />
                    {row.email}
                  </TableCell>
                  <TableCell sx={{ color: tableStyles.color }}>
                    {row.total}
                  </TableCell>
                  <TableCell sx={{ color: tableStyles.color }}>
                    {row.issued}
                  </TableCell>
                  <TableCell sx={{ color: tableStyles.color }}>
                    {row.balance}
                  </TableCell>
                  <TableCell sx={{ color: tableStyles.color }}>
                    <IconButton aria-label="delete" sx={{ color: "red" }}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="more" sx={{ color: "blue" }}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        // sx={{
        //   color: tableStyles.color,
        //   backgroundColor: tableStyles.backgroundColor,
        // }}
        sx={{
          color: tableStyles.color,
          backgroundColor: tableStyles.backgroundColor,
          "& .MuiSelect-icon": {
            color: tableStyles.color, // Icon color based on the theme
          },
          "& .MuiSelect-outlined": {
            borderColor: tableStyles.color, // Border color for the Select component
          },
          "&:hover .MuiSelect-outlined": {
            borderColor: tableStyles.color, // Border color on hover
          },
          "& .MuiTablePagination-selectRoot": {
            color: tableStyles.color, // Text color for the select root
          },
          "& .MuiTablePagination-displayedRows": {
            color: tableStyles.color, // Color for the displayed rows text
          },
          "& .MuiTablePagination-select": {
            color: tableStyles.color, // Color for the options text in the Select
          },
          "& .MuiMenuItem-root": {
            color: tableStyles.color, // Color for each menu item (rows per page options)
            backgroundColor: tableStyles.backgroundColor, // Background color for menu items
            "&:hover": {
              backgroundColor: tableStyles.color, // Change background on hover
              color: tableStyles.backgroundColor, // Change text color on hover
            },
          },
        }}
      />
    </Paper>
  );
};

export default TableComponent;
